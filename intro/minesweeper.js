//--------------------------------------------------
//  Code Fights: minesweeper
//--------------------------------------------------

function minesweeper(matrix) 
{
    const rows = matrix.length,
          cols = matrix[0].length;
    
    let newMatrix = [];
    
    for(let row = 0; row < rows; ++row)
    {
        let rowvals = [];
        for(let col = 0; col < cols; ++col)
        {
            let count = 0;
            for(let i = (row == 0 ? 0 : -1); row +i < rows && i < 2; ++i)
            {
                for(let j = (col == 0 ? 0 : -1); col +j < cols && j < 2; ++j)
                {
                    if(matrix[row+i][col+j] == true) ++count;
                }
            }
            if(matrix[row][col] == true) --count;
            rowvals.push(count);
        }
        newMatrix.push(rowvals);
    }
    
    return newMatrix;
}
