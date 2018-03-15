//--------------------------------------------------
//  Code Fights: groupingDishes
//--------------------------------------------------

/*  NOTE: I did not add a main function. This is just the function as provided by code fights.
    Creating a main and the tests is straight forward anyway. */

std::vector<std::vector<std::string>> groupingDishes(std::vector<std::vector<std::string>> dishes) 
{
    std::map<std::string, std::set<std::string>> ingredients;
    std::vector<std::vector<std::string>> groups;
    
    for(int i = 0; i < dishes.size(); ++i)
    {
        for(int j = 1; j < dishes[i].size(); ++j)
        {
            if(!ingredients.count(dishes[i][j]))  ingredients.emplace(dishes[i][j], std::set<std::string>());
            
            ingredients[dishes[i][j]].insert(dishes[i][0]);
        }
    }

    std::map<std::string, std::set<std::string>>::iterator ite = ingredients.begin();
    
    for(; ite != ingredients.end(); ++ite)
    {
        if(std::get<1>(*ite).size() > 1)
        {
            std::set<std::string>::iterator i = std::get<1>(*ite).begin();
            std::vector<std::string> v {std::get<0>(*ite)};

            for(; i != std::get<1>(*ite).end(); ++i)  v.push_back(*i);
            groups.push_back(v);
        }
    }  
    
    return groups;
}
