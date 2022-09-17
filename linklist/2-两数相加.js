//
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let prevNode = (head = new ListNode(-1));
  while (l1 && l2) {
    let newVal = l1.val + l2.val + carry;
    l1 = l1.next;
    l2 = l2.next;
    carry = Math.floor(newVal / 10);
    newVal = newVal % 10;
    prevNode = prevNode.next = new ListNode(newVal, null);
  }
  let end = l1 || l2;
  // 链表超长河进位处理
  while (carry > 0 || end) {
    let newVal = (end?.val || 0) + carry;
    carry = Math.floor(newVal / 10);
    newVal = newVal % 10;
    prevNode = prevNode.next = new ListNode(newVal, null);
    end = end?.next;
  }

  return head.next;
};
