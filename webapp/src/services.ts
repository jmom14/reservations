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

export const login = async (user: IUserLogin) => await axios.post(`${API_URL}/auth/login/`, user);

export const logout = async () => await axios.post(`${API_URL}/auth/logout/`);

export const getUser = async () => await axios.get(`${API_URL}/auth/user/`);