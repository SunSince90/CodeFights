//--------------------------------------------------
//  Code Fights: digitDegree
//--------------------------------------------------

function digitDegree(n) 
{
    if(n < 9) return 0;
    
    let count = 0;
    while(n > 9)
    {
        n = Array.from(n+"").reduce((acc, i) => parseInt(acc) +parseInt(i));
        ++count;
    }
    
    return count;
}