import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  return (
    <GoogleLogin
      onSuccess={(credential) => {
        console.log(credential.credential);
      }}
      onError={() => {
        console.log("google login failed");
      }}
    />
  );
};

export default Login;
