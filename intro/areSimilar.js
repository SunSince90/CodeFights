//--------------------------------------------------
//  Code Fights: Are Similar?
//--------------------------------------------------

function areSimilar(a, b) 
{   
    let n = 0;
    for(let i = 0; i < a.length; ++i)
    {
        if(b[i] !== a[i])
        {
            if(++n == 2)return false;
            
            let indexes = [];  
            indexes.push(b.indexOf(a[i], i));
            
            if(indexes[0] == -1) return false;
            let index = indexes[0] +1;
            
            while(index != -1 && index < a.length)
            {
                index = b.indexOf(a[i], index);
                if(index != -1) indexes.push(index++);
            
            }
            
            for(let k = 0; k < indexes.length; ++k)
            {
                if(a[indexes[k]] == b[i])
                {
                    const c = b[indexes[k]];
                    b[indexes[k]] = b[i];
                    b[i] = c; 
                }
            }
        }
    }
    
    return a.toString() === b.toString();
}
