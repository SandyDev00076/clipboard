import React, { useRef, useEffect } from "react";
import Input from "../../components/Input";
import css from "./Clipboard.module.scss";

const Clipboard = () => {
  const newItemInput = useRef();

  useEffect(() => {
    newItemInput.current.focus();
  }, []);

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
                newItemInput.current && newItemInput.current.target.value
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
