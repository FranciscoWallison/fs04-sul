// LoginPage.js
import React from 'react';
import { useAuth } from './AuthContext';

const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    // Lógica de autenticação...
    const userData = { username: 'usuário' }; // Substitua por dados reais
    login(userData);
  };

  return (
    <div>
      <h2>Home - Page</h2>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default LoginPage;
