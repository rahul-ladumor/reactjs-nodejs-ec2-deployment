import axios from "axios";

const IP = '3.85.15.36';
const PORT = '8080'

export default axios.create({
  baseURL: `http://${IP}:${PORT}/api`,
  headers: {
    "Content-type": "application/json"
  }
});
