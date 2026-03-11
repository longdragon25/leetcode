/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const n = board[0].length;
        for(let i = 0; i<n;i++){
            let temp = new Set();
            for(let j =0; j<n;j++){
                if(board[i][j]==='.') continue;
                if( !temp.has(board[i][j])){
                    temp.add(board[i][j]) ;
                }else{
                    return false;
                }
            }
        }

        for(let i = 0; i<n;i++){
            let temp = new Set();
            for(let j =0; j<n;j++){
                if(board[j][i]==='.') continue;
                if( !temp.has(board[j][i])){
                    temp.add(board[j][i]) ;
                }else{
                    return false;
                }
            }
        }

        for(let square = 0; square < n; square++){
            let temp = new Set();
            for (let i =0; i<3; i++){              
                for(let j=0;j<3;j++){
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if(board[row][col]==='.') continue;
                    if(!temp.has(board[row][col])){
                    temp.add(board[row][col]);
                }else{
                    return false;
                }
                }
        }}

        return true;
};