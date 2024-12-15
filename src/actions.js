// File: actions.js

export const removeElements = (elements) => {
  elements.forEach((el) => el.remove());
};

export const modifyAttributes = (elements, attributeName, value) => {
  elements.forEach((el) => {
    el.setAttribute(attributeName, value);
  });
};

export const addStyles = (elements, styles) => {
  elements.forEach((el) => {
    Object.assign(el.style, styles);
  });
};

export const applyCustomAction = (elements, callback) => {
  elements.forEach((el) => {
    callback(el);
  });
};
