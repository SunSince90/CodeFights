//--------------------------------------------------
//  Code Fights: mergeTwoLinkedLists
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
ListNode<int> * mergeTwoLinkedLists(ListNode<int> * l1, ListNode<int> * l2) 
{
    if(l1 == nullptr) return l2;
    if(l2 == nullptr) return l1;
    
    ListNode<int>* i = l1;
    ListNode<int>* j = l2;
    ListNode<int>* result = nullptr;
    ListNode<int>* prev = nullptr;
    ListNode<int>* t = nullptr;
    int minimum = 0;
    int minl = 0;
    
    while(i != nullptr || j != nullptr)
    {
        minimum = GetMinimum(i, j, &minl);
        
        t = new ListNode<int>(minimum);
        
        if(minl == 1) i = i->next;
        else j = j->next;
        
        if(result == nullptr) result = t;    
        
        if(prev != nullptr) prev->next = t;        
        prev = t;
    }
    
    return result;
}

int GetMinimum(ListNode<int>* i, ListNode<int>* j, int* t)
{
    if(i == nullptr)
    {
        *t = 2;
        return j->value;
    }

    if(j == nullptr)
    {
        *t = 1;
        return i->value;
    }

    if(i->value < j->value)
    {
        *t = 1;
        return i->value;
    }

    *t = 2;
    return j->value;
}
