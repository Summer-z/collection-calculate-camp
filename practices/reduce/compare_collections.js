'use strict';

function compare_collections(collection_a, collection_b) {
          let count = 0;
          if(collection_a.length !== collection_b.length) {
                    return false;
          }  
          
          for(let item in collection_a) {
                    if(collection_a[item] === collection_b[item]) {
                              count++;
                    }
          }
          
          if(count === collection_a.length) {
                    return true;
          }
}

module.exports = compare_collections;


