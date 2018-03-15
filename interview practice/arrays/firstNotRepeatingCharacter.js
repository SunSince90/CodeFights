//--------------------------------------------------
//  Code Fights: firstNotRepeatingCharacter
//--------------------------------------------------

function firstNotRepeatingCharacter(s) 
{
    const chars = new Map();
    
    for(let i = 0; i < s.length; ++i)
    {
        if(!chars.has(s[i])) chars.set(s[i], 1);
        else chars.set(s[i], chars.get(s[i]) +1);
    }
    
    for(const [key, value] of chars.entries())
    {
        if(value == 1) return key;
    }
    
    return '_';
    
}