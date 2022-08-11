/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // rowVals = { rowNumber: Set(numbers seen in row) }
    const rowVals = {}
    // colVals = { colNumber: Set(numbers seen in col) }
    const colVals = {}
    // squareVals = { "rowNo-colNo": Set(numbers seen in square) }
    const squareVals = {}
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            const current = board[i][j]
            
            const squareRow = Math.floor(i / 3)
            const squareCol = Math.floor(j / 3)
            
            
            if(current !== ".") {
                if(
                (rowVals[i] && rowVals[i].has(current)) || 
                (colVals[j] && colVals[j].has(current)) || 
                (squareVals[`${squareRow}-${squareCol}`] && squareVals[`${squareRow}-${squareCol}`].has(current))) {
                    return false
                }
                
                populateLookupWithSet(rowVals, i, current)
                populateLookupWithSet(colVals, j, current)
                populateLookupWithSet(squareVals, `${squareRow}-${squareCol}`, current)
            }
        }
    }
    
    return true
};

function populateLookupWithSet(obj, key, val) {
    if(obj[key]) {
        obj[key].add(val)
    } else {
        obj[key] = new Set(val)
    }
}
