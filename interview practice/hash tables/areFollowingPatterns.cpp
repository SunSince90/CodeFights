//--------------------------------------------------
//  Code Fights: areFollowingPatterns
//--------------------------------------------------

/*  NOTE: I did not add a main function. This is just the function as provided by code fights.
    Creating a main and the tests is straight forward anyway. */

bool areFollowingPatterns(std::vector<std::string> strings, std::vector<std::string> patterns) {
    std::map<std::string, std::string> dictionary;
    std::map<std::string, std::string> reversed;
    
    for(int i = 0; i < strings.size(); ++i)
    {
        if(dictionary.count(patterns[i]) == 0)
        {
            std::cout << patterns[i] << " did not exist" << std::endl;
            if(reversed.count(strings[i]) == 1) return false;
            dictionary.emplace(patterns[i], strings[i]);
        }
        else
        {
            if(dictionary[patterns[i]].compare(strings[i]) != 0) return false;            
        }
        
        reversed.emplace(strings[i], patterns[i]);
    }
    
    return true;
}
