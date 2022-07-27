# SSS-Module

This is SSS Extension Utility module.

# Installation

Node.js

```
npm install sss-module
```

# Usage

```typescript
import { getActiveAddress } from 'sss-module'

const addr = getActiveAddress()

console.log({ addr })
```

# Feature

- getActiveName(): string
- getActiveAddress(): string
- getActiveNetworkType(): string
- getActivePublicKey(): string
- setTransaction(transaction: Transaction): void
- setTransactionByPayload(serializedTx: string): void
- setMessage(message: string, recipientPublicKey: string): void
- requestSign(): Promise\<SignedTransaction\>
- requestSignCosignatureTransaction(): Promise\<CosignatureSignedTransaction\>
- requestSignWithCosignatories(cosignatories: Account[]): Promise\<SignedTransaction\>
- requestSignEncription(): Promise\<EncryptedMessage\>
- getActiveAccountToken(verifierPublicKey: string | PublicAccount, customPayload?: Object, encryptedPayload?: string): Promise\<string\>
- isAllowedSSS(): boolean
- requestSSS(): boolean
