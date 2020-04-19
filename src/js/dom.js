/**
* place for API documentation
*/
export const select = (selector, parent) => {
  if(parent) {
    return parent.querySelector(selector);
  }
  return document.querySelector(selector);
};

/**
* place for API documentation
*/
export const selectAll = (selector, parent) => {
  if(parent) {
    return parent.querySelectorAll(selector);
  }
  return document.querySelectorAll(selector);
};

export const rAF = ({ wait } = { wait: 0 }) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(window.requestAnimationFrame);
    }, wait);
  });
