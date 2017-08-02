'use strict';

function Concat(a,b) {
          return a.push.apply(a, b);    
}

function get_union(collection_a, collection_b) {
          let arr = [];
          let maxArr = (collection_a.length >= collection_b.length) ? collection_a : collection_b;
          let minArr = (collection_a.length < collection_b.length) ? collection_a : collection_b;
          Concat(maxArr, minArr);
          
          for (let i in maxArr) {
                    if (arr.indexOf(maxArr[i]) === -1) {
                              arr.push(maxArr[i]);
                    }
          }
          
          return arr;

}

module.exports = get_union;

