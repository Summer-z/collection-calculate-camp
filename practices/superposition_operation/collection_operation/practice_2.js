'use strict';

function old(num) {
          if(num%2 !== 0) {
                    return true;
          }
          return false;
}

function numCalculation(num) {
          return num*3+2;
}

function hybrid_operation_to_uneven(collection) {
          let result = [];
          for(let item of collection) {
                    if(old(item)) {
                              result.push(numCalculation(item));      
                    }
          }
          
          return result;
}

module.exports = hybrid_operation_to_uneven;

