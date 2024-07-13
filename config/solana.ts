import { Wallet } from '@coral-xyz/anchor'
import { decode } from '@coral-xyz/anchor/dist/cjs/utils/bytes/bs58'
import { Connection, Keypair } from '@solana/web3.js'

export const connection = new Connection('https://api.mainnet-beta.solana.com')
export const wallet = new Wallet(Keypair.fromSecretKey(decode(process.env.PRIVATE_KEY as string) as Uint8Array))
