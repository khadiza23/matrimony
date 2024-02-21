/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import maleAvatar from "./../../assets/Male_Avatar.jpg";
import "./../../Components/common/title.css";
const Biodata = () => {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-2xl">
      <div>
        <figure className=" bg-[#e9aa6c]">
          <div className="avatar">
            <div className="md:w-24 w-32 mx-auto my-6 rounded-full">
              <img src={maleAvatar} />
            </div>
          </div>
        </figure>
        <h1 className="text-2xl text-center text-[#7D0A0A] uppercase mt-3">
          Biodata No: SKJR12
        </h1>
      </div>

      <div className="card-body">
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols text-gray-600 text-[16px]">
            <tr className="border-y">
              <td className="border-r">Height</td>
              <td>5'6"</td>
            </tr>
            <tr className="border-y">
              <td className="border-r">Occupation</td>
              <td>Student</td>
            </tr>
            <tr className="border-y">
              <td className="border-r">Date of Birth</td>
              <td>12-06-2000</td>
            </tr>
          </table>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-[#7D0A0A] text-white">
            <Link to="/details">More Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
