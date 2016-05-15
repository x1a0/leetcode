/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  var l = 0, p = head;
  while (p) {
    l++;
    p = p.next;
  }

  if (!l) return null;
  return toBST(head, l);
};

var toBST = function(h, len) {
  var mid = h;
  var count = 0;
  while (count < Math.floor(len / 2)) {
    mid = mid.next;
    count++;
  }

  var node = new TreeNode(mid.val);

  if (count) {
    node.left = toBST(h, count);
  }

  if (len - count - 1 > 0) {
    node.right = toBST(mid.next, len - count - 1);
  }

  return node;
}
