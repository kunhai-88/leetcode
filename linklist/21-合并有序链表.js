// [合并两个有序链表] https://leetcode.cn/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if(!list1 || !list2){
      return list1 || list2;
    }
    let prev = new ListNode(-1);
    let head = prev;
    while(list1 && list2){
      if(list1.val <= list2.val){
        prev = prev.next  = list1;  // 指向最新的元素
        list1 = list1.next 
      } else {
        prev = prev.next  = list2;
        list2 = list2.next;
      }
    }
    prev = prev.next = list1 || list2
    return head.next;
 }