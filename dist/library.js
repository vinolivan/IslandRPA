var Library = (function () {
  'use strict';

  // File: filter.js

  // Define reusable valid tags for row-level or block-level elements
  const validRowTags = ['TR', 'LI', 'DIV', 'SECTION'];

  const filterByPartialText = (text, caseSensitive = false) => {
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

  const filterByRegex = (pattern) => {
    const regex = new RegExp(pattern);
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter((el) => regex.test(el.textContent || ''))
      .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
  };

  const filterByTagName = (tagName) => {
    return Array.from(document.querySelectorAll(tagName));
  };

  const filterByAttributeValue = (attribute, value) => {
    const elements = Array.from(document.querySelectorAll(`[${attribute}]`));
    return elements.filter((el) => el.getAttribute(attribute) === value)
      .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
  };

  const filterByClassName = (className) => {
    const elements = Array.from(document.querySelectorAll(`.${className}`));
    return elements.filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
  };

  const filterByVisibility = () => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter((el) => {
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    }).filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
  };

  const filterByHasChildren = () => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter((el) => el.children.length > 0)
      .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
  };

  const filterByNoChildren = () => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter((el) => el.children.length === 0)
      .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
  };

  const filterByTextLength = (minLength = 0, maxLength = Infinity) => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter((el) => {
      const content = el.textContent || '';
      return content.length >= minLength && content.length <= maxLength;
    }).filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
  };

  const filterByCustomFn = (filterFn) => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter(filterFn)
      .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
  };

  const filterByParent = (parentSelector) => {
    const parent = document.querySelector(parentSelector);
    if (!parent) return [];
    return Array.from(parent.children).filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
  };

  const filterByNestedContent = (selector, text) => {
    const elements = Array.from(document.querySelectorAll(selector));
    return elements.filter((el) =>
      el.querySelector('*')?.textContent.includes(text)
    ).filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
  };

  const filterByStyle = (styleProp, value) => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter((el) => getComputedStyle(el)[styleProp] === value)
      .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
  };

  const filterByDataset = (dataKey, value) => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter((el) => el.dataset[dataKey] === value)
      .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
  };

  const filterByTextInAttribute = (attribute, searchText) => {
    const elements = Array.from(document.querySelectorAll(`[${attribute}]`));
    return elements.filter((el) => el.getAttribute(attribute).includes(searchText))
      .filter((el) => validRowTags.includes(el.tagName) || el.closest('*[role="row"]'));
  };

  // File: actions.js

  const removeElements = (elements) => {
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


  const modifyAttributes = (elements, attributeName, value) => {
    elements.forEach((el) => {
      el.setAttribute(attributeName, value);
    });
  };

  const addStyles = (elements, styles) => {
    elements.forEach((el) => {
      Object.assign(el.style, styles);
    });
  };

  const applyCustomAction = (elements, callback) => {
    elements.forEach((el) => {
      callback(el);
    });
  };

  // File: index.js


  var index = {
    filterByText: filterByPartialText,
    filterByPartialText,
    filterByRegex,
    filterByTagName,
    filterByAttributeValue,
    filterByClassName,
    filterByVisibility,
    filterByHasChildren,
    filterByNoChildren,
    filterByTextLength,
    filterByCustomFn,
    filterByParent,
    filterByNestedContent,
    filterByStyle,
    filterByDataset,
    filterByTextInAttribute,
    removeElements,
    modifyAttributes,
    addStyles,
    applyCustomAction,
  };

  return index;

})();
