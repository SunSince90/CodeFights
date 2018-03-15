function messageFromBinaryCode(code) 
{
    return Decode(code, []).join('');
}

function Decode(code, letters)
{
    if(code.length < 1) return letters;
    letters.push(String.fromCharCode(parseInt(code.substr(0, 8), 2)));
    return Decode(code.slice(8), letters);
}