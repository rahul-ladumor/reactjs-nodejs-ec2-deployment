import axios from "axios";

export default axios.create({
  baseURL: "http://54.172.34.181:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});