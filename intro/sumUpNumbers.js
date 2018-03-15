function sumUpNumbers(inputString) 
{
    const elements = inputString.match(/[\d]+/gi);
    if(elements != null)
    {
        return elements.map(i => parseInt(i)).reduce((acc, i) => parseInt(acc) + parseInt(i));
    }
    return 0;
}