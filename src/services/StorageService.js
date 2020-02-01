import uniqid from "uniqid";

export const addItem = text => {
  let clipboard = JSON.parse(localStorage.getItem("clipboard"));
  if (!clipboard) clipboard = [];
  clipboard.push({
    id: uniqid("clipboarditem-"),
    text
  });
  localStorage.setItem("clipboard", JSON.stringify(clipboard));
};

export const getItems = () => {
  return JSON.parse(localStorage.getItem("clipboard")) | [];
};
