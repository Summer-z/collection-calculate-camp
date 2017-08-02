'use strict';

function compareFunction(a, b) {
          if(a < b) {
                    return -1;
          } else if (a > b) {
                    return 1;
          }
          return 0;      
}

function compute_median(collection) {
          collection.sort(compareFunction);
          let middle = 0;
          let len = collection.length;
          let item = parseInt(len/2);
          if(len%2 !== 0) {
                 middle = collection[item];
          } else {
                 middle = (collection[item] + collection[item-1])/2;   
          }
          
          return middle;
}

module.exports = compute_median;


