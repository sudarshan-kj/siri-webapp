import React from "react";

const usePersistence = (id, initialValue) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(id) || initialValue
  );
  React.useEffect(() => {
    localStorage.setItem(id, value);
  }, [id, value]);
  return [value, setValue];
};

export default usePersistence;
