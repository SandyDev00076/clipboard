export const addItem = text => {
  const clipboard = JSON.parse(localStorage.getItem("clipboard"));
  clipboard.push({
    id: clipboard.length + 1,
    text
  });
  localStorage.setItem("clipboard", clipboard);
};
