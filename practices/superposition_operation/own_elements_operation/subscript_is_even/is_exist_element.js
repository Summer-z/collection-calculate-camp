'use strict';

function isExist(array, element) {
          for(let item of array) {
                    if(item === element) {
                              return true;
                    }
          }
          
          return false;
}

var is_exist_element = function(collection,element){
          let evenIndex = [];
          for(let item in collection) {
                    if(item%2 === 0) {
                          evenIndex.push(collection[item]);    
                    }
          }
          
          return isExist(evenIndex, element);
};

module.exports = is_exist_element;
