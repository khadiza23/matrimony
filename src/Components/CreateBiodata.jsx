/* eslint-disable react/no-unescaped-entities */
import "./common/title.css";
const CreateBiodata = () => {
  return (
    <section className="max-w-5xl mx-auto shadow-xl bg-base-100 m-10">
      <h1 className="title bg-base-300 rounded-t-lg">Create your biodata</h1>
      <form className="p-10">
        <table className="w-full mb-10">
          <tr className="border-y">
            <th className="text-center text-2xl text-[#7D0A0A]" colSpan={4}>
              <h1 className="my-5">Educational Qualification</h1>
            </th>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Post-graduation Passing Year
                </label>
              </div>
              <input
                type="text"
                name="pgyear"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>

            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Group
                </label>
              </div>
              <input
                type="text"
                name="grouppg"
                className="input input-bordered input-error input-sm mb-3 w-5/6"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Name of the University
                </label>
              </div>
              <input
                type="text"
                name="uni1"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>

            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Graduation Passing Year
                </label>
              </div>
              <input
                type="text"
                name="gyear"
                className="input input-bordered input-error input-sm mb-3 w-5/6"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Group
                </label>
              </div>
              <input
                type="text"
                name="groupg"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>

            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Name of the University
                </label>
              </div>
              <input
                type="text"
                name="uni2"
                className="input input-bordered input-error input-sm mb-3 w-5/6"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  HSC/Diploma Passing Year
                </label>
              </div>
              <input
                type="text"
                name="diplomayear"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>

            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Group
                </label>
              </div>
              <input
                type="text"
                name="diplomagroup"
                className="input input-bordered input-error input-sm mb-3 w-5/6"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Name of the Institution
                </label>
              </div>
              <input
                type="text"
                name="pre-add"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>
          </tr>
        </table>

        <table className="w-full mb-10">
          <tr className="border-y">
            <th className="text-center text-2xl text-[#7D0A0A]" colSpan={4}>
              <h1 className="my-5">Personal Information</h1>
            </th>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Name
                </label>
              </div>
              <input
                type="text"
                name="name"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>

            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  District
                </label>
              </div>
              <input
                type="text"
                name="district"
                className="input input-bordered input-error input-sm mb-3 w-5/6"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Height
                </label>
              </div>
              <input
                type="text"
                name="height"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>

            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Weight
                </label>
              </div>
              <input
                type="text"
                name="weight"
                className="input input-bordered input-error input-sm mb-3 w-5/6"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Complexion
                </label>
              </div>
              <input
                type="text"
                name="complexion"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>

            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Occupation
                </label>
              </div>
              <input
                type="text"
                name="occupation"
                className="input input-bordered input-error input-sm mb-3 w-5/6"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Salary
                </label>
              </div>
              <input
                type="text"
                name="name"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>

            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Date of Birth
                </label>
              </div>
              <input
                type="text"
                name="dob"
                className="input input-bordered input-error input-sm mb-3 w-5/6"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Present Address
                </label>
              </div>
              <input
                type="text"
                name="pre-add"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>

            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Permanent Address
                </label>
              </div>
              <input
                type="text"
                name="per-add"
                className="input input-bordered input-error input-sm mb-3 w-5/6"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Mobile No.
                </label>
              </div>
              <input
                type="number"
                name="mobile"
                placeholder="your/your guardian's"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>

            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Email ID
                </label>
              </div>
              <input
                type="email"
                name="email"
                className="input input-bordered input-error input-sm mb-3 w-5/6"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Bridegroom's/Bride's Picture
                </label>
              </div>
              <input type="file" name="image" className="mb-3 w-5/6" />
            </td>
            <td>
              <fieldset className="p-4">
                <div>
                  <legend className="font-bold">Gender</legend>
                </div>
                <div className="inline-flex gap-3 mt-2">
                  <input
                    type="radio"
                    id="male"
                    value="male"
                    name="gender"
                    className="radio"
                    checked
                  />
                  <label>Male</label>
                  <input
                    type="radio"
                    id="female"
                    value="female"
                    name="gender"
                    className="radio"
                  />
                  <label>Female</label>
                </div>
              </fieldset>
            </td>
          </tr>
        </table>
        <table className="w-full mb-10">
          <tr className="border-y">
            <th className="text-center text-2xl text-[#7D0A0A]" colSpan={4}>
              <h1 className="my-5">Family Information</h1>
            </th>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Father's Name
                </label>
              </div>
              <input
                type="text"
                name="fname"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>

            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Father's Occupation
                </label>
              </div>
              <input
                type="text"
                name="foccupation"
                className="input input-bordered input-error input-sm mb-3 w-5/6"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Mother's Name
                </label>
              </div>
              <input
                type="text"
                name="mname"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>

            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Mother's Occupation
                </label>
              </div>
              <input
                type="text"
                name="moccupation"
                className="input input-bordered input-error input-sm mb-3 w-5/6"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Guardian's Contact No.
                </label>
              </div>
              <input
                type="text"
                name="guardianmobile"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>

            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  How many siblings you have?
                </label>
              </div>
              <input
                type="number"
                name="siblings"
                className="input input-bordered input-error input-sm mb-3 w-5/6"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Brother
                </label>
              </div>
              <input
                type="text"
                name="bro"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>

            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Sister
                </label>
              </div>
              <input
                type="text"
                name="sis"
                className="input input-bordered input-error input-sm mb-3 w-5/6"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Brother's Occupation
                </label>
              </div>
              <input
                type="text"
                name="bro-occupation"
                className="input input-bordered input-error w-5/6 input-sm mb-3"
              />
            </td>

            <td>
              <div>
                <label className="font-bold" htmlFor="">
                  Sister's Occupation
                </label>
              </div>
              <input
                type="text"
                name="sis-occupation"
                className="input input-bordered input-error input-sm mb-3 w-5/6"
              />
            </td>
          </tr>

          <tr>
            <td colSpan={4}>
              <button className="btn bg-[#7D0A0A] text-white">Submit</button>
            </td>
          </tr>
        </table>
      </form>
    </section>
  );
};

export default CreateBiodata;
