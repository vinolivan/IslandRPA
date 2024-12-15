// File: index.js

import {
  filterByPartialText as filterByText, // Alias filterByPartialText as filterByText
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
} from './filter.js';


import {
  removeElements,
  modifyAttributes,
  addStyles,
  applyCustomAction,
} from './actions.js';

export default {
  filterByText,
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