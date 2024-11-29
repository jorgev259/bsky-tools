import { bskyClient } from '../../../utils/bskyClient'

export async function GET() {
  return new Response(JSON.stringify(bskyClient.jwks), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
