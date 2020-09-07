import React from "react";

const usePrevious = (initialValue, value) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  if (!ref.current) return initialValue;
  return ref.current;
};

export default usePrevious;
