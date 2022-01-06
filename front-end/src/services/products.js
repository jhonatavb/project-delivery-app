import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default function getProducts() {
  return axios.get('http://localhost:3001/customer/products')
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
}
