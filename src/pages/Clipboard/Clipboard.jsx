import React, { useRef, useEffect, useState } from "react";
import Input from "../../components/Input";
import css from "./Clipboard.module.scss";
import { addItem, getItems, deleteItem } from "../../services/StorageService";
import ClipboardItem from "../../components/ClipboardItem";
import Toast from "../../components/Toast";
import { isBrowser, isMobile } from "react-device-detect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Clipboard = () => {
  const newItemInput = useRef();
  const [items, setItems] = useState(getItems());
  const [text, setText] = useState("");
  const [showCopiedToast, setCopiedToast] = useState(false);
  const [showDeletedToast, setDeletedToast] = useState(false);

  useEffect(() => {
    newItemInput.current.focus();
    if (isBrowser) {
      window.addEventListener("keyup", ({ which, ctrlKey, metaKey }) => {
        if ((ctrlKey && which === 13) || (metaKey && which === 13)) {
          setItems(addItem(newItemInput.current.value));
          clearText();
        }
      });
    }
  }, []);

  function clearText() {
    setText("");
    if (newItemInput.current.value) {
      newItemInput.current.value = "";
    }
  }

  return (
    <section className={css.container}>
      <section className={css.newitem}>
        <Input
          ref={newItemInput}
          onChange={evt => setText(evt.target.value)}
          className={css.inputarea}
          placeholder="Add text to your clipboard"
        />
        {isBrowser && (
          <div
            className={css.addtip}
            style={{
              visibility: text ? "visible" : "hidden"
            }}
          >
            Press Ctrl+Enter to add this text
          </div>
        )}
        {isMobile && (
          <div
            className={css.mobileAddItem}
            onClick={() => {
              setItems(addItem(newItemInput.current.value));
              clearText();
            }}
          >
            <FontAwesomeIcon icon="plus" />
          </div>
        )}
      </section>
      <section className={css.clipboard}>
        {items.length !== 0 ? (
          <>
            {items.map(item => (
              <ClipboardItem
                item={item}
                key={item.id}
                onCopy={() => setCopiedToast(true)}
                onDelete={() => {
                  setItems(deleteItem(item.id));
                  setDeletedToast(true);
                }}
              />
            ))}
          </>
        ) : (
          <div className={css.noitems}>
            <div className={css.noitems1}>Nothing Here</div>
            <div>Add something to get started</div>
          </div>
        )}
      </section>
      <Toast
        message="Copied"
        bgColor="green"
        show={showCopiedToast}
        onClose={() => setCopiedToast(false)}
      />
      <Toast
        message="Deleted"
        bgColor="#800000"
        show={showDeletedToast}
        onClose={() => setDeletedToast(false)}
      />
    </section>
  );
};

export default Clipboard;
