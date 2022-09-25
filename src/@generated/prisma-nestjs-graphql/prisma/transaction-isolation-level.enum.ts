import { registerEnumType } from '@nestjs/graphql';

export enum TransactionIsolationLevel {
    Serializable = "Serializable"
}


registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
