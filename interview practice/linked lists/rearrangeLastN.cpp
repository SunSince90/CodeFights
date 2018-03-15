//--------------------------------------------------
//  Code Fights: rearrangeLastN
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
ListNode<int> * rearrangeLastN(ListNode<int> * l, int n) 
{
    if(n == 0) return l;
    int count = 0;

    return BuildList(l, n, l, &count);
}

ListNode<int>* BuildList(ListNode<int>* l, int n, ListNode<int>* currentNode, int* count)
{
    ++(*count);
    ListNode<int>* _l = nullptr;
    if(currentNode->next != nullptr) _l = BuildList(l, n, currentNode->next, count);
    else
    {
        if(n >= *count)
        {
            *count = -1;
            return l;
        }
        else
        {
            *count = 1;
            currentNode->next = l;
        }
    }

    if(*count == -1) return l;    
    
    if(*count == n) _l = currentNode;
    if(*count == n+1) currentNode->next = nullptr; 
    
    ++(*count);
    
    return _l;
}
