# Board Printer — Guide & Examples

This document summarizes the board format and the implementations for `printBoard` and `checkIfNoMovesLeft` (the code in `board-printer.js`). It also includes example usage, expected output, and commands for running tests or quick manual checks.

**Board Format**
- **Shape:** A 2D array (an array of rows). Each row is an array of 3 string cells.
- **Cell values:** `'X'`, `'O'`, or `'_'` (underscore) for an empty cell.
- **Indexing:** Use `board[row][col]`.

Example valid board:
```javascript
let board = [
  ['X', '_', '_'],
  ['_', 'X', '_'],
  ['O', 'O', 'X']
];
```

**Why this shape**
- It's easy to iterate row-by-row to print the board.
- Checking for available moves is a simple search for `'_'` values.

**Implementations**

- `printBoard(board)` — prints the board to the terminal in a readable format.

```javascript
export function printBoard(board) {
  if (!Array.isArray(board) || board.length === 0) {
    console.log('No board to display');
    return;
  }
  const separator = '=================';
  for (let r = 0; r < board.length; r++) {
    const row = board[r].map(cell => (cell === '_' ? ' ' : cell));
    const line = ' ' + row.join(' | ') + ' ';
    console.log(line);
    if (r < board.length - 1) console.log(separator);
  }
}
```

Notes:
- The function maps underscores (`'_'`) to a blank space for nicer display.
- Rows are joined with ` | ` and a separator line is printed between rows.

- `checkIfNoMovesLeft(board)` — returns `true` if there are no `'_'` cells, otherwise `false`.

Concise version using `flat()`:
```javascript
export function checkIfNoMovesLeft(board) {
  if (!Array.isArray(board) || board.length === 0) return true;
  return !board.flat().includes('_');
}
```

Alternative explicit-loop version (clearer for learning):
```javascript
export function checkIfNoMovesLeft(board) {
  if (!Array.isArray(board) || board.length === 0) return true;
  for (const row of board) {
    if (!Array.isArray(row)) continue;
    for (const cell of row) {
      if (cell === '_') return false;
    }
  }
  return true;
}
```

**Example usage**
```javascript
import { printBoard, checkIfNoMovesLeft } from './board-printer.js';

const board = [
  ['X', '_', '_'],
  ['_', 'X', '_'],
  ['O', 'O', 'X']
];

printBoard(board);
console.log('No moves left?', checkIfNoMovesLeft(board));
```

Expected console output (approximate formatting):
```
 X |   |  
=================
   | X |  
=================
 O | O | X 
No moves left? false
```

**Quick run / test steps**
- Run tests (project likely uses Jest):
```bash
npm test
```

- Quick manual run (if you don't have ES module support in Node, create a `run.js` file that imports the functions):

`run.js` example:
```javascript
import { printBoard, checkIfNoMovesLeft } from './board-printer.js';

const board = [
  ['X', '_', '_'],
  ['_', 'X', '_'],
  ['O', 'O', 'X']
];

printBoard(board);
console.log('No moves left?', checkIfNoMovesLeft(board));
```

Then run:
```bash
node run.js
```

If your project uses CommonJS (no `"type": "module"` in `package.json`), change the `export`/`import` to `module.exports` / `require()` or add `"type": "module"` to `package.json`.

**Notes & next steps**
- If you want, I can patch `board-printer.js` in-place with these exact implementations and run the tests for you.
- I can also open `__tests__/board-printer.test.js` and adapt the formatting if tests expect a specific output layout.

---
File created: `board-printer.md` (project root)
