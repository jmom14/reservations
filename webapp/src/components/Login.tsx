import React, { useState } from 'react';
import { FlexcColumn, Title, SpaceBetween } from './core';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { LOGIN_SAGA } from '../redux/sagas/actions';

interface IUser{
  username: string,
  password: string,
}

const Login: React.FC = () => {
  const [user, setUser] = useState<IUser>({
    username: '',
    password: '',
  });
  const isLoading = useSelector((state: any) => state.auth.isLoading);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: LOGIN_SAGA, payload: user });
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
          {isLoading ? 'Loading...' : 'Log in'}
        </button> 
      </form>

      <Link to="/signup">Sign up</Link> 

      </FlexcColumn>
  )
}

export default Login