exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(total, sum){
      return total + sum;
    });
  },

  remove: function(arr, item) {
    return arr.filter(function (val) {
      return val !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = arr.length - 1; i >= 0; i--) {
      arr[i] === item && arr.splice(i, 1);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var result = arr1.concat(arr2);
    return result;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var result = 0;
    arr.forEach(function (_item) {
      result += _item === item ? 1 : 0;
    });
    return result;
  },

  duplicates: function(arr) {
    var buffer = [];
    var result = [];
    arr.forEach(function (item) {
      buffer.indexOf(item) !== -1 && result.indexOf(item) === -1 && result.push(item);
      buffer.push(item);
    });
    return result;
  },

  square: function(arr) {
    return arr.map(function (item) {
      return Math.pow(item, 2);
    });
  },

  findAllOccurrences: function(arr, target) {
    var result = [];
    arr.forEach(function (item, index) {
      target === item && result.push(index);
    });
    return result;
  }
};
