import { GoogleLogin } from "@react-oauth/google";

import { userLogin } from "../reduxState/authThunkFun/userLogin";

const Login = () => {
  return (
    <GoogleLogin
      onSuccess={userLogin}
      onError={() => {
        console.log("google login failed");
      }}
    />
  );
};

export default Login;
