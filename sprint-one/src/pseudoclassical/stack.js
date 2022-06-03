var Stack = function() {

  this.storage = {};
  this.spot = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function (value) {
  this.storage[this.spot] = value;
  this.spot++;
};

Stack.prototype.pop = function () {
  if (this.spot > 0) {
    this.spot--;
    var result = this.storage[this.spot];
    delete this.storage[this.spot];
    return result;

  }
};

Stack.prototype.size = function () {
  return this.spot;
};
