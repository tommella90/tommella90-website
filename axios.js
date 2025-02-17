// src/axios.js
import axios from 'axios';

const baseURL =  process.env.VUE_APP_API_URL || 'http://localhost:3000';


const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
