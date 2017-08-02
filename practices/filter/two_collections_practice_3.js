'use strict';

function multItem(arr, i) {
          for(let item of arr) {
                    if(i%item === 0) {
                              return true;
                    }
          }
          
          return false;        
}

function choose_divisible_integer(collection_a, collection_b) {
          let result = [];
          for(let item of collection_a) {
                              if(multItem(collection_b, item)) {
                                        result.push(item);
                              }     
                    }
                    
          return result;
}

module.exports = choose_divisible_integer;
