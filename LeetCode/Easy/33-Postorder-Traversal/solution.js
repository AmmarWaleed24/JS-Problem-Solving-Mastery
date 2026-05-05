var postorderTraversal = function(root) {
    let res = [];
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        traverse(node.right);
        res.push(node.val);
    };
    traverse(root);
    return res;
};
