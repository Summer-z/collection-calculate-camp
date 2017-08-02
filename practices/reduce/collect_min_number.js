'use strict';

function min(num, array) {
          for(let item of array) {
                    if(item < num) {
                              num = item;
                    }
          }
          
          return num;
}

function collect_min_number(collection) {
          let minNum;
          for(let item of collection) {
                    minNum = min(item, collection);
          }
          
          return minNum;
}


module.exports = collect_min_number;

