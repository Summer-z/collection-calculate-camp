'use strict';

function old(num) {
          if(num%2 !== 0) {
                    return true;
          }
          return false;
}

function numCalculation(num) {
          return num*3+5;
}

function hybrid_operation_to_uneven(collection) {
          let sum = 0;
          for(let item of collection) {
                    if(old(item)) {
                              sum += numCalculation(item);
                    }
          }
          
          return sum;
}

module.exports = hybrid_operation_to_uneven;

