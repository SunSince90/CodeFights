//--------------------------------------------------
//  Code Fights: addTwoHugeNumbers
//--------------------------------------------------

/*  NOTE: I did not add a main function. This is just the function as provided by code fights.
    Creating a main and the tests is straight forward anyway. */

// Definition for singly-linked list:
// template<typename T>
// struct ListNode {
//   ListNode(const T &v) : value(v), next(nullptr) {}
//   T value;
//   ListNode *next;
// };
//
ListNode<int> * addTwoHugeNumbers(ListNode<int> * a, ListNode<int> * b) 
{
    if(a == nullptr)
    {
        if(b == nullptr) return nullptr;
        return b;
    }
    else
    {
        if(b == nullptr) return a;
    }
        
    ListNode<int>* i = nullptr;
    ListNode<int>* inverted_a = nullptr;
    ListNode<int>* prev = nullptr;

    ListNode<int>* j = nullptr;
    ListNode<int>* inverted_b = nullptr;
    
    ListNode<int>* longest = nullptr;
    ListNode<int>* shortest = nullptr;
    ListNode<int>* t = nullptr;
    
    int acount = 0;
    int bcount = 0;
    int sum = 0;
    int excess = 0;
    
    for(i = a; i != nullptr; i = i->next)
    {
        inverted_a = new ListNode<int>(i->value);
        inverted_a->next = prev;
        prev = inverted_a;
        acount++;
    }
    
    prev = nullptr;
    for(j = b; j != nullptr; j = j->next)
    {
        inverted_b = new ListNode<int>(j->value);
        inverted_b->next = prev;
        prev = inverted_b;
        bcount++;
    }
    
    longest = inverted_a;
    shortest = inverted_b;
    if(bcount > acount)
    {
        longest = inverted_b;
        shortest = inverted_a;
    }
    
    prev = nullptr;
    for(i = longest, j = shortest; i != nullptr; i = i->next)
    {
        sum = i->value + excess;
        
        if(j != nullptr)
        {
            sum += j->value;
            j = j->next;
        }
        
        t = new ListNode<int>(sum);
        t->next = prev;
        prev = t;
        
        if(sum/10000 >= 1)
        {
            excess = trunc(sum/10000);
            t->value -= (excess *10000);
        }
        else excess = 0;
    }
    
    if(excess > 0)
    {
        t = new ListNode<int>(excess);
        t->next = prev;
    }
    
    return t;
}
