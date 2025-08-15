export default async function jwt(json: any, secret: string): Promise<string | undefined> {
  if (!secret)
    return undefined
  const header = {
    typ: 'JWT',
    alg: 'HS256',
  }
  const base64EncodeURL = function (str: string): string {
    return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
  }

  const encodedHeader = base64EncodeURL(JSON.stringify(header))
  const encodedPayload = base64EncodeURL(JSON.stringify(json))
  const encoder = new TextEncoder()
  const algorithm = { name: 'HMAC', hash: 'SHA-256' }
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), algorithm, false, ['sign', 'verify'])
  const buf = encoder.encode(`${encodedHeader}.${encodedPayload}`)
  const sign = await crypto.subtle.sign(algorithm.name, key, buf)
  const hash = base64EncodeURL(String.fromCharCode(...new Uint8Array(sign)))

  return `${encodedHeader}.${encodedPayload}.${hash}`
}
