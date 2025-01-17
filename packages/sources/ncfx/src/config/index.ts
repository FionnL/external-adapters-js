import { AdapterConfig } from '@chainlink/external-adapter-framework/config'

export const config = new AdapterConfig({
  API_USERNAME: {
    description: 'Username for the NCFX API',
    type: 'string',
  },
  API_PASSWORD: {
    description: 'Password for the NCFX API',
    type: 'string',
    sensitive: true,
  },
  FOREX_WS_API_KEY: {
    description: 'API key for Forex websocket endpoint',
    type: 'string',
    sensitive: true,
  },
  WS_API_ENDPOINT: {
    type: 'string',
    description: 'The WS API endpoint to use for the crypto endpoint',
    default: 'wss://cryptofeed.ws.newchangefx.com',
  },
  FOREX_WS_API_ENDPOINT: {
    type: 'string',
    description: 'The WS API endpoint to use for the forex endpoint',
    default: 'wss://fiat.ws.newchangefx.com/sub/fiat/ws/ref',
  },
})
