var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  //console.log(newTree.value);
  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

//_.extend(newTree, treeMethods);

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  //console.log('node:', node);
  this.children.push(node);



};


treeMethods.contains = function(target) {
  var result = false;
  var search = function (node) {
    if (node.value === target) {
      result = true;
    } else {
      _.each(node.children, function(child) {
        search(child);
      });
    }
  };
  search(this);
  return result;

};

treeMethods.contains(4);

/*
 * Complexity: What is the time complexity of the above functions?
 */
