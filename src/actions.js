// File: actions.js

export const removeElements = (elements) => {
  // Ensure elements is an array or NodeList
  if (!elements || elements.length === 0) {
    console.warn('No elements provided for removal.');
    return;
  }

  elements.forEach((el) => {
    if (el && el.parentNode) {
      el.parentNode.removeChild(el); // Safely remove the element from the DOM
    } else {
      console.warn('Element is not attached to the DOM:', el);
    }
  });
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
