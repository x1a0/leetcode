/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var p = new ListNode(null);
  p.next = head;
  var q = p;
  while (q.next) {
    if (q.next.val === val) {
      q.next = q.next.next;
    } else {
      q = q.next;
    }
  }

  return p.next;
};
