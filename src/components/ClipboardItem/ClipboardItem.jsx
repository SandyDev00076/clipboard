import React from "react";

import css from "./ClipboardItem.module.scss";

const ClipboardItem = ({ item }) => {
  return <div className={css.clipboard_item}>{item.text}</div>;
};

export default ClipboardItem;
