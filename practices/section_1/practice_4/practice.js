
function ifSameEle(array, element) {
          for(let item of array) {
                    if(item === element) {
                              return true;
                    }
          }
          return false;
}

function collect_same_elements(collection_a, collection_b) {
          let result = [];
          for(let item of collection_a) {
                   if(ifSameEle(collection_b.value, item.key)) {
                             result.push(item.key);
                   } 
          }
          
          return result;
}

module.exports = collect_same_elements;