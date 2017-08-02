'use strict';

function compareFunction(a, b) {
          if(a < b) {
                    return -1;
          } else if (a > b) {
                    return 1;
          }
          
          return 0;    
}

function middleNum(collection, len) {
          let middle = 0;
          let item = parseInt(len/2);
          if(len%2 !== 0) {
                 middle = collection[item];
          } else {
                 middle = parseInt((collection[item] + collection[item-1])/2);   
          }
          
          return middle;
}

var calculate_median = function(collection){
          let arr = [];
          for(let item in collection) {
                    if(item%2 !== 0) {
                              arr.push(collection[item]);
                    }
          }
          arr.sort(compareFunction);
          
          return middleNum(arr, arr.length);
          
};
module.exports = calculate_median;
