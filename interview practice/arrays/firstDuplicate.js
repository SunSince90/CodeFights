//--------------------------------------------------
//  Code Fights: firstDuplicate
//--------------------------------------------------

function firstDuplicate(a) 
{
    if(a.length == 1) return -1;

    const indexes = {};
    
    for(let i = 0; i < a.length; ++i)
    {
        if(indexes[a[i]] !== undefined)
        {
            return a[i];
        }
        
        indexes[a[i]] = i;
    }
    
    return -1;
}