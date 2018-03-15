//--------------------------------------------------
//  Code Fights: removeKFromList
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
ListNode<int> * removeKFromList(ListNode<int> * l, int k) 
{    
    ListNode<int>* toDelete = nullptr;
    ListNode<int>* previous = nullptr;
    ListNode<int>* n = l;
    
    while(n != nullptr)
    {
        if(n->value == k)
        {
            toDelete = n;
            
            if(previous != nullptr) previous->next = n->next;                
            else l = n->next;       

        }
        else previous = n;
        
        n = n->next;
        
        if(toDelete != nullptr)
        {
            delete toDelete;
            toDelete = nullptr;
        }
    }
    
    return l;
}
