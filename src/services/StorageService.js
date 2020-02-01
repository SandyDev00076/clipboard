export const addItem = text => {
  let clipboard = JSON.parse(localStorage.getItem("clipboard"));
  if (!clipboard) clipboard = [];
  clipboard.push({
    id: clipboard.length + 1,
    text
  });
  localStorage.setItem("clipboard", JSON.stringify(clipboard));
};
