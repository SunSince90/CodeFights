//--------------------------------------------------
//  Code Fights: absoluteValuesSumMinimization
//--------------------------------------------------

function absoluteValuesSumMinimization(a) 
{
    let min = 0,
        minN = a[0];
    for(let j = 0; j < a.length; ++j) min += Math.abs(a[j] -a[0]);
    
    for(let i = 1; i < a.length; ++i)
    {
        while(a[i] == a[i-1]) ++i;
        
        let difference = 0;
        for(let j = 0; j < a.length; ++j) difference += Math.abs(a[j] -a[i]);
        if(difference < min)
        {
            min = difference;
            minN = a[i];
        }
    }
    
    return minN;
}