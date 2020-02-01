import React from "react";

import css from "./ClipboardItem.module.scss";

const ClipboardItem = ({ item }) => {
  return (
    <div className={css.clipboard_item}>
      <pre className={css.itemtext}>{item.text}</pre>
    </div>
  );
};

export default ClipboardItem;
