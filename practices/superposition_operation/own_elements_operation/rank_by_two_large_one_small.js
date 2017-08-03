'use strict';

function compareFunction(a,b) {
         return a-b;
}

function arrSort(array) {
          return array.sort(compareFunction);
}

function changeArr(array) {
          array.push(array.shift());
}

function strToNum(array) {
          let arrNum = [];
          for(let item of array) {
                    arrNum.push(parseInt(item));
          }
          
          return arrNum;
} 

function rank_by_two_large_one_small(collection) {
          let result = [];
          arrSort(collection);                            //第一步 先从小到大排序
          let count = Math.ceil(collection.length / 3);   //第二步 三个一组拆分成小组 实现二维数组嵌套
          for(let i=0; i<count; i++ ) {
                    result[i] = collection.slice(3*i, 3*i+3);      
          }
          for(let item of result) {                       //第三步 每个子数组都弹出第一项然后放在最后一项的位置
                 if(item.length ===3) {
                           changeArr(item);
                 }   
          }
          result = result.join(',').split(',');           //第四步 将二维数组转换成一维数组
          
          return strToNum(result);                        //第五步 将一维数组中的每一项都字符串转成数字
}

module.exports = rank_by_two_large_one_small;
