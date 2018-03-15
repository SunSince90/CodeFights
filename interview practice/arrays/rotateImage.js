//--------------------------------------------------
//  Code Fights: rotateImage
//--------------------------------------------------

function rotateImage(a) 
{
    const rotated = [];
    
    for(let j = 0; j < a.length; ++j)
    {
        const row = [];
        
        for(let i = a.length -1; i > -1; --i)
        {
            row.push(a[i][j]);
        }
        
        rotated.push(row);
    }
    
    return rotated;
}