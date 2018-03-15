//  https://codefights.com/arcade/intro/level-12/tQgasP8b62JBeirMS

function sudoku(grid) 
{
    const rows = [],
          cols = [],
          minigrids = [];
    
    for(let i = 0; i < 9; ++i)
    {
        rows.push(new Set());
        cols.push(new Set());
        minigrids.push(new Set());
    }
    
    for(let i = 0; i < 9; i++)
    {
        for(let j = 0; j < 9; j++)
        {
            const gridId = Math.trunc(i/3)*3 + Math.trunc(j/3),
                  n = grid[i][j];
            if(rows[i].has(n) || cols[j].has(n) || minigrids[gridId].has(n)) return false;
            
            rows[i].add(n);
            cols[j].add(n);
            minigrids[gridId].add(n);
        }
    }
    
    return true;
}