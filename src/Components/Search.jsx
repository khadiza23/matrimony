import { Link } from "react-router-dom";
import "./common/styles.css";
import "./common/title.css";
const Search = () => {
  return (
    <section className="shape" id="search">
      <h1 className="title">Find Your Soulmate.</h1>
      <form action="">
        <table>
          <tr>
            <td>Looking for: </td>
            <td>
              <select className="select select-ghost select-sm w-full max-w-sm">
                <option selected>All</option>
                <option>Bridegroom</option>
                <option>Bride</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Qualification: </td>
            <td>
              <select className="select select-ghost select-sm w-full max-w-sm">
                <option selected>BSc</option>
                <option>MSc</option>
                <option>PhD</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>District: </td>
            <td>
              <select className="select select-ghost select-sm w-full max-w-sm">
                <option disabled selected>
                  Select District
                </option>
                <option>Feni</option>
                <option>Rajshahi</option>
                <option>Chattogram</option>
              </select>
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              <button className="btn bg-[#7D0A0A] text-white">
                <Link to="/biodatas">Search</Link>
              </button>
            </td>
          </tr>
        </table>
      </form>
    </section>
  );
};

export default Search;
