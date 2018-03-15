//--------------------------------------------------
//  Code Fights: Find Email Domain
//--------------------------------------------------

/*  This is actually wrong. The tests don't take into consideration the whole RFC.
    See more at: https://en.wikipedia.org/wiki/Email_address 
    This solution has been made to just pass the tests, I'm never going to add it in a production environment.
    */

function findEmailDomain(address) 
{
    return address.split('@').pop();
}


