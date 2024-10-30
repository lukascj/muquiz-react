export function shuffle(arr) { 
    for(let i = arr.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    } 
    return arr; 
}; 

export function findIndexes(match, arr) {
    let indexes = [];
    arr.forEach((str,i) => {
        if(str == match) indexes.push(i);
    });
    return indexes;
}