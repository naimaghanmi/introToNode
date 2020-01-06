var fs = require('fs');
var path = require('path');

function filterFiles(list, filter) {
  return list.filter(function(file) {
    return path.extname(file) == '.' + filter;
  });
};

module.exports = function(dir, filter, callback) {

  fs.readdir(dir, function(error, list) {
    if (error) {
      return callback(error);
    }
    var filtered = filterFiles(list, filter);
    return callback(null, filtered);
  });

};