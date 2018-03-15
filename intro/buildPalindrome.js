//--------------------------------------------------
//  Code Fights: buildPalindrome
//--------------------------------------------------

function buildPalindrome(st) 
{
    return Build(st, 0);
}

function Build(st, i)
{
    console.log("st is now " + st);
    console.log("reverse is " + Array.from(st).reverse().join(''));
    if(st === Array.from(st).reverse().join('')) return st;

    let newSt = Array.from(st);
    newSt.splice(st.length -i, 0, st[i]);
    return Build(newSt.join(''), ++i);
}
