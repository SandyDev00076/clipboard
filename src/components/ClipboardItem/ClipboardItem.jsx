import React, { createRef } from "react";

import CopyToClipboard from "react-copy-to-clipboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import css from "./ClipboardItem.module.scss";

const ClipboardItem = ({ item, onCopy }) => {
  const itemRef = createRef();
  return (
    <CopyToClipboard text={item.text} className={css.clipboard_item} onCopy={onCopy}>
      <pre className={css.itemtext} ref={itemRef}>
        {item.text}
      </pre>
    </CopyToClipboard>
  );
};

export default ClipboardItem;
