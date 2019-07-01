exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var fileNames = [], currentDir = [];
    function directoryProcessor(dir) {
      currentDir.push(dir.dir);
      for (var file of dir.files) {
        if ((!dirName || currentDir.indexOf(dirName) != -1) && typeof file === 'string') {
          fileNames.push(file)
        } else if (typeof file !== 'string') {
          directoryProcessor(file);
        }
      }
      currentDir.pop();
    };
    directoryProcessor(data);
    return fileNames;
  }
  ,

  permute: function(arr) {
    let temp = [], answer = [];

    function logResult() {
      answer.push(
        temp.slice()
      );
    }

    function perform() {
      let i, len, item;

      for (i = 0, len = arr.length; i < len; i++) {
        item = arr.splice(i, 1)[0];
        temp.push(item);
        if (arr.length) {
          perform();
        } else {
          logResult();
        }
        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }

    return perform();  },

  fibonacci: function(n) {
    let serieF = [], initNumber = 1;
    for (let i = 0; i < n; i++) {
      if (i > 1) {
        serieF.push(serieF[i - 2] + serieF[i - 1])
      } else {
        serieF.push(initNumber);
      }
    }
    return serieF[serieF.length - 1];  
  },

  validParentheses: function(n) {
    function fnPair(num) {
      if (num == 0)
        return [""];

      let result = [];
      for (let i = 0; i < num; ++i) {

        let lefts = fnPair(i);
        let rights = fnPair(num - i - 1);

        for (let l = 0; l < lefts.length; ++l)
          for (let r = 0; r < rights.length; ++r)
            result.push("(" + lefts[l] + ")" + rights[r]);
      }
      return result;
    }
    return fnPair(n);  }
};
