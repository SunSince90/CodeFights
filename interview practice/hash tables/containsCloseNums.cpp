//--------------------------------------------------
//  Code Fights: containsCloseNums
//--------------------------------------------------

/*  NOTE: I did not add a main function. This is just the function as provided by code fights.
    Creating a main and the tests is straight forward anyway. */

bool containsCloseNums(std::vector<int> nums, int k) 
{
    std::map<int, int> indexes;
    
    for(int i = 0; i < nums.size(); ++i)
    {
        if(indexes.count(nums[i]))
        {
            if(std::abs(i - indexes[nums[i]]) <= k) return true;
        }
        
        indexes[nums[i]] = i;
    }
    
    return false;
}
