'use strict';

function haveSame(val, collection) {
          
          for (let item of collection) {
                    if (item === val) {
                              return true;
                    }
                   
          } 
          
          return false;
          
}

function get_intersection(collection_a, collection_b) { 
          let arrSame = [];
          for (let item of collection_b) {
                    
                    if (haveSame(item, collection_a)) {
                              arrSame.push(item);
                    }
                    
          }
          
          return arrSame;

}

module.exports = get_intersection;
