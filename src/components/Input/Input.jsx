import React, { forwardRef } from "react";

import css from "./Input.module.scss";

const Input = ({ rows, className, ...props }, ref) => {
  let classes = `${css.input} ${className}`;
  return <textarea rows={rows} {...props} ref={ref} className={classes} />;
};

export default forwardRef(Input);
