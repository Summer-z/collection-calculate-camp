'use strict';

function compute_average(collection) {
          let result = 0;
          for(let item of collection) {
                    result += item;
          }
          
          return result/collection.length;
}

module.exports = compute_average;

