import { useRef, useEffect } from "react";

const useSkipFirstRender = (callback) => {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    callback();
  }, [callback]);
};

export default useSkipFirstRender;
