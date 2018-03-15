function deleteDigit(n) 
{
    const number = Array.from(n+"").map(i => parseInt(i));
    
    let max = 0;
    
    for(let i = 0; i < number.length; ++i)
    {
        const _number = Array.from(number);
        _number.splice(i, 1);
        const test = parseInt(_number.join(''));
        
        if(test > max) max = test;
    }
    
    
    return parseInt(max);
}