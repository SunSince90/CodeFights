//--------------------------------------------------
//  Code Fights: reverseNodesInKGroups
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
ListNode<int> * reverseNodesInKGroups(ListNode<int> * l, int k) 
{
    if(k == 1) return l;
    
    ListNode<int>* i = nullptr;
    ListNode<int>* minilist = nullptr;
    ListNode<int>* newHead = nullptr;
    ListNode<int>* prev = nullptr;
    
    ListNode<int>* remaining = nullptr;
    ListNode<int>* miniTail = nullptr;
    ListNode<int>* _miniTail = nullptr;
    
    int count = 1;
    
    for(i = l; i != nullptr; i = i->next, ++count)
    {
        minilist = new ListNode<int>(i->value);
        minilist->next = prev;
        prev = minilist;
        
        if(count == k) newHead = minilist;
        
        if(count%k == 1)
        {
            if(count == 1) miniTail = minilist;
            else
            {
                _miniTail = minilist;
                minilist->next = nullptr;
                remaining = i;
            }
        }
        
        if(count%k == 0)
        {
            if(count > k)
            {
                miniTail->next = minilist;
                miniTail = _miniTail;
            }
        }
    }
    
    if((count-1)%k != 0)
    {
        miniTail->next = remaining;
        
        i = minilist;
        while(i != nullptr)
        {
            i = minilist->next;

            delete minilist;
            minilist = i;
        }
    }
    
    return newHead;
}
