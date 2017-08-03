
function findKey(array, element) {
          for(let item of array) {
                    if(item.name === element) {
                              return item;
                    }
          } 
          return false;
}

function summarize(collection) {
          let result = [];
          for(let item of collection) {
                 if(!findKey(result, item))   {
                          result.push({name: item, summary: 1});
                 } else {
                        findKey(result, item).summary++;
                 }
          }
          return result;
}

function expand(array) {
          let result = [];
          for(let item of array) {
                    if(item.length === 1) {
                              result.push(item);
                    } else {
                              let {name, summary} = split(item);
                              push (result, name, summary);
                    }
          }
          return result;
}

function split(element) {
          if(element.includes('-')) {
                    let array = element.split('-');
                    return {name: array[0], summary: parseInt(array[1], 10)};        
          }  else if(element.includes(':')) {
                    let array = element.split(':');
                    return {name: array[0], summary: parseInt(array[1], 10)}; 
          }  else if(element.includes('[')) {
                    let name = element.charAt(0);
                    let summary = parseInt(element.substr(2, element.length-1));
                    return {name, summary};
          }
}
          

function push(result, name, summary) {
          for(let i=0; i<summary; i++) {
                    result.push(name);
          }
}

function count_same_elements(collection) {
          let expanedArr = expand(collection);
          return summarize(expanedArr);   
}

module.exports = count_same_elements;


