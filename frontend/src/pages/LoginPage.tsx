import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div style={{ backgroundColor: '#f2f4fa' }} className="w-full h-screen flex flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
