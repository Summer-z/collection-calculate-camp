'use strict';

function compareFunction(a, b) {
          if(a < b) {
                    return -1;
          } else if (a > b) {
                    return 1;
          }
          
          return 0;    
}

function rank_asc(collection) {
          let result = collection;
          return result.sort(compareFunction).reverse();        
} 

module.exports = rank_asc;
