#include <iostream>

using namespace std;

 struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
  };

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {

        ListNode *result = new ListNode;
        ListNode *current1 = l1;
        ListNode *current2 = l2;
        ListNode *current3 = result;
        int rem = 0;

        bool flag = false;
        while(current1!=nullptr || current2!=nullptr || (rem!=0)) {

            int value = 0;
            if(current1 == nullptr && current2 != nullptr)
            {
                value = 0 + current2->val + rem;
                if(rem == 1)rem = 0;
            }
            else if(current2 == nullptr && current1 != nullptr)
            {
                value = current1->val + 0 + rem;
                if(rem == 1)rem = 0;
            }
            else if(current1!=nullptr && current2!=nullptr)
            {
                value = current1->val + current2->val + rem;
                if(rem == 1)rem = 0;
            }
            else
            {
                value = rem;
                if(rem == 1)rem = 0;
            }

            if(value >= 10)
            {

                if(flag)
                {
                    value = value % 10;
                    ListNode *node = new ListNode(value);
                    current3->next = node;
                    current3 = node;

                }
                else
                {
                    value = value % 10;
                    current3->val = value;

                }

                rem = 1;
            }
            else
            {
                if(flag)
                {
                    ListNode *node = new ListNode(value);
                    current3->next = node;
                    current3 = node;

                }
                else
                {

                    current3->val = value;

                }
            }

            flag = true;
            if(current1!=nullptr)current1 = current1->next;
            if(current2!=nullptr)current2 = current2->next;

        }

        return result;

    }

    void display(ListNode* current)
    {
        while(current!=nullptr)
        {
            cout<<current->val;
            current = current->next;
        }
    }
};

int main()
{
    Solution s;
    ListNode l1, l2, *result;

    l1.val = 2;
    ListNode next1(4);
    l1.next = &next1;
    ListNode next2(3);
    next1.next = &next2;

    l2.val = 5;
    ListNode next3(6);
    l2.next = &next3;
    ListNode next4(4);
    next3.next = &next4;



    result = s.addTwoNumbers(&l1, &l2);
    s.display(result);
    return 0;
}
