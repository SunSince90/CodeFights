function spiralNumbers(n) 
{
    const matrix = [];
    for(let i = 0; i < n; ++i) matrix.push(Array.from("0".repeat(n)));
    
    return Fill(matrix, n, 0, 0, 0);
}

function Fill(matrix, n, i, j, count)
{ 
    if(n <= 1)
    {
        if(n == 1) matrix[i][j] = ++count;
        return matrix;
    }
    
    let column = j,
        row = i;
    for(; column < j +n; ++column) matrix[row][column] = ++count;
    --column
    
    ++row;
    for(; row < i +n; ++row) matrix[row][column] = ++count;
    --row;
    
    --column;
    for(; column > j-1; --column) matrix[row][column] = ++count;
    ++column;
    
    --row;
    for(; row > i; --row) matrix[row][column] = ++count;

    return Fill(matrix, n-2, ++i, ++j, count);
    
}