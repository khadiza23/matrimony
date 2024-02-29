import { Link } from "react-router-dom";
import "./common/styles.css";
import "./common/title.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User Registered successfully");
      })
      .catch((error) => {
        if (error.message.includes("email-already-in-use")) {
          setError("Email Already exists");
        }
      });
    console.log(success);
  };
  return (
    <section id="register" className="shape">
      <h1 className="title">Create your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <tr>
            <td>Name: </td>
            <td>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered input-error input-sm w-full mb-3"
                {...register("name")}
              />
            </td>
          </tr>

          <tr>
            <td>Email: </td>
            <td>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered input-error input-sm w-full mb-3"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
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
                {...register(
                  "password",

                  { required: true, minLength: 6 }
                )}
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600 mb-5">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600 mb-5">
                  Password should be minimum 6 length
                </span>
              )}
            </td>
          </tr>
          <tr>
            <td>Picture: </td>
            <td>
              <input
                type="file"
                name="pass"
                placeholder="Enter Your Password"
                className="input w-full mb-3"
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
      {error ? (
        <p className="text-red-600 py-4 bg-slate-100 font-semibold text-xl text-center">
          {error}
        </p>
      ) : (
        <p className="text-green-600 py-4 bg-slate-100 font-semibold text-xl text-center">
          {success}
        </p>
      )}
    </section>
  );
};

export default Register;
