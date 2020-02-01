import uniqid from "uniqid";

export const addItem = text => {
  let newItem = {
    id: uniqid("clipboarditem-"),
    text
  };
  let clipboard = JSON.parse(localStorage.getItem("clipboard"));
  if (!clipboard) clipboard = [];
  clipboard.push(newItem);
  localStorage.setItem("clipboard", JSON.stringify(clipboard));
  return newItem;
};

export const getItems = () => {
  let items = JSON.parse(localStorage.getItem("clipboard"));
  return items ? items : [];
};
