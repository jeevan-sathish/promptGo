import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  async function handleLogin(credential) {
    if (credential) {
      console.log(credential);
    }
    try {
      const response = await axios.post("http://localhost:3000/login", {
        token: credential.credentail,
      });
      const result = response.data.message;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <GoogleLogin
      onSuccess={handleLogin}
      onError={() => {
        console.log("google login failed");
      }}
    />
  );
};

export default Login;
