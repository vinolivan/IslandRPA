
export const addCustomEventListener = (eventName, selector, callback) => {
  const elements = Array.from(document.querySelectorAll(selector));
  elements.forEach((el) => el.addEventListener(eventName, (event) => callback(event, el)));
};

export const monitorEvents = (eventName, callback) => {
  document.addEventListener(eventName, callback);
};
