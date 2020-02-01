import React, { forwardRef } from "react";

import css from "./Button.module.scss";

const Button = ({ children, ...props }, ref) => {
  return (
    <button className={css.button} {...props} ref={ref}>
      {children}
    </button>
  );
};

export default forwardRef(Button);
