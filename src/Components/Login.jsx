/* eslint-disable react/no-unescaped-entities */
import "./common/styles.css";
import "./common/title.css";
const Login = () => {
  return (
    <section className="shape">
      <h1 className="title">Login Please!</h1>
      <form action="">
        <table>
          <tr>
            <td>Email: </td>
            <td>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered input-error input-sm w-full mb-3"
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
              />
            </td>
          </tr>

          <tr>
            <td colSpan={"2"}>
              <button className="btn bg-[#7D0A0A] text-white">Login</button>
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
    </section>
  );
};

export default Login;
