let input = 'Mamalaryna gelen wasyok urushdy';

const vowels = ['a', 'e', 'o', 'u', 'i'];

let resultArray = [];

for (i=0; i<input.length;i++) {
    //console.log(input[i]);
    for (j=0; j<vowels.length; j++) {
        //console.log(vowels[j]);
        if (input[i] === vowels[j]) {
            resultArray.push(vowels[j]);
        }
    }

    if (input[i] === 'e') {
        resultArray.push(input[i]);
    }

    if (input[i] === 'u') {
        resultArray.push(input[i]);
    }
}
console.log(resultArray.join('').toUpperCase());