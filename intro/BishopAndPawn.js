//--------------------------------------------------
//  Code Fights: Bishop And Pawn
//--------------------------------------------------

function bishopAndPawn(bishop, pawn) 
{
    // It's a linear function
    return Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0)) ==
           Math.abs(parseInt(bishop[1]) - parseInt(pawn[1]));
}