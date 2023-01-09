function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var preorderTraversal = function (root) {
  let result = [];
  if (root === null) return [];
  result.push(root.val);

  result.push(...preorderTraversal(root.left));
  result.push(...preorderTraversal(root.right));

  return result;
};
