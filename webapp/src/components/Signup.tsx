import React, { useState } from 'react';
import { FlexcColumn, Title, SpaceBetween, Error, Success } from './core';
import useAsync from '../hooks/useAsync';
import { Link } from 'react-router-dom';
import { signup } from '../services';

const Signup: React.FC = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSignup = () => signup(newUser);

  const  { execute, status, value, error } = useAsync(onSignup, false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ 
      ...newUser, 
      [event.target.name]: event.target.value 
    });
  }

  const handleSumit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    execute();
  };

  return (
    <FlexcColumn>
      <Title>Signup</Title>

      <form onSubmit={handleSumit}>
        <SpaceBetween>
          <label>Username:</label>
          <input 
            type="text"
            name="username"
            value={newUser.username} 
            onChange={handleChange}
            required
           />
        </SpaceBetween>

        <SpaceBetween>
          <label>Email:</label>
          <input 
            type="email" 
            name="email"
            value={newUser.email}
            onChange={handleChange}
            required
          />
        </SpaceBetween>

        <SpaceBetween>
          <label>Password:</label>
          <input 
            type="password" 
            name="password1"
            value={newUser.password1} 
            onChange={handleChange}
            required
            />
        </SpaceBetween>

        <SpaceBetween>
          <label>Confirm password:</label>
          <input 
            type="password"
            name="password2"
            value={newUser.password2}
            onChange={handleChange}
            required
            />
        </SpaceBetween>
    
        {error && <Error>{error.message}</Error>}
        {value && <Success>Created!</Success>}

        <SpaceBetween>
          <button  type="submit">
            {status !== "pending" ? "Sign up" : "Loading..."}
          </button>
        </SpaceBetween>
      </form>

      <br />
      <Link to="/login">Login</Link>
    </FlexcColumn>
  )
};

export default Signup