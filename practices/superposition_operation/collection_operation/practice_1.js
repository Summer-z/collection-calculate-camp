'use strict';

function numCalculation(num) {
          return num*3+2;
}

function hybrid_operation(collection) {
          let sum = 0;
          for(let item of collection) {
                    sum += numCalculation(item);
          }
          
          return sum;
}

module.exports = hybrid_operation;

