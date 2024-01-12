// DashboardPage.js
import React from 'react';
import { useAuth } from './AuthContext';

const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Página do Dashboard</h2>
      {user ? (
        <div>
          <p>Bem-vindo, {user.username}!</p>
          <button onClick={logout}>Sair</button>
        </div>
      ) : (
        <p>Você não está autenticado.</p>
      )}
    </div>
  );
};

export default DashboardPage;
