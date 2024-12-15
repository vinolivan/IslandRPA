var Library = (function () {
  'use strict';

  // File: src/filter.js


  // 2. Filter by Partial Text
  const filterByPartialText = (text, caseSensitive = false) => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter((el) => {
      const content = el.textContent || '';
      return caseSensitive ? content.includes(text) : content.toLowerCase().includes(text.toLowerCase());
    });
  };

  // 3. Filter by Regular Expression
  const filterByRegex = (pattern) => {
    const regex = new RegExp(pattern);
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter((el) => regex.test(el.textContent || ''));
  };

  // 4. Filter by Tag Name
  const filterByTagName = (tagName) => {
    return Array.from(document.querySelectorAll(tagName));
  };

  // 5. Filter by Attribute Value
  const filterByAttributeValue = (attribute, value) => {
    const elements = Array.from(document.querySelectorAll(`[${attribute}]`));
    return elements.filter((el) => el.getAttribute(attribute) === value);
  };

  // 6. Filter by Class Name
  const filterByClassName = (className) => {
    return Array.from(document.querySelectorAll(`.${className}`));
  };

  // 7. Filter by Element Visibility
  const filterByVisibility = () => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter((el) => {
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });
  };

  // 8. Filter by Element with Children
  const filterByHasChildren = () => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter((el) => el.children.length > 0);
  };

  // 9. Filter by Elements with No Children
  const filterByNoChildren = () => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter((el) => el.children.length === 0);
  };

  // 10. Filter by Text Length
  const filterByTextLength = (minLength = 0, maxLength = Infinity) => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter((el) => {
      const content = el.textContent || '';
      return content.length >= minLength && content.length <= maxLength;
    });
  };

  // 11. Filter by Custom Function
  const filterByCustomFn = (filterFn) => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter(filterFn);
  };

  // 12. Filter by Parent Element
  const filterByParent = (parentSelector) => {
    const parent = document.querySelector(parentSelector);
    if (!parent) return [];
    return Array.from(parent.children);
  };

  // 13. Filter by Nested Content
  const filterByNestedContent = (selector, text) => {
    const elements = Array.from(document.querySelectorAll(selector));
    return elements.filter((el) => el.querySelector('*')?.textContent.includes(text));
  };

  // 14. Filter by Style
  const filterByStyle = (styleProp, value) => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter((el) => getComputedStyle(el)[styleProp] === value);
  };

  // 15. Filter by Dataset Attributes
  const filterByDataset = (dataKey, value) => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements.filter((el) => el.dataset[dataKey] === value);
  };

  // 16. Filter by Specific Text in Attribute
  const filterByTextInAttribute = (attribute, searchText) => {
    const elements = Array.from(document.querySelectorAll(`[${attribute}]`));
    return elements.filter((el) => el.getAttribute(attribute)?.includes(searchText));
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
