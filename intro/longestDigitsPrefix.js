//--------------------------------------------------
//  Code Fights: longestDigitsPrefix
//--------------------------------------------------

function longestDigitsPrefix(inputString) 
{
    const a = inputString.match(/^[\d]+/);
    
    return a !== null ? a[0] : "";
}