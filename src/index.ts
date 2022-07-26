import {
  Account,
  CosignatureSignedTransaction,
  EncryptedMessage,
  PublicAccount,
  SignedTransaction,
  Transaction,
} from 'symbol-sdk'
export interface SSSWindow extends Window {
  SSS: {
    activeName: string
    activeAddress: string
    activePublicKey: string
    activeNetworkType: number
    setTransaction: (transaction: Transaction) => void
    setTransactionByPayload: (serializedTx: string) => void
    setMessage: (message: string, recipientPublicKey: string) => void
    requestSign: () => Promise<SignedTransaction>
    requestSignCosignatureTransaction: () => Promise<CosignatureSignedTransaction>
    requestSignWithCosignatories: (
      cosignatories: Account[]
    ) => Promise<SignedTransaction>
    requestSignEncription: () => Promise<EncryptedMessage>
    getActiveAccountToken: (
      verifierPublicKey: string,
      customPayload?: Object,
      encryptedPayload?: string
    ) => Promise<string>
  }
  isAllowedSSS: () => boolean
  requestSSS: () => boolean
}

declare const window: SSSWindow

export const getActiveName = () => window.SSS.activeName
export const getActiveAddress = () => window.SSS.activeAddress
export const getActiveNetworkType = () => window.SSS.activeNetworkType
export const getActivePublicKey = () => window.SSS.activePublicKey

export const setTransaction = (transaction: Transaction) => {
  return window.SSS.setTransaction(transaction)
}

export const setTransactionByPayload = (serializedTx: string) => {
  return window.SSS.setTransactionByPayload(serializedTx)
}

export const setMessage = (message: string, recipientPublicKey: string) => {
  window.SSS.setMessage(message, recipientPublicKey)
}

export const requestSign = (): Promise<SignedTransaction> => {
  return window.SSS.requestSign()
}

export const requestSignCosignatureTransaction =
  (): Promise<CosignatureSignedTransaction> => {
    return window.SSS.requestSignCosignatureTransaction()
  }

export const requestSignWithCosignatories = (
  cosignatories: Account[]
): Promise<SignedTransaction> => {
  return window.SSS.requestSignWithCosignatories(cosignatories)
}

export const requestSignEncription = (): Promise<EncryptedMessage> => {
  return window.SSS.requestSignEncription()
}

export const getActiveAccountToken = (
  verifierPublicKey: string | PublicAccount,
  customPayload?: Object,
  encryptedPayload?: string
): Promise<string> => {
  if (typeof verifierPublicKey === 'string') {
    return window.SSS.getActiveAccountToken(
      verifierPublicKey,
      customPayload,
      encryptedPayload
    )
  } else {
    const key = verifierPublicKey.publicKey
    if (
      verifierPublicKey.address.pretty().charAt(0) !==
      window.SSS.activeAddress.charAt(0)
    ) {
      return new Promise((_, reject) => {
        reject('Incorrect network type')
      })
    }
    return window.SSS.getActiveAccountToken(
      key,
      customPayload,
      encryptedPayload
    )
  }
}

export const isAllowedSSS = (): boolean => !!window.SSS
export const requestSSS = (): boolean => window.requestSSS()
