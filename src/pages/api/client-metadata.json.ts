import { bskyClient } from '../../utils/bskyClient'

export async function GET() {
  return new Response(JSON.stringify(bskyClient.clientMetadata))
}
