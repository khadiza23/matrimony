/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import "./common/styles.css";
import "./common/title.css";
import { AuthContext } from "../providers/AuthProvider";
const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { signIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.pass.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess("User logged in successfully");
        console.log(user, success);
      })
      .catch((error) => {
        if (error.message.includes("invalid-credential")) {
          setError("Password is not matched");
        }
      });
  };
  return (
    <section className="shape">
      <h1 className="title">Login Please!</h1>
      <form onSubmit={handleLogin}>
        <table>
          <tr>
            <td>Email: </td>
            <td>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered input-error input-sm w-full mb-3"
                required
              />
            </td>
          </tr>
          <tr>
            <td>Password: </td>
            <td>
              <input
                type="password"
                name="pass"
                placeholder="Enter Your Password"
                className="input input-bordered input-error input-sm w-full mb-3"
                required
              />
            </td>
          </tr>

          <tr>
            <td colSpan={"2"}>
              <button type="submit" className="btn bg-[#7D0A0A] text-white">
                Login
              </button>
              <button className="btn bg-[#ed8e30] text-white">Reset</button>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              Don't have an account? Please{" "}
              <a href="/#register" className="text-[#7D0A0A] underline">
                Create Your Account
              </a>
            </td>
          </tr>
        </table>
      </form>
      {!error ? (
        <p className="text-green-500"> {success} </p>
      ) : (
        <p className="text-red-500">{error}</p>
      )}
    </section>
  );
};

export default Login;
