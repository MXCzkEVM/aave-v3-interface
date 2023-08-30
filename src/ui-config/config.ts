

import {
    CustomMarket,
} from './marketsConfig';


const market = process.env.NEXT_PUBLIC_MARKET || "proto_mainnet_v3"

//  ['proto_wannsee_v3', 'proto_mainnet_v3', 'proto_local_v3', 'proto_wannsee_mainnet_v3]
export const CurrentMarket = market as CustomMarket