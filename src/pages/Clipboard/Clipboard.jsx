import React, { useRef, useEffect } from "react";
import Input from "../../components/Input";
import css from "./Clipboard.module.scss";
import { addItem } from "../../services/StorageService";

const Clipboard = () => {
  const newItemInput = useRef();

  useEffect(() => {
    newItemInput.current.focus();
    window.addEventListener("keyup", ({ which, ctrlKey, metaKey }) => {
      if ((ctrlKey && which === 13) || (metaKey && which === 13)) {
        addItem(newItemInput.current.value);
        clearText();
      }
    });
  }, []);

  function clearText() {
    if (newItemInput.current.value) {
      newItemInput.current.value = "";
    }
  }

  return (
    <section className={css.container}>
      <section className={css.newitem}>
        <div>
          <div className={css.newitempanel}>
            <span className={css.addtext}>Add text to your clipboard</span>
            <Input ref={newItemInput} />
            <span className={css.dragdroptext}>
              Or just drag and drop the text here
            </span>
          </div>
          <div
            className={css.addtip}
            style={{
              visibility:
                newItemInput.current && newItemInput.current.value
                  ? "visible"
                  : "hidden"
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
