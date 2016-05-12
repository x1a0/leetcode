/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {

  var add = function(node, sum) {
    if (!node) return 0;

    var _sum = sum * 10 + node.val;

    if (!node.left && !node.right) {
      return _sum;
    }

    return add(node.left, _sum) + add(node.right, _sum);
  }

  return add(root, 0);
};
