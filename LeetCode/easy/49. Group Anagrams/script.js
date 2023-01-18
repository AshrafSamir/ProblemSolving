/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashmap = {};
    let hashmapTemp = {};
    let result = [];
    let subres = [];
    let i=0;
    while(strs.length>0){

        

        for(let j=0; j<strs[i].length; j++){
            if(hashmap[strs[i][j]] === undefined){
                hashmap[strs[i][j]] = 1;
            }
            else{
                hashmap[strs[i][j]]++;
            }
        }
        

        if(strs[i] == ""){subres.push([""]);}
        else subres.push(strs[i]);
        

        for(let j=1; j<strs.length; j++){
            hashmapTemp = {};
            for(let k=0; k<strs[j].length; k++){
                if(hashmapTemp[strs[j][k]] === undefined){
                    hashmapTemp[strs[j][k]] = 1;
                }
                else{
                    hashmapTemp[strs[j][k]]++;
                }
            }
            let flag = true;
            if(Object.keys(hashmap).length === 0 || Object.keys(hashmapTemp).length === 0 )flag = false;
            for(let key1 in hashmap){
                if((hashmap[key1] !== hashmapTemp[key1])){
                    flag = false;
                    break;
                }
            }
            if(Object.keys(hashmap).length === 0 && Object.keys(hashmapTemp).length === 0 )
            {
                subres.push([""]);
                strs.splice(j, 1);
                j--;
            }
            else if(flag){
                subres.push(strs[j]);
                strs.splice(j, 1);
                j--;
            }
        }
        result.push(subres);
        subres = [];
        hashmap = {};
        strs.splice(i, 1);        
    }
    return result;
};

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(groupAnagrams(["","b"]));
// console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["",""]));
 console.log(groupAnagrams([""]));
