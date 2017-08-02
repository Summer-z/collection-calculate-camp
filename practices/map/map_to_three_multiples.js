'use strict';

function map_to_three_multiples(collection){
          let result = [];
          for(let item of collection) {
                    result.push(item*3);
          }
          
          return result;
}

module.exports = map_to_three_multiples;
