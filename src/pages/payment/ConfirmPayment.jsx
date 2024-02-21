import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ConfirmPayment = () => {
  const handlePayment = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your payment is done!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="max-w-xl mx-auto p-10 bg-[#e9d9d9]">
      <h2 className="text-center text-2xl font-semibold mb-10 text-[#7D0A0A]">
        Payment Confirmation
      </h2>
      <form>
        <table className="w-full mb-10">
          <tr>
            <td>
              <div className="mb-5">
                <label className="font-bold mb-3" htmlFor="">
                  Security Key:
                </label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="6 digit temporary password"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div className="mb-5">
                <label className="font-bold mb-3" htmlFor="">
                  Mobile Account Password:
                </label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Bkash/Nagad/Rocket password"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>
          </tr>
        </table>

        <div className="mb-5">
          <button
            onClick={handlePayment}
            className="btn  bg-[#7D0A0A] hover:bg-[#9c3737] text-white"
          >
            <Link to="/contact-info">Confirm Payment</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmPayment;
