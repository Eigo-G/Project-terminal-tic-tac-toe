/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
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
let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
];

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
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
