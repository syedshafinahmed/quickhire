import dashboard from "../../assets/dashboard.png";

const Poster = () => {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <div
        className="w-full bg-[#4640DE] overflow-hidden relative"
        style={{
          clipPath:
            "polygon(15% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)",
        }}
      >
        <div className="flex flex-col md:flex-row py-24">
          <div className="w-full md:w-1/3 flex items-center justify-center px-6 md:px-0 text-center md:text-left">
            <div className="clashDisplay">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Start posting <br /> jobs today
              </h1>
              <p className="font-medium text-white mt-6 mb-6">
                Start posting jobs for only $10.
              </p>
              <button className="bg-white text-[#4640DE] px-8 h-12 font-black">
                Sign Up For Free
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative mt-10 md:mt-0 flex justify-center md:block">
            <img
              src={dashboard}
              alt="Dashboard preview"
              className="w-[90%] md:w-auto md:absolute md:-bottom-25 md:left-50 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;