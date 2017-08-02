'use strict';

function average(arr) {
          let sum = 0;
          for(let item of arr) {
                    sum += item;
          }
          
          return parseInt(sum/arr.length);
}

function isNullArr(array,result) {
          let aveNum;
          if(array.length !== 0) {
                    aveNum = average(array);
                    result.push(aveNum);
                    return false;
          } else {
                    return true;
          }

}

var even_group_calculate_average = function(collection){
          let digitOne = [];
          let digitDouble = [];
          let digitTriple = [];
          let result = [];
          let count = 0;
          for(let item in collection) {
                    if(item%2 !== 0) {
                              if(collection[item]%2 === 0) {
                                        if(collection[item] < 10) {
                                                 digitOne.push(collection[item]); 
                                        } else if(collection[item] < 100) {
                                                  digitDouble.push(collection[item]);
                                        } else if(collection[item] < 1000) {
                                                  digitTriple.push(collection[item]);
                                        }
                              } else {
                                        count++;
                              }
                    }
          } 
          
          if(count === parseInt(collection.length/2)) {
                    result = [0];
          }
          isNullArr(digitOne,result);
          isNullArr(digitDouble,result);
          isNullArr(digitTriple,result); 
          
          return result;
          
          
};
module.exports = even_group_calculate_average;
