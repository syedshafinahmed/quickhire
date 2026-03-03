import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`group fixed bottom-6 right-6 z-50
        w-12 h-12 bg-[#4640DE] text-white
        flex items-center justify-center
        shadow-lg transition-all duration-300
        hover:scale-105
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <IoIosArrowUp
        size={30}
        className="transition-transform duration-300 group-hover:-translate-y-1"
      />
    </button>
  );
};

export default ScrollToTop;