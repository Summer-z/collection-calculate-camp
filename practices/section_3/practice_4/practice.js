function ifSameEle(array, element) {
          for(let item of array) {
                    if(item === element) {
                              return true;
                    }
          }
          return false;
}

function changeCount(number) {
          if(number < 3) {
                    number--;
          } else {
                    let a = parseInt(number/3, 10);
                    for(let i=0; i<a; i++) {
                              number--;
                    }     
          }
          
          return number;
}

function sameElement(collection_c, object_b) {
          for(let item of collection_c) {
                    if(ifSameEle(object_b.value, item.key)) {
                              item.count = changeCount(item.count);
                    }
          }
          
          return collection_c;
}

function findKey(array, element) {
          for(let item of array) {
                    if(item.key === element) {
                              return item;
                    }
          } 
          return false;
}

function ifSplit(element) {
          let array = element.split('-');
          if(array.length > 1) {
                    return array;
          }
          return false;
}

function summarize(collection) {
          let result = [];
          let count = 1;
          for(let item of collection) {
                    let key = item;
                    if(ifSplit(item))  {
                              key = ifSplit(item)[0];
                              count = parseInt(ifSplit(item)[1], 10);    
                    } 
                    if(!findKey(result, key))   {
                              result.push({key,  count});
                    } else {
                              findKey(result, key).count++;
                    }
          }
          
          return result;
}

function create_updated_collection(collection_a, object_b) {
          let collection_c = summarize(collection_a);
          return sameElement(collection_c, object_b);
}

module.exports = create_updated_collection;
