/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  var reversed = [], p = head;

  while(p) {
    reversed.unshift(p);
    p = p.next;
  }

  var i = 0;
  p = head;
  while (p && p.next != reversed[i] && p != reversed[i]) {
    reversed[i].next = p.next;
    p.next = reversed[i];
    p = reversed[i].next;
    i++;
  }

  if (reversed[i]) {
    reversed[i].next = null;
  }
};
