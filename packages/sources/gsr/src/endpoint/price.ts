import {
  CryptoPriceEndpoint,
  DEFAULT_LWBA_ALIASES,
  LwbaResponseDataFields,
  priceEndpointInputParametersDefinition,
} from '@chainlink/external-adapter-framework/adapter'
import { SingleNumberResultResponse } from '@chainlink/external-adapter-framework/util'
import { InputParameters } from '@chainlink/external-adapter-framework/validation'
import { config } from '../config'
import { transport } from '../transport/price'

const inputParameters = new InputParameters(priceEndpointInputParametersDefinition, [
  {
    base: 'ETH',
    quote: 'USD',
  },
])

type OmitResultFromLwba = Omit<LwbaResponseDataFields, 'Result'>

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Settings: typeof config.settings
  Response: OmitResultFromLwba & SingleNumberResultResponse
}

export const endpoint = new CryptoPriceEndpoint({
  name: 'price',
  aliases: ['price-ws', 'crypto', ...DEFAULT_LWBA_ALIASES],
  transport,
  inputParameters,
})
