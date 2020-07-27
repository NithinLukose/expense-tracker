import React from 'react';
import { GlobalProvider } from "./context/GlobalState";
import Header from './components/header'
import Balance from './components/Balance'
import IncomeExpenses from  './components/incomeExpense'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import './App.css';

function App() {
  return (
    <GlobalProvider>

      <Header />
      <div className="container">

        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />

      </div>

    </GlobalProvider>
  );
}

export default App;
