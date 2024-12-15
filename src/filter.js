// File: src/filter.js

// 1. Filter by Exact Text
export const filterByExactText = (text, caseSensitive = false) => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => {
    const content = el.textContent || '';
    return caseSensitive ? content === text : content.toLowerCase() === text.toLowerCase();
  });
};

// 2. Filter by Partial Text
export const filterByPartialText = (text, caseSensitive = false) => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => {
    const content = el.textContent || '';
    return caseSensitive ? content.includes(text) : content.toLowerCase().includes(text.toLowerCase());
  });
};

// 3. Filter by Regular Expression
export const filterByRegex = (pattern) => {
  const regex = new RegExp(pattern);
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => regex.test(el.textContent || ''));
};

// 4. Filter by Tag Name
export const filterByTagName = (tagName) => {
  return Array.from(document.querySelectorAll(tagName));
};

// 5. Filter by Attribute Value
export const filterByAttributeValue = (attribute, value) => {
  const elements = Array.from(document.querySelectorAll(`[${attribute}]`));
  return elements.filter((el) => el.getAttribute(attribute) === value);
};

// 6. Filter by Class Name
export const filterByClassName = (className) => {
  return Array.from(document.querySelectorAll(`.${className}`));
};

// 7. Filter by Element Visibility
export const filterByVisibility = () => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => {
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  });
};

// 8. Filter by Element with Children
export const filterByHasChildren = () => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => el.children.length > 0);
};

// 9. Filter by Elements with No Children
export const filterByNoChildren = () => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => el.children.length === 0);
};

// 10. Filter by Text Length
export const filterByTextLength = (minLength = 0, maxLength = Infinity) => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => {
    const content = el.textContent || '';
    return content.length >= minLength && content.length <= maxLength;
  });
};

// 11. Filter by Custom Function
export const filterByCustomFn = (filterFn) => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter(filterFn);
};

// 12. Filter by Parent Element
export const filterByParent = (parentSelector) => {
  const parent = document.querySelector(parentSelector);
  if (!parent) return [];
  return Array.from(parent.children);
};

// 13. Filter by Nested Content
export const filterByNestedContent = (selector, text) => {
  const elements = Array.from(document.querySelectorAll(selector));
  return elements.filter((el) => el.querySelector('*')?.textContent.includes(text));
};

// 14. Filter by Style
export const filterByStyle = (styleProp, value) => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => getComputedStyle(el)[styleProp] === value);
};

// 15. Filter by Dataset Attributes
export const filterByDataset = (dataKey, value) => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => el.dataset[dataKey] === value);
};

// 16. Filter by Specific Text in Attribute
export const filterByTextInAttribute = (attribute, searchText) => {
  const elements = Array.from(document.querySelectorAll(`[${attribute}]`));
  return elements.filter((el) => el.getAttribute(attribute)?.includes(searchText));
};
