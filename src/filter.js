// File: filter.js

// Define reusable valid tags for row-level or block-level elements
const validRowTags = ['TR', 'LI', 'DIV', 'SECTION'];

export const filterByText = (text, options = {}) => {
  const { caseSensitive = false, exactMatch = false } = options;
  const elements = Array.from(document.querySelectorAll('*'));

  // Filter elements by matching text
  return elements.filter((el) => {
    const content = el.textContent || '';
    if (caseSensitive) {
      return exactMatch ? content === text : content.includes(text);
    } else {
      return exactMatch
        ? content.toLowerCase() === text.toLowerCase()
        : content.toLowerCase().includes(text.toLowerCase());
    }
  }).filter((el) => {
    // Ensure it targets rows or blocks
    return (
      validRowTags.includes(el.tagName) ||
      el.closest('*[role="row"]') // ARIA row
    );
  });
};

export const filterByPartialText = (text, caseSensitive = false) => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => {
    const content = el.textContent || '';
    if (caseSensitive) {
      return content.includes(text);
    } else {
      return content.toLowerCase().includes(text.toLowerCase());
    }
  }).filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
};

export const filterByRegex = (pattern) => {
  const regex = new RegExp(pattern);
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => regex.test(el.textContent || ''))
    .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
};

export const filterByTagName = (tagName) => {
  return Array.from(document.querySelectorAll(tagName));
};

export const filterByAttributeValue = (attribute, value) => {
  const elements = Array.from(document.querySelectorAll(`[${attribute}]`));
  return elements.filter((el) => el.getAttribute(attribute) === value)
    .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
};

export const filterByClassName = (className) => {
  const elements = Array.from(document.querySelectorAll(`.${className}`));
  return elements.filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
};

export const filterByVisibility = () => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => {
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }).filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
};

export const filterByHasChildren = () => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => el.children.length > 0)
    .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
};

export const filterByNoChildren = () => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => el.children.length === 0)
    .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
};

export const filterByTextLength = (minLength = 0, maxLength = Infinity) => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => {
    const content = el.textContent || '';
    return content.length >= minLength && content.length <= maxLength;
  }).filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
};

export const filterByCustomFn = (filterFn) => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter(filterFn)
    .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
};

export const filterByParent = (parentSelector) => {
  const parent = document.querySelector(parentSelector);
  if (!parent) return [];
  return Array.from(parent.children).filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
};

export const filterByNestedContent = (selector, text) => {
  const elements = Array.from(document.querySelectorAll(selector));
  return elements.filter((el) =>
    el.querySelector('*')?.textContent.includes(text)
  ).filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
};

export const filterByStyle = (styleProp, value) => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => getComputedStyle(el)[styleProp] === value)
    .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
};

export const filterByDataset = (dataKey, value) => {
  const elements = Array.from(document.querySelectorAll('*'));
  return elements.filter((el) => el.dataset[dataKey] === value)
    .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
};

export const filterByTextInAttribute = (attribute, searchText) => {
  const elements = Array.from(document.querySelectorAll(`[${attribute}]`));
  return elements.filter((el) => el.getAttribute(attribute).includes(searchText))
    .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
};
