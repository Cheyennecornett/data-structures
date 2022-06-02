var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    spot: 0
  };
  _.extend(someInstance, stackMethods);

  return someInstance;
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


