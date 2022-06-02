var Queue = function() {
  var someInstance = {};
  var storage = {};
  var front = 0;
  var back = 0; 

  someInstance.enqueue = function(value) {
    storage[front] = value;
    front ++;
  };

  someInstance.dequeue = function() {
    
  if ( front - back) {
    var result = storage[back];
    delete storage[back];
    back++;
    return result;
    }
  };

  someInstance.size = function() {
    return front - back;
  };

  return someInstance;
};