'use strict';

function linkToArray(link, array) {
          let strArr = link.split("->");
          for(let item of strArr) {
                    array.push(parseInt(item));
          }
          return array; 
}

function compareFunction(a, b) {
          if(a < b) {
                    return -1;
          } else if (a > b) {
                    return 1;
          }
          return 0;      
}

function compute_chain_median(collection) {
          let numArr = [];
          let middle = 0;
          linkToArray( collection, numArr);
          numArr.sort(compareFunction);
          let len = numArr.length;
          let item = parseInt(len/2);
          if(len%2 !== 0) {
                 middle = numArr[item];
          } else {
                 middle = (numArr[item] + numArr[item-1])/2;   
          }
          
          return middle;
          
}

module.exports = compute_chain_median;
