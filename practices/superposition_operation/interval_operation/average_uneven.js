'use strict';

function average_uneven(collection) {
          let sum = 0;
          let length = 0;
          for(let item of collection) {
                    if(item%2 !== 0) {
                          length++;
                          sum += item;
                    }
          }
          
          return parseInt(sum/length)
}

module.exports = average_uneven;
