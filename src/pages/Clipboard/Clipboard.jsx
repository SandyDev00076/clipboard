import React, { useRef, useEffect, useState } from "react";
import Input from "../../components/Input";
import { addItem, getItems, deleteItem } from "../../services/StorageService";
import ClipboardItem from "../../components/ClipboardItem";
import Toast from "../../components/Toast";
import { isBrowser, isMobile } from "react-device-detect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "./Clipboard.module.scss";

const Clipboard = () => {
  const newItemInput = useRef();
  const newItemCaptionInput = useRef();
  const [items, setItems] = useState(getItems());
  const [text, setText] = useState("");
  const [caption, setCaption] = useState("");
  const [showCopiedToast, setCopiedToast] = useState(false);
  const [showDeletedToast, setDeletedToast] = useState(false);

  if (isBrowser) {
    window.addEventListener("keyup", ({ which, ctrlKey, metaKey }) => {
      if ((ctrlKey && which === 13) || (metaKey && which === 13)) {
        if (newItemInput.current.value) {
          setItems(
            addItem(
              newItemInput.current.value,
              newItemCaptionInput.current.value
            )
          );
          clearText();
        }
      }
    });
  }

  useEffect(() => {
    newItemInput.current.focus();
  }, []);

  function clearText() {
    setText("");
    setCaption("");

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
        {text && (
          <Input
            ref={newItemCaptionInput}
            placeholder="Add a caption"
            onChange={evt => setCaption(evt.target.value)}
            className={`${css.captionarea} ${
              isMobile ? css.mobilecaptionarea : ""
            }`}
          />
        )}
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
              if (newItemInput.current.value) {
                setItems(
                  addItem(
                    newItemInput.current.value,
                    newItemCaptionInput.current.value
                  )
                );
                clearText();
              }
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
