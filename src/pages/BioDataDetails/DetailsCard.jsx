import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/no-unescaped-entities */
const DetailsCard = () => {
  const navigate = useNavigate();
  const handleCommitmentBox = () => {
    Swal.fire({
      title: `Commitment!!!`,
      text: "If there a connection create between you both you must let us know through feedback option. May allah choose the best life partner for you.",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Okay",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Thank you!",
          text: "Your Commitment has been saved.",
          icon: "success",
        }).then(() => {
          // Redirect to the payment route
          navigate("/payment");
        });
      }
    });
  };
  return (
    <div className="max-w-5xl mx-auto my-10">
      <table className="table table-xs border table-pin-rows table-pin-cols text-gray-600 text-[16px] mb-12">
        <tr className="border-y">
          <th className="text-center text-2xl text-[#7D0A0A]" colSpan={2}>
            Educational Qualification
          </th>
        </tr>
        <tr className="border-y">
          <td className="border-r w-1/3 ">Post-graduation Passing Year</td>
          <td>2024</td>
        </tr>
        <tr className="border-y">
          <td className="border-r w-1/3 ">Group</td>
          <td>Computer Science and Engineering(CSE)</td>
        </tr>
        <tr className="border-y">
          <td className="border-r w-1/3 ">Name of the Institution</td>
          <td>
            Dhaka University of Engineering and Technology, Gazipur (DUET)
          </td>
        </tr>
        <tr className="border-y">
          <td className="border-r w-1/3 ">Graduation Passing Year</td>
          <td>2022</td>
        </tr>
        <tr className="border-y">
          <td className="border-r w-1/3 ">Group</td>
          <td>Computer Science and Engineering(CSE)</td>
        </tr>
        <tr className="border-y">
          <td className="border-r w-1/3 ">Name of the Institution</td>
          <td>
            Dhaka University of Engineering and Technology, Gazipur (DUET)
          </td>
        </tr>
        <tr className="border-y">
          <td className="border-r">HSC/Diploma Passing Year</td>
          <td>2018</td>
        </tr>
        <tr className="border-y">
          <td className="border-r w-1/3 ">Group</td>
          <td>Computer Science and Engineering(CSE)</td>
        </tr>
        <tr className="border-y">
          <td className="border-r w-1/3 ">Name of the Institution</td>
          <td>Jhenaidah Polytechnic Institute</td>
        </tr>
      </table>
      <table className="table table-xs border table-pin-rows table-pin-cols text-gray-600 text-[16px] mb-12">
        <tr className="border-y">
          <th className="text-center text-2xl text-[#7D0A0A]" colSpan={2}>
            Personal Information
          </th>
        </tr>
        <tr className="border-y">
          <td className="border-r w-1/3 ">Height</td>
          <td>5'6"</td>
        </tr>
        <tr className="border-y">
          <td className="border-r w-1/3 ">Weight</td>
          <td>60kg</td>
        </tr>
        <tr className="border-y">
          <td className="border-r">Complexion</td>
          <td>Brown</td>
        </tr>
        <tr className="border-y">
          <td className="border-r">Occupation</td>
          <td>Student</td>
        </tr>
        <tr className="border-y">
          <td className="border-r">Salary</td>
          <td>N/A</td>
        </tr>
        <tr className="border-y">
          <td className="border-r">Date of Birth</td>
          <td>12-06-2000</td>
        </tr>
        <tr className="border-y">
          <td className="border-r">Present Address</td>
          <td>Joydebpur, Gazipur</td>
        </tr>
        <tr className="border-y">
          <td className="border-r">Permanent Address</td>
          <td>Monirampur, Jashore</td>
        </tr>
      </table>
      <table className="table table-xs border table-pin-rows table-pin-cols text-gray-600 text-[16px]">
        <tr className="border-y">
          <th className="text-center text-2xl text-[#7D0A0A]" colSpan={2}>
            Family Information
          </th>
        </tr>
        <tr className="border-y">
          <td className="border-r w-1/3 ">Father's Occupation</td>
          <td>Teacher</td>
        </tr>
        <tr className="border-y">
          <td className="border-r w-1/3 ">Mother's Occupation</td>
          <td>Housewife</td>
        </tr>
        <tr className="border-y">
          <td className="border-r">Siblings</td>
          <td>3</td>
        </tr>
        <tr className="border-y">
          <td className="border-r">Brother(s) </td>
          <td>2</td>
        </tr>
        <tr className="border-y">
          <td className="border-r">Sister(s)</td>
          <td>1</td>
        </tr>
        <tr className="border-y">
          <td className="border-r">Brother's Occupation</td>
          <td>Student</td>
        </tr>
        <tr className="border-y">
          <td className="border-r">Sister's Occupation</td>
          <td>Married</td>
        </tr>
      </table>

      <div className=" text-center bg-[#ed8e30] py-10 rounded-b-lg">
        <h3 className="text-xl text-[#fff] mb-5">
          Want to be connect? To see the contact information you need to pay
          100tk.
        </h3>
        <button
          onClick={handleCommitmentBox}
          className="btn bg-[#7D0A0A] hover:bg-[#9c3737] text-white"
        >
          Payment
        </button>
      </div>
    </div>
  );
};

export default DetailsCard;
