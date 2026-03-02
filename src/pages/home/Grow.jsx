import Marquee from "react-fast-marquee";

import img1 from "../../assets/vodafone-2017-logo.png";
import img2 from "../../assets/intel-3.png";
import img3 from "../../assets/tesla-9 1.png";
import img4 from "../../assets/amd-logo-1.png";
import img5 from "../../assets/talkit 1.png";

const Grow = () => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <p className="text-gray-400 mb-8 epilogue text-lg">
        Companies we helped grow
      </p>
      <Marquee speed={40} pauseOnHover gradient={false}>
        <img src={img1} className="h-12 mx-10" />
        <img src={img2} className="h-12 mx-10" />
        <img src={img3} className="h-12 mx-10" />
        <img src={img4} className="h-12 mx-10" />
        <img src={img5} className="h-12 mx-10" />
      </Marquee>
    </div>
  );
};

export default Grow;