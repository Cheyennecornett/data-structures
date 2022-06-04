class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.spot = 0;
  }

  push (value) {
    this.storage[this.spot] = value;
    this.spot++;

  };

  pop () {
  if (this.spot > 0) {
    this.spot--;
    var result = this.storage[this.spot];
    delete this.storage[this.spot];
    return result;

  }
};

  size () {
  return this.spot;
};

}