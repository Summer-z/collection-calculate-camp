'use strict';

function noRepeat(array, element) {
          let index = array.indexOf(element);
          let exist = [];
          for(let item of exist) {
                 if(item === element) {
                       array.splice(index, 1); 
                      return;
                 }    
                 
          }
           if(index === -1) {
                         exist.push(element);
                         array.push(element);  
                 } else { 
                          array.splice(index, 1); 
                   }
          
          return array;
}

var single_element = function(collection) {
          let result = [];
          for(let item in collection) {
                    if(item%2 !== 0) {
                             result = noRepeat(result, collection[item]);
                    }
          }
          
          return result;
};

module.exports = single_element;
