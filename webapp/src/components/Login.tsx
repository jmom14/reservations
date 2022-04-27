import React, { useState } from 'react';
import { FlexcColumn, Title, SpaceBetween } from './core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAsync from '../hooks/useAsync';

interface IUser{
  username: string,
  password: string,
}

const Login = () => {
  const [user, setUser] = useState<IUser>({
    username: '',
    password: '',
  });

  const onLogin = async () => {
    return await axios.post('http://localhost:8000/auth/login/', user);
  };

  const  { execute, status, value, error } = useAsync(onLogin, false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    execute();
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name] : event.target.value,
    })
  };

  return (
    <FlexcColumn>
      <Title>Login</Title>

      <form onSubmit={handleSubmit}>

        <SpaceBetween>
          <label>Username:</label>
          <input 
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
           />
        </SpaceBetween>

        <SpaceBetween>
          <label>Password: </label>
          <input 
            type="password" 
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </SpaceBetween>

        <button type="submit">
          Login
        </button>
          
      </form>

      <Link to="/signup">Sign up</Link> 
      </FlexcColumn>
  )
}

export default Login