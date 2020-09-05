import React from "react";

const usePrevious = (initialValue, value) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  if (ref.current) return ref.current;
  else return initialValue;
};

export default usePrevious;
