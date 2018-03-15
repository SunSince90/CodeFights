//--------------------------------------------------
//  Code Fights: isBeautifulString
//--------------------------------------------------

function isBeautifulString(inputString) 
{
    inputString = Array.from(inputString).sort().join('');
    
    let count = inputString.match(new RegExp("[a]+"), 'g');
    if(count === null) count = 0;
    else count = count[0].length;
    
    let i = "a";    
    inputString = inputString.slice(count);
    
    while(i != "{")
    {
        if(inputString.length == 0) return true;
        let next = String.fromCharCode(i.charCodeAt(0) +1),
            nextn = inputString.match(new RegExp("["+next+"]+", 'g'), inputString);
        
        if(nextn == null) nextn = 0;
        else nextn = nextn[0].length;

        if(nextn > count) return false;
        
        inputString = inputString.slice(nextn);
        count = nextn;
        i = next;
    }

    return true;
}