export const select = (selector, parent) => {
  if(parent) {
    return parent.querySelector(selector);
  }
  return document.querySelector(selector);
};

export const selectAll = (selector, parent) => {
  if(parent) {
    return parent.querySelectorAll(selector);
  }
  return document.querySelectorAll(selector);
};
