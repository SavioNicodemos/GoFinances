export type CategoryDTO = {
  id: string;
  title: string;
  created_at: Date;
  updated_at: Date;
};

export type TransactionDTO = {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: CategoryDTO;
  created_at: Date;
};

export type Balance = {
  income: string;
  outcome: string;
  total: string;
};
