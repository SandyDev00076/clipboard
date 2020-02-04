import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "./Toast.module.scss";

const Toast = ({
  message,
  duration = 2000,
  show = false,
  onClose,
  bgColor = "#333",
  color = "white",
  icon = "check-circle"
}) => {
  useEffect(() => {
    if (show) {
      setTimeout(onClose, duration);
    }
  }, [duration, onClose, show]);

  return (
    <>
      {show && (
        <div className={css.toast} style={{ backgroundColor: bgColor, color }}>
          <FontAwesomeIcon className={css.toasticon} icon={icon} />
          <span className={css.toastmsg}>{message}</span>
        </div>
      )}
    </>
  );
};

export default Toast;
