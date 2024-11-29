import type { APIRoute } from 'astro'
import { bskyClient } from '../../../utils/bskyClient'

export const GET: APIRoute = async ({ redirect }) => {
  const handle = 'chitowarlock.com'
  const state = '434321'

  const url = await bskyClient.authorize(handle, {
    state
  })

  return redirect(url.toString())
}
