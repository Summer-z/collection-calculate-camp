'use strict';

function calculate_elements_sum(collection, element) {
          
          for(let item of collection) {
                    if(item === element) {
                           return collection.indexOf(item);
                    }
          }
          
}

module.exports = calculate_elements_sum;

