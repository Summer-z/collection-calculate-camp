'use strict';

function even(item) {
          if (item%2 === 0) {
                    return true;
          }
          
          return false;
}

function collect_all_even(collection) {
          let evenArr = [];
          
          for (let item of collection) { 
                   if (even(item)) {
                             evenArr.push(item);
                   }    
          }
          
          return evenArr;
          
}

module.exports = collect_all_even;
