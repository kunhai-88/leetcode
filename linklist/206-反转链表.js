/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 // 生成新列表法
// var reverseList = function(head) {
//   let prev = null;
//   while(head){
//     prev = new ListNode(head.val,prev);
//     head = head.next;
//   }
//   return prev;
// };

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
var reverseList = function(head) {
    let prev = null;
    while(head){
       let next = head.next;
       head.next = prev;
       prev = head;
       head = next;
    }
    return prev;
  };