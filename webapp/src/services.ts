import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const setToken = (token: string | null) => {
  if (token) {
      axios.defaults.headers.common.Authorization = `Token ${token}`;
  } else {
      delete axios.defaults.headers.common.Authorization;
  }
};

interface IUserLogin {
    username: string,
    password: string,
}

interface INewUser {
  username: string,
  email: string, 
  password1: string,
  password2: string,
}

export const login = async (user: IUserLogin) => await axios.post(`${API_URL}/auth/login/`, user);

export const logout = async () => await axios.post(`${API_URL}/auth/logout/`);

export const signup = async (newUser: INewUser) => await axios.post(`${API_URL}/auth/registration/`, newUser);

export const getUser = async () => await axios.get(`${API_URL}/auth/user/`);
