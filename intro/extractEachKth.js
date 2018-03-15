//--------------------------------------------------
//  Code Fights: extractEachKth
//--------------------------------------------------

function extractEachKth(inputArray, k) 
{
    return inputArray.filter((el, i) => i%(k) != k-1);
}