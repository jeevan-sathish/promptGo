import { GoogleLogin } from "@react-oauth/google";
import { useSelector, useDispatch } from "react-redux";

import { userLogin } from "../reduxState/authThunkFun/userLogin";

const Login = () => {
  const { loading, error, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSuccess = (credentialResponse) => {
    dispatch(
      userLogin({
        credential: credentialResponse.credential,
      }),
    );
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => {
          console.log("Google login failed");
        }}
      />

      {loading && <p>Logging in...</p>}

      {error && <p>{error}</p>}

      {user && <p>Login successful</p>}
    </div>
  );
};

export default Login;
