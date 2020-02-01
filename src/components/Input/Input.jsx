import React, { forwardRef } from "react";

import css from "./Input.module.scss";

const Input = ({ ...props }, ref) => {
  return <textarea {...props} ref={ref} className={css.input} />;
};

export default forwardRef(Input);
