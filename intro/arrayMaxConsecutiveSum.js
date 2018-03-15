//--------------------------------------------------
//  Code Fights: arrayMaxConsecutiveSum
//--------------------------------------------------

function arrayMaxConsecutiveSum(inputArray, k) 
{
    let max = (() => {
        let sum = 0;
        for(let i = 0; i < k; ++i) sum += inputArray[i];
        return sum;
    })();

    let sum = max;
    for(let i = 1; i < inputArray.length -k +1; ++i)
    {
        sum += - inputArray[i-1] +inputArray[i+k-1];
        if(sum > max) max = sum;
    }
    
    return max;
}