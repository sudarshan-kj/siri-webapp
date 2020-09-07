import React from "react";

const useSkipFirstRender = (callback) => {
  const firstRender = React.useRef(true);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    callback();
  }, [callback]);
};

export default useSkipFirstRender;
