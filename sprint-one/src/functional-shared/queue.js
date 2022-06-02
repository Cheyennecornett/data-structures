var Queue = function() {

  var someInstance = {
    storage: {},
    front: 0,
    back: 0

  };
  _.extend(someInstance, queueMethods);

  return someInstance;
};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.


var queueMethods = {
  enqueue: function(value) {
    this.storage[this.back] = value;
    this.back++;
  },

  dequeue: function() {
    if (this.front < this.back) {
      var result = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      return result;
    }
  },

  size: function() {
    return (this.back - this.front);
  }
};




