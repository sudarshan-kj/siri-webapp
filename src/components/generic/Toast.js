import React from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import useSkipFirstRender from "../../hooks/useSkipFirstRender";

const toastStyle = {
  textAlign: "center",
};

const Toast = ({ message, theme }) => {
  const toastCallBack = React.useCallback(
    () =>
      toast[theme](message, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    [theme, message]
  );
  useSkipFirstRender(toastCallBack);

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
