//--------------------------------------------------
//  Code Fights: possibleSums
//--------------------------------------------------

/*  NOTE: I did not add a main function. This is just the function as provided by code fights.
    Creating a main and the tests is straight forward anyway. */

int possibleSums(std::vector<int> coins, std::vector<int> quantity) 
{
    if(coins.size() == 1) return coins[0] * quantity[0];

    std::set<int> results;
    results.insert(0);
    
    for(int i = 0; i < coins.size(); ++i)
    {
        std::set<int> s = results;
        for(std::set<int>::iterator p = s.begin(); p != s.end(); ++p)
        {
            for(int j = 1; j < quantity[i] +1; ++j)
            {
                results.insert(*p + coins[i]*j);
            }
        }
    }

    return results.size() -1;
}