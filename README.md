
# island-customrpa

A modular JavaScript library for filtering DOM elements, performing actions, logging, and utilities.

## Features
- Filter elements by text, regex, or attributes.
- Remove or modify elements based on filter results.
- Add custom event listeners and monitor events globally.
- Maintain audit logs for operations.
- Utility functions like debounce and throttle.

## Installation

### Via npm
```bash
npm install island-customrpa
```

### Via CDN
```html
  <script src="https://cdn.jsdelivr.net/gh/vinolivan/IslandRPA@main/dist/library.min.js"></script>
```

## Usage

### Filtering Elements
```javascript
import Library from 'island-customrpa';

const matches = Library.filterByText('Example');
Library.removeElements(() => matches);
```

### Event Listeners
```javascript
Library.addCustomEventListener('click', 'button', (event, el) => {
  console.log('Button clicked:', el);
});
```

## License
MIT
