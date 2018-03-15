//--------------------------------------------------
//  Code Fights: Box Blur
//--------------------------------------------------

function boxBlur(image) 
{
    const rows = image.length,
          cols = image[0].length;
    
    let blurs = [];
    
    for(let row = 1; row < rows -1; ++row)
    {
        let colvals = [];
        for(let col = 1; col < cols -1; ++col)
        {
            let vals = [],
                val = 0;
            for(let i = -1; i < 2; ++i)
            {
                for(let j = -1; j < 2; ++j)
                {
                    val += image[row+i][col+j];
                }
            }
            colvals.push(Math.trunc(val/9));
        }
        blurs.push(colvals);
    }
    
    return blurs;
}
