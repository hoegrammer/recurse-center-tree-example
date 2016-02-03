module.exports = find;

function find(tree, name){
  var found;
  if (tree.name === name) return tree;
  for(var i = 0; i < tree.children.length; i++) {
    found = find(tree.children[i], name);
    if (found) return found;
  }
}
