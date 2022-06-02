var Stack = function() {

  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.spot = 0;

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  push: function(value) {
    this.storage[this.spot] = value;
    this.spot++;
  },
  pop: function() {
    if (this.spot > 0) {
      this.spot--;
      var result = this.storage[this.spot];
      delete this.storage[this.spot];
      return result;
    }
  },
  size: function() {
    return this.spot;
  }
};


