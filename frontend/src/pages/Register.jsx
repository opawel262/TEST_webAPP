import Form from "../components/Form";

function Register() {
  return (
    <div>
      <h1>Register Page</h1>
      <Form route="/api/users/create/" method="register" />
    </div>
  );
}
export default Register;
