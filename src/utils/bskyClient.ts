import { JoseKey } from '@atproto/jwk-jose'
import {
  NodeOAuthClient,
  type NodeSavedState
  // type NodeSavedState,
  // type Session
} from '@atproto/oauth-client-node'

export const bskyClient = new NodeOAuthClient({
  // This object will be used to build the payload of the /client-metadata.json
  // endpoint metadata, exposing the client metadata to the OAuth server.
  clientMetadata: {
    // Must be a URL that will be exposing this metadata
    client_id: 'https://skytools.chitowarlock.com/api/client-metadata.json',
    client_name: 'Sky Tools',
    client_uri: 'https://skytools.chitowarlock.com',
    // logo_uri: 'https://my-app.com/logo.png',
    redirect_uris: ['https://skytools.chitowarlock.com/api/callback'],
    grant_types: ['authorization_code', 'refresh_token'],
    response_types: ['code'],
    application_type: 'web',
    token_endpoint_auth_method: 'private_key_jwt',
    dpop_bound_access_tokens: true,
    jwks_uri: 'https://skytools.chitowarlock.com/api/jwks.json',
    scope: 'atproto',
    token_endpoint_auth_signing_alg: 'sig'
  },

  // Used to authenticate the client to the token endpoint. Will be used to
  // build the jwks object to be exposed on the "jwks_uri" endpoint.
  keyset: await Promise.all([
    JoseKey.fromJWK(import.meta.env.PRIVATE_KEY_1),
    JoseKey.fromJWK(import.meta.env.PRIVATE_KEY_2),
    JoseKey.fromJWK(import.meta.env.PRIVATE_KEY_3)
  ]),

  // Interface to store authorization state data (during authorization flows)
  stateStore: {
    async set(/* key: string, internalState: NodeSavedState */): Promise<void> {},
    async get(/* key: string */): Promise<NodeSavedState | undefined> {
      return undefined
    },
    async del(/* key: string */): Promise<void> {}
  },

  // Interface to store authenticated session data
  sessionStore: {
    async set(/* sub: string, session: Session */): Promise<void> {},
    async get(/* sub: string */): Promise</* Session |  */ undefined> {},
    async del(/* sub: string */): Promise<void> {}
  }

  // A lock to prevent concurrent access to the session store. Optional if only one instance is running.
  // requestLock
})
