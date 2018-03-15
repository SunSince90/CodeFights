function digitsProduct(product) 
{  
    if(product == 0) return 10;
    
    const products = GetNumbers(product, [1]);
    if(Array.isArray(products))
    {
        if(products.length == 1) return 1;
        products.pop();
    }
    else return products;

    return parseInt(products.join(''));
}

function GetNumbers(p, div)
{
    if(p <= 1) return div;
    for(let i = 9; i > 1; i--)
    {
        if(p%i == 0)
        {
            div.unshift(i);
            return GetNumbers(p/i, div);
        }
    }
    
    return -1;
}
