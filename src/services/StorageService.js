import uniqid from "uniqid";

export const addItem = text => {
  let items = JSON.parse(localStorage.getItem("clipboard"));
  if (!items) items = [];
  items.unshift({
    id: uniqid("clipboarditem-"),
    text
  });
  localStorage.setItem("clipboard", JSON.stringify(items));
  return items;
};

export const getItems = () => {
  let items = JSON.parse(localStorage.getItem("clipboard"));
  return items ? items : [];
};

export const deleteItem = id => {
  let items = JSON.parse(localStorage.getItem("clipboard"));
  items.splice(
    items.findIndex(item => item.id === id),
    1
  );
  localStorage.setItem("clipboard", JSON.stringify(items));
  return items;
};
