//--------------------------------------------------
//  Code Fights: arrayMaxConsecutiveSum
//--------------------------------------------------

/*  This actually took me some time to understand the *problem*, not how to program it :\ */

function stringsRearrangement(inputArray) 
{
    const len = inputArray.length;
    let n = 0;
    
    for(let i = 0; i < inputArray.length; ++i)
    {
        let arr = [];
        if(i > 0) arr = inputArray.slice(0, i);
        if(i < inputArray.length -1) arr = arr.concat(inputArray.slice(i+1));
        
        if(RecursiveCheck(inputArray[i], arr, len)) return true;
    }
    
    return false;
}

function RecursiveCheck(word, strings, len)
{
    if(strings.length == 0) return true;
    
    for(let i = 0; i < strings.length; ++i)
    {
        if(DifferByOne(word, strings[i]))
        {
            let arr = [];
            if(i > 0) arr = strings.slice(0, i);
            if(i < strings.length -1) arr = arr.concat(strings.slice(i+1));
            
            if(RecursiveCheck(strings[i], arr)) return true;
        }
    }

    return false;
}

function DifferByOne(word, test)
{
    let n = 0;
    for(let i = 0; i < word.length; ++i)
    {
        if(word[i] !== test[i])
        {
            if(++n == 2) return false;
        }
    }
    
    return n == 1;
}
