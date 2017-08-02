'use strict';

function compareFunction(a, b) {
          if(a < b) {
                    return -1;
          } else if (a > b) {
                    return 1;
          }
          
          return 0;    
}

function even_asc_odd_desc(collection) {
          let evenArr = [];
          let oldArr = [];
          for(let item of collection) {
                    if(item%2 === 0) {
                              evenArr.push(item);
                    } else {
                              oldArr.push(item); 
                    }
          }
          
          return evenArr.sort(compareFunction).concat(oldArr.sort(compareFunction).reverse());
}
module.exports = even_asc_odd_desc;
