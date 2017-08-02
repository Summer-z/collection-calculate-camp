'use strict';

function double_to_one(collection) {
          let result = [];
          for(let item of collection) {
                    if(Array.isArray(item)) {
                              result = result.concat(item);
                    } else {
                              result.push(item);
                    }
          }
          
          return result;
}

module.exports = double_to_one;
