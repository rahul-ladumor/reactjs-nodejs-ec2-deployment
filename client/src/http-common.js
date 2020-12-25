import axios from "axios";

const IP = '54.172.34.181';
const PORT = '8080'

export default axios.create({
  baseURL: `http://${IP}:${PORT}/api`,
  headers: {
    "Content-type": "application/json"
  }
});