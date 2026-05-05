var isBalanced = function(root) {
    const checkHeight = (node) => {
        if (!node) return 0;
        let left = checkHeight(node.left);
        let right = checkHeight(node.right);
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
        return 1 + Math.max(left, right);
    };
    return checkHeight(root) !== -1;
};
