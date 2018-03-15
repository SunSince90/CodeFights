//--------------------------------------------------
//  Code Fights: alphabeticShift
//--------------------------------------------------

function alphabeticShift(inputString) 
{
    let outputString = "";
    
    for(let i = 0; i < inputString.length; ++i)
    {
        const code = inputString.charCodeAt(i)%122;
        
        outputString += (code == 0 ? 'a' : String.fromCharCode(code +1));
    }
    
    return outputString;
}
