exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    let properties = [];
    for (let property in obj) {
      if (obj.hasOwnProperty(property)) {
        properties.push(property + ': ' + obj[property]);
      }
    }
    return properties;
  }
};
