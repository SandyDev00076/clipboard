import React, { createRef } from "react";

import CopyToClipboard from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./ClipboardItem.module.scss";

const ClipboardItem = ({ item, onCopy, onDelete }) => {
  const itemRef = createRef();
  return (
    <section className={css.item}>
      {item.caption && <div className={css.itemcaption}>{item.caption}</div>}
      <section className={css.itemcontainer}>
        <div>
          <CopyToClipboard
            text={item.text}
            className={css.clipboard_item}
            onCopy={onCopy}
          >
            <pre ref={itemRef}>{item.text}</pre>
          </CopyToClipboard>
        </div>
        <div className={css.deleteitem} onClick={onDelete}>
          <FontAwesomeIcon icon="trash" />
        </div>
      </section>
    </section>
  );
};

export default ClipboardItem;
