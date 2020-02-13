let str = "";

const fs = require('fs');
const data = fs.readFileSync('textsave.txt', 'utf8');

const sentence = data.split("\n");


/**
 * @return {number}
 */
function WordCount(str) {
    return str.split(" ").length;
}

for (let i=0; i<sentence.length; i++) {
    let count = WordCount(sentence[i]);
    if (count > 10 &&  count < 25) {
        let sozlem = sentence[i].trim() + '\n';
        fs.appendFile('textsave2.txt', sozlem, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Tamamlandy');
            }
        })
    }
}