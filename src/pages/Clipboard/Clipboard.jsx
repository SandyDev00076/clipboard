import React, { useRef, useEffect, useState } from "react";
import Input from "../../components/Input";
import css from "./Clipboard.module.scss";
import { addItem } from "../../services/StorageService";

const Clipboard = () => {
  const newItemInput = useRef();
  const [text, setText] = useState("");

  useEffect(() => {
    newItemInput.current.focus();
    window.addEventListener(
      "keyup",
      ({ which, ctrlKey, metaKey, shiftKey }) => {
        if (ctrlKey && which === 13) {
          console.log("done");
          addText();
          clearText();
        }
      }
    );
  }, [addText]);

  function clearText() {
    if (newItemInput.current.value) {
      newItemInput.current.value = "";
      setText("");
    }
  }

  function addText() {
    if (text) addItem(text);
  }

  return (
    <section className={css.container}>
      <section className={css.newitem}>
        <div>
          <div className={css.newitempanel}>
            <span className={css.addtext}>Add text to your clipboard</span>
            <Input
              ref={newItemInput}
              onChange={event => setText(event.target.value)}
            />
            <span className={css.dragdroptext}>
              Or just drag and drop the text here
            </span>
          </div>
          <div
            className={css.addtip}
            style={{
              visibility: text ? "visible" : "hidden"
            }}
          >
            Press Ctrl+Enter to add this text
          </div>
        </div>
      </section>
      <section className={css.clipboard}></section>
    </section>
  );
};

export default Clipboard;
