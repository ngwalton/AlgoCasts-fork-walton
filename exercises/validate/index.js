// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// function validate(node, min = null, max = null) {
//     // bst is valid if all are false
//     const tests = [
//         min && node.data < min,
//         max && node.data > max,
//         node.left && !validate(node.left, min, node.data),
//         node.right && !validate(node.right, node.data, max)
//     ];

//     return tests.every(i => !i);
// }

function validate(node, min = null, max = null) {
    if (min && node.data < min) {
        return false;
    }

    if (max && node.data > max) {
        return false;
    }

    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;
}

// function validate(node, min = null, max = null) {
//     if ((!node.left) && (!node.right)) {
//         return true;
//     }

//     if (!min || !max) {
//         min = node.data;
//         max = node.data;
//     }

//     if (node.left && node.left.data < node.data && node.left.data < min) {
//         return validate(node.left, node.left.data, max);
//     } else if (node.left) {
//         return false;
//     }

//     if (node.right && node.right.data > node.data && node.right.right > max) {
//         return validate(node.right, min, node.right.data);
//     } else if (node.right) {
//         return false;
//     }
// }

module.exports = validate;
