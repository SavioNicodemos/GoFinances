import React, { useEffect, useState } from 'react';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import api from '../../services/api';

import Header from '../../components/Header';

import formatDate from '../../utils/formatDate';
import formatValue from '../../utils/formatValue';
import { capitalize } from '../../utils/strings';

import { GetTransactionResponse } from '../../@dtos/Requests';
import { Balance, TransactionDTO } from '../../@dtos/TransactionDTO';
import { Card, CardContainer, Container, TableContainer } from './styles';

const Dashboard = () => {
  const [transactions, setTransactions] = useState<TransactionDTO[]>([]);
  const [balance, setBalance] = useState<Balance>({
    income: '0',
    outcome: '0',
    total: '0',
  });

  useEffect(() => {
    async function loadTransactions() {
      api.get<GetTransactionResponse>('transactions').then(response => {
        setTransactions(response.data.transactions);
        setBalance(response.data.balance);
      });
    }

    loadTransactions();
  }, []);

  return (
    <>
      <Header />
      <Container>
        {balance && (
          <CardContainer>
            <Card>
              <header>
                <p>Entradas</p>
                <img src={income} alt="Income" />
              </header>
              <h1 data-testid="balance-income">
                {formatValue(Number(balance.income))}
              </h1>
            </Card>
            <Card>
              <header>
                <p>Saídas</p>
                <img src={outcome} alt="Outcome" />
              </header>
              <h1 data-testid="balance-outcome">
                {formatValue(Number(balance.outcome))}
              </h1>
            </Card>
            <Card $total>
              <header>
                <p>Total</p>
                <img src={total} alt="Total" />
              </header>
              <h1 data-testid="balance-total">
                {formatValue(Number(balance.total))}
              </h1>
            </Card>
          </CardContainer>
        )}

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td className="title">{capitalize(transaction.title)}</td>
                  <td className={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {formatValue(Number(transaction.value))}
                  </td>
                  <td>{capitalize(transaction.category.title)}</td>
                  <td>{formatDate(transaction.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
