import { Link } from "react-router-dom";
import "./common/styles.css";
import "./common/title.css";
const Register = () => {
  return (
    <section id="register" className="shape">
      <h1 className="title">Create your Account</h1>
      <form action="">
        <table>
          <tr>
            <td>Name: </td>
            <td>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered input-error input-sm w-full mb-3"
              />
            </td>
          </tr>
          {/* <tr>
            <td>Picture: </td>
            <td>
              <input
                type="text"
                name="pic"
                className="input input-bordered input-error input-sm w-full mb-3"
              />
            </td>
          </tr> */}
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
            <td>
              <button className="btn bg-[#7D0A0A] text-white">Register</button>
              <button className="btn bg-[#ed8e30] text-white">Reset</button>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              Already have an account? Please{" "}
              <Link to="/login" className="text-[#7D0A0A] underline">
                Login now
              </Link>
            </td>
          </tr>
        </table>
      </form>
    </section>
  );
};

export default Register;
