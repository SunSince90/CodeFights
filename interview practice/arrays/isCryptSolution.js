//--------------------------------------------------
//  Code Fights: isCryptSolution
//--------------------------------------------------

function isCryptSolution(crypt, solution) 
{
    const dictionary = new Map(solution),
          words = [];
    
    for(let i = 0; i < crypt.length; ++i)
    {
        let word = "";
        for(let j = 0; j < crypt[i].length; ++j)
        {
            word += dictionary.get(crypt[i][j]);
        }
        
        if(word.length > 1 && word[0] == "0") return false;
        words.push(parseInt(word));
    }
    
    return words[0] + words[1] == words[2];
}