import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import { MainView } from 'layout/MainView';
import { DashboardPage } from 'pages/Dashboard';
import { TransactionsPage } from 'pages/Transactions';
import { HomePage } from 'pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={
            <MainView>
              <HomePage />
            </MainView>
          } />

          <Route path="/dashboard" element={
            <MainView>
              <DashboardPage />
            </MainView>
          } />

          <Route path="/transactions" element={
            <MainView>
              <TransactionsPage />
            </MainView>
          } />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
