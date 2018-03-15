//--------------------------------------------------
//  Code Fights: differentSymbolsNaive
//--------------------------------------------------

//-------------------------------------
// The easy way
//-------------------------------------

function differentSymbolsNaive(s) 
{
    return (new Set(Array.from(s))).size;
}

//-------------------------------------
// Recursive Way
//-------------------------------------

/*function differentSymbolsNaive(s) 
{
    return RecursiveCheck(0, s);
}

function RecursiveCheck(i, s)
{
    // At the end, s will be a string with unique letters only.
    if(i >= s.length-1) return s.length;
    const _s = s.substr(0, i+1) + s.slice(i+1).replace(new RegExp(s[i], 'g'), '');
    if(_s.length != s.length) return RecursiveCheck(++i, _s);
}*/
