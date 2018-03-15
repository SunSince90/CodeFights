//--------------------------------------------------
//  Code Fights: growingPlant
//--------------------------------------------------

function growingPlant(upSpeed, downSpeed, desiredHeight) 
{
    if(upSpeed > desiredHeight) return 1;
    
    return Grow(0, upSpeed, downSpeed, desiredHeight);
}

function Grow(height, up, down, desired)
{
    height += up;    
    if(height >= desired) return 1;    
    return Grow(height -down, up, down, desired) +1;
}