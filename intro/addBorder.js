//--------------------------------------------------
//  Code Fights: Add Border
//--------------------------------------------------

function addBorder(picture) 
{
    const n = picture[0].length + 2;
    let newpicture = [],
         border = (() => {  let s = ""; 
                            for(let i = 0; i < n; ++i) s += '*';
                            return s;
                         })();
    
    newpicture.push(border);
    
    for(let i = 0; i < picture.length; ++i)
    {
        newpicture.push('*' + picture[i] + '*');
    }
    
    newpicture.push(border);
    
    return newpicture;
}
