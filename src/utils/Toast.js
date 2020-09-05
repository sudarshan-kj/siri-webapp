import React from "react";
import { Slide, ToastContainer, toast } from "react-toastify";

const toastStyle = {
  textAlign: "center",
};

const Toast = ({ message, theme }) => {
  const firstRender = React.useRef(true);
  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    toast[theme](message, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, [message, theme]);
  return (
    <ToastContainer
      transition={Slide}
      position="bottom-center"
      autoClose={1500}
      hideProgressBar
      style={toastStyle}
      newestOnTop={false}
      closeButton={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};
export default Toast;
