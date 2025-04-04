import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import loginUser from '../lib/loginUser';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginData);
  };

  return (
    <Form className="w-full bg-white rounded border-gray-200 border p-6 font-bold max-w-sm" onSubmit={handleSubmit}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Log In to Your Account</h2>
      </div>

      <Form.Group className="flex flex-col mb-5">
        <Form.Label className="text-sm">Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          className="outline-gray-400 border-gray-300 border rounded h-9 font-thin pl-3 text-sm"
        />
      </Form.Group>

      <Form.Group className="flex flex-col mb-5">
        <Form.Label className="text-sm">Password</Form.Label>
        <Form.Control
          type="password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          className="outline-gray-400 border-gray-300 border rounded h-9 font-thin pl-3 text-sm"
        />
      </Form.Group>

      <button
        type="submit"
        className="bg-gray-950 w-full text-white py-2 rounded-xl hover:bg-gray-700 transition duration-300 cursor-pointer"
        >
        Log In
        </button>

    </Form>
  );
};

export default LoginForm;
