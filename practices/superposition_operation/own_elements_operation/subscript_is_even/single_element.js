'use strict';

function ifNoExist(array,element) {
          
        if(array.indexOf(element) === -1) {
            return true;
        } else {
            return false;
        }
}

function noRepeat(array, exist, element) {

        if(ifNoExist(array, element)) {
            if(ifNoExist(exist, element)) {
                array.push(element);
                exist.push(element);
            }
        } else {
            array.splice(array.indexOf(element), 1);
        }

        return array;
}

var single_element = function(collection) {
          
        let result = [];
        let exist = [];
        for(let item in collection) {
            if(item%2 !== 0) {
                result = noRepeat(result,exist, collection[item]);
            }
        }

        return result;
        
};

module.exports = single_element;
