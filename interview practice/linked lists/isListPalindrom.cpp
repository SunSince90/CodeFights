//--------------------------------------------------
//  Code Fights: isListPalindrome
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
bool isListPalindrome(ListNode<int> * l) 
{
    ListNode<int>* n = l;
    ListNode<int>* prev = nullptr;
    ListNode<int>* newNode = nullptr;
    ListNode<int>* r = nullptr;
    int length = 0;
    int i = 0;
    
    while(n != nullptr)
    {
        newNode = new ListNode(n->value);
        newNode->next = prev;
        prev = newNode;
        n = n->next;
        ++length;
    }
    
    r = newNode;
    n = l;
    while(n != nullptr && i < length/2)
    {
        if(n->value != r->value) return false;
        n = n->next;
        r = r->next;
        ++i;
    }
    
    return true;
}
