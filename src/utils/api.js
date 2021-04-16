import Axios from "./axios";

async function login({ email = "", password = "" }) {
  try {
    const response = await Axios.post("auth/signin", { email, password });

    return response;
  } catch (error) {
    console.log(error);
    console.error("deu ruim", error);

    throw error;
  }
}

export { login };
