/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  var seen = [];

  var lookAt = function(node, depth) {
    if (!node) return;
    seen[depth] = node.val;
    lookAt(node.left, depth + 1);
    lookAt(node.right, depth + 1);
  };

  lookAt(root, 0);
  return seen;
};
