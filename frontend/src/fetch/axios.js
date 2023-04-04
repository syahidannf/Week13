import axios from "axios";

// Set up Axios instance
const baseURL = "http://localhost:8000";
const instance = axios.create({ baseURL });

export default instance;
