import { Navigate } from "react-router-dom";
import Form from "../components/Form";

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <Form route="/api/users/token/" method="login" />
    </div>
  );
}
export default Login;
