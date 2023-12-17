import { Balance, TransactionDTO } from "./TransactionDTO";

export type GetTransactionResponse = {
  transactions: TransactionDTO[];
  balance: Balance;
};
