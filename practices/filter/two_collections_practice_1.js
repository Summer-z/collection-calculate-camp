'use strict';

function sameItem(arr, i) {
          for(let item of arr) {
                    if(item === i) {
                              return true;
                    }
          }
          
          return false;
}

function choose_common_elements(collection_a, collection_b) {
          let result = [];
          let maxArr = (collection_a.length >= collection_b.length) ? collection_a : collection_b;
          let minArr = (collection_a.length < collection_b.length) ? collection_a : collection_b;;
          for(let item of maxArr) {
                    if(sameItem(minArr, item)) {
                              result.push(item);
                    }     
          }
          
          return result;
}

module.exports = choose_common_elements;
