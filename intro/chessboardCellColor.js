//--------------------------------------------------
//  Code Fights: chessBoardCellColor
//--------------------------------------------------

function chessBoardCellColor(cell1, cell2) 
{
    return Math.abs((cell1.charCodeAt(0) -cell2.charCodeAt(0)))%2
            == Math.abs((cell1.charCodeAt(1) -cell2.charCodeAt(1)))%2;
}