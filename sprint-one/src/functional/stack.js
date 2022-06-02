var Stack = function() {
  var someInstance = {};
  // push(string) - Add a string to the top of the stack
  // pop() - Remove and return the string on the top of the stack
  // size() - Return the number of items on the stack
  // Use an object with numeric keys to store values
  var storage = {};

  var spot = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[spot] = value;
    spot++;

  };

  someInstance.pop = function() {
    if (spot > 0) {
      spot--;
      var result = storage[spot];
      delete storage[spot];
      return result;

    }
  };

  someInstance.size = function() {
    return spot;
  };

  return someInstance;
};
