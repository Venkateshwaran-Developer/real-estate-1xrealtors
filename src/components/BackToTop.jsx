import { useEffect, useState } from "react";


function BackToTop() {
  const [showButton, setShowButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScrolling = () => {
    if (window.scrollY > 50) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);
  return (
    <div>
      <img
        className={`w-10  h-10 fixed right-5 bottom-5 z-50 cursor-pointer ${
          showButton ? "visible" : "invisible"
        }`}
        onClick={scrollToTop}
        src='/Images/scroll-to-top.png'
      ></img>
     <a href="whatsapp://send?text=&phone=+919988774455"> <img className="w-10  h-10 fixed right-5 bottom-[70px] z-50 cursor-pointer" src='/Images/whatsapp-svg.svg'></img></a>
    

    </div>
  );
}

export default BackToTop;
