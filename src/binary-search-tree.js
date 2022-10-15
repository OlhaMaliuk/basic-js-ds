const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.myRoot = null;
  }
  root() {
    return this.myRoot;
  }

  add(data) {
    this.myRoot = addWithin(this.myRoot, data);
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data > node.data) {
        node.right = addWithin(node.right, data);
      } else {
        node.left = addWithin(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return serchWithin(this.myRoot, data);

    function serchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data > node.data) {
        return serchWithin(node.right, data);
      } else {
        return serchWithin(node.left, data);
      }
    }
  }

  find(data) {
    return findWithin(this.myRoot, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data > node.data) {
        return findWithin(node.right, data);
      } else {
        return findWithin(node.left, data);
      }
    }
  }

  remove(data) {
    this.myRoot = removeWithin(this.myRoot, data);

    function removeWithin(node, data) {
      if (!node) {
        return null;
      }
      if (data > node.data) {
        node.right = removeWithin(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeWithin(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeWithin(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.myRoot) {
      return null;
    }
    let minElement = this.myRoot;
    while (minElement.left) {
      minElement = minElement.left;
    }
    return minElement.data;
  }

  max() {
    if (!this.myRoot) {
      return null;
    }
    let maxElement = this.myRoot;
    while (maxElement.right) {
      maxElement = maxElement.right;
    }
    return maxElement.data;
  }
}

module.exports = {
  BinarySearchTree,
};
