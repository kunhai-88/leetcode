// [143. 重排链表](https://leetcode.cn/problems/reorder-list/)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    const record = [];
    let next = head;
    while(next){
       record.push(next);
       next = next.next;
    }
    const n = record.length;
    let mid = Math.floor(n / 2);
    let last = n % 2;
    let i = 1;
    let reorder = head
    while(reorder){
      let temp = reorder.next;
      let node = record.at(-i)
      reorder.next = node;
      reorder = node.next =  temp;
      if ((last === 0 && i === mid) || (last === 1 && i > mid )) {
        node.next = reorder = null
      } else {
        i++;
      }
    }
    console.log(head)
    return head;
};