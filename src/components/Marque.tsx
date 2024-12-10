import Marquee from "react-fast-marquee";

const Marque = () => {
  const items = ["Web Developer", "Photography", "Video Editing", "Creator", "Animation"];

  return (
    <div className="relative overflow-hidden bg-[#0f0f26] text-white py-4 border-2 border-x-0 my-28">
      <div className=" ">
        <Marquee  autoFill pauseOnHover>
          {[...items, ...items].map((item, index) => (
            <div className="flex items-center gap-4 space-x-6">

              <div key={index} className="flex items-center space-x-8 gap-5">
                <span className="mx-5 font-bold text-2xl">{item}</span>
              </div>
                <span className="text-red-500 mx-5 text-5xl">✦</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Marque;
