# Island CustomRPA

A modular JavaScript library designed to simplify DOM manipulation, event handling, and auditing tasks. This library is particularly useful for developers looking to automate repetitive browser tasks with precision and ease.

---

## Features

### Core Functionalities
- **Filtering DOM Elements**: Filter elements by text, regex, or attributes for precise targeting.
- **Element Modification**: Remove or modify elements based on filter results.
- **Event Handling**: Add custom event listeners and monitor events globally.
- **Audit Logging**: Maintain detailed logs for all operations to track actions.


---

## Installation

### Via npm
```bash
npm install island-customrpa
```

### Via CDN
```html
<script src="https://cdn.jsdelivr.net/npm/island-customrpa/dist/bundle.min.js"></script>
```


## Project Structure

```
/island-customrpa
├── .git                 # Git version control directory
├── .gitignore           # Ignored files for Git
├── .vscode              # VS Code configuration files
├── dist                 # Compiled output directory
├── node_modules         # Dependencies installed via npm
├── package-lock.json    # Detailed dependency tree
├── package.json         # Project metadata and scripts
├── README.md            # Project documentation
├── rollup.config.js     # Rollup configuration file
├── src                  # Source code directory
```

### Key Files
- `src/index.js`: Entry point for the library.
- `rollup.config.js`: Configuration for bundling the library.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
