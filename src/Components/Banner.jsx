import bannerImg from "./../assets/banner.png";
const Banner = () => {
  return (
    <div className="bg-[#F4F1F2]">
      <div className="md:flex mx-auto">
        <div className="">
          <img src={bannerImg} alt="" />
        </div>
        <div className="w-3/5 md:ml-10 md:mr-36 ml-12 md:my-6">
          <h2 className="text-5xl font-semibold text-[#ED8E30]">
            Gateway to Lifelong Connections
          </h2>
          <p className="w-full my-5 text-gray-500">
            যে ব্যক্তি চরিত্র রক্ষার উদ্দেশ্যে বিবাহ করে, আল্লাহ তাআলা তার
            সাহায্য করাকে নিজের প্রতি অবধারিত করে নিয়েছেন। . (তিরমিযী, হাদীস :
            ১৬৫৫; নাসায়ী, হাদীস : ৩২১৮)
          </p>
          <button className="btn bg-[#7D0A0A] text-white">
            <a href="#search">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
