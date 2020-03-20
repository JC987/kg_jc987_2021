function getOccurrenceOfCharacters(s){
    let arr = [];
    let split = s.split('');
    split = split.sort();
    let index = 0;
    
    while(index < s.length){
        let endingIndex =  split.lastIndexOf(split[index]) +1;
        let numberOfOccurrence = endingIndex - index;
        arr.push([split[index], numberOfOccurrence]);
        index = endingIndex;
    }

    return arr.sort((a, b) => b[1] - a[1]);
}

function isMappable(s1, s2){
    if(s1 === undefined || s2 === undefined)
        return false;
    if(s1.length > s2.length || s1.length === 0 || s2.length === 0)
        return false;

    let arr1 = getOccurrenceOfCharacters(s1);
    let arr2 = getOccurrenceOfCharacters(s2); 

    let j = 0;
    let isMappable = true;
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i][1] > arr2[j][1] || arr2[j][1] < 0)
            isMappable = false;

        arr2[j][1] = arr2[j][1] - arr1[i][1];

        if(arr2[j][1] === 0)
            j++;
        
    }

    return isMappable;
}




let str1 = process.argv[2];
let str2 =  process.argv[3];


isMappable(str1, str2) ? console.log("TRUE") : console.log("FALSE");