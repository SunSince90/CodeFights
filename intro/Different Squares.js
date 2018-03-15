function differentSquares(matrix) 
{
    const rows = matrix.length,
          cols = matrix[0].length,
          matrixes = new Set();
    
    for(let i = 0; i < rows -1; ++i)
    {
        for(let j = 0; j < cols -1; ++j)
        {
            matrixes.add(""+matrix[i][j] + matrix[i][j+1] + matrix[i+1][j] + matrix[i+1][j+1]);
        }
    }
    
    return matrixes.size;
}
