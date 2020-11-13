import React from "react";

const useSlideIn = () => {
  const [slideIn, setSlideIn] = React.useState("");
  const divRef = React.useRef();

  React.useEffect(() => {
    const isInViewport = () => {
      const rect = divRef.current.getBoundingClientRect();
      return rect.top <= window.innerHeight;
    };

    const inViewPort = () => {
      isInViewport() ? setSlideIn("slideIn") : setSlideIn("");
    };

    document.addEventListener("scroll", inViewPort);
    return () => {
      document.removeEventListener("scroll", inViewPort);
    };
  }, [divRef]);

  return [divRef, slideIn];
};

export default useSlideIn;
