'use strict';

function calculate_average(collection) {
          let sum = 0;
          let len = 0;
          for(let item in collection) {
                    if(item%2 !== 0) {
                         len++;
                         sum += collection[item];
                    }
          }
          
          return parseInt(sum/len);
}
module.exports = calculate_average;
