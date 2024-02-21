import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import groom from "./../../assets/groom.jpg";
const Testimonial = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="avatar-group -space-x-6 rtl:space-x-reverse">
        <div className="avatar">
          <div className="w-12">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img src={groom} />
          </div>
        </div>
      </div>
      <div className="text-gray-500 w-2/3 mx-auto text-center">
        <span>
          <FaQuoteLeft className="inline-block text-2xl mr-2 mb-2" />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          nulla necessitatibus quasi distinctio! Eos voluptatibus libero,
          provident architecto repellat dolorem similique voluptatum!
          <FaQuoteRight className="inline-block text-2xl ml-2 mb-2 " />
        </span>
      </div>
      <div>{<Rating style={{ maxWidth: 130 }} value={3} readOnly />}</div>
      <div>
        <p className="text-[#cc8080]">Jesmin and noyon</p>
      </div>
    </div>
  );
};

export default Testimonial;
