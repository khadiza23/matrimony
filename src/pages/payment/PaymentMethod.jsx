import bkash from "./../../assets/bkash.jpg";
import nagad from "./../../assets/nagad.jpg";
import rocket from "./../../assets/rocket.png";
import { Link } from "react-router-dom";

const PaymentMethod = () => {
  return (
    <div>
      <div className="md:flex max-w-5xl mx-auto p-10 bg-[#e9d9d9]">
        <div className="w-1/2 px-5">
          <h1 className="text-center mb-10 text-[#7D0A0A] me-3 text-2xl font-semibold">
            Payment details
          </h1>
          <table className="w-full mb-10">
            <tr>
              <td>
                <div>
                  <label className="font-bold mb-3" htmlFor="">
                    Full Name
                  </label>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="input input-bordered input-error w-5/6 input-sm mb-3"
                />
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <label className="font-bold mb-3" htmlFor="">
                    E-mail
                  </label>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="input input-bordered input-error w-5/6 input-sm mb-3"
                />
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <label className="font-bold mb-3" htmlFor="">
                    Mobile NO.
                  </label>
                </div>
                <input
                  type="text"
                  minLength="11"
                  maxLength="11"
                  name="mobile"
                  placeholder="0000 0000 000"
                  className="input input-bordered input-error w-5/6 input-sm mb-3"
                />
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <label className="font-bold mb-3" htmlFor="">
                    Biodata NO.
                  </label>
                </div>
                <input
                  type="text"
                  name="biodata"
                  placeholder="Enter ID"
                  className="input input-bordered input-error w-5/6 input-sm mb-3"
                />
              </td>
            </tr>
          </table>
        </div>

        <div className="iphone shadow-2xl px-5">
          <fieldset>
            <h1 className="text-center mb-10 text-[#7D0A0A] me-3 text-2xl font-semibold">
              Payment Method
            </h1>

            <div className="form__radios">
              <div className="form__radio">
                <label className="font-semibold">
                  <img src={nagad} height="60px" width="80px" />
                  Nagad
                </label>
                <input name="pay" type="radio" />
              </div>

              <div className="form__radio">
                <label className="font-semibold">
                  <img src={bkash} height="60px" width="80px" />
                  Bkash
                </label>
                <input name="pay" type="radio" />
              </div>

              <div className="form__radio">
                <label className="font-semibold">
                  <img src={rocket} height="50px" width="70px" />
                  Rocket
                </label>
                <input name="pay" type="radio" />
              </div>
            </div>
          </fieldset>

          <div>
            <p>*per biodata 100 TK.</p>
            <button className="btn w-28 bg-[#7D0A0A] hover:bg-[#9c3737] text-white">
              <Link to="/confirmation">Pay</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
