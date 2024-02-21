import Biodata from "./Biodata";

const BioDatas = () => {
  return (
    <div>
      <div className="md:max-w-5xl gap-4 md:mx-auto mx-8 my-10 grid md:grid-cols-3">
        <Biodata />
        <Biodata />
        <Biodata />
      </div>
    </div>
  );
};

export default BioDatas;
