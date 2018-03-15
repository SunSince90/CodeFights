//--------------------------------------------------
//  Code Fights: File Naming Problem
//--------------------------------------------------

function fileNaming(names) 
{    
    const files = new Set(),
          n = new Map();
    
    for(let i = 0; i < names.length; ++i)
    {
        if(files.has(names[i]))
        {
            let j = 1;
            while(files.has(names[i] + "(" + j + ")")) ++j;
            
            names[i] += "(" + j + ")";
            ++j;
            files.add(names[i]);
        }
        else files.add(names[i]);
    }
    
    return names;
}
