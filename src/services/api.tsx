import axios from 'axios';

export const api = axios.create({
  baseURL: "https://centro-pop.herokuapp.com",
});