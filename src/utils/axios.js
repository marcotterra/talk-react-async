import Axios from "axios";

const client = Axios.create({
  baseURL: "https://api.url",
});

export default client;
