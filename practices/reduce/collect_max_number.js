'use strict';

function max(num, array) {
          for(let item of array) {
                    if(item > num) {
                              num = item;
                    }
          }
          
          return num;
}

function collect_max_number(collection) {
          let maxNum;
          for(let item of collection) {
                    maxNum = max(item, collection);
          }
          
          return maxNum;
}

module.exports = collect_max_number;
