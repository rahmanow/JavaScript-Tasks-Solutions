let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');

let betterWords = storyWords.filter(word => {
    //Checks if the variable word includes unnecessaryWords array.
    if (!unnecessaryWords.includes(word)) {
        return word;
    }
})

let overused = betterWords.filter(word => {
    //if the variable word includes overusedWords array
    if (overusedWords.includes(word)){
        // removes this overused word from the betterWords.
        betterWords.splice(betterWords.indexOf(word), 1);
    } else {
        return word;
    }
})

let sentence = 0;
let sentenceCount = betterWords.forEach(word => {
    //checks last character of a word in array, if it is '.' or '!'  to calculate the amount of sentences.
    if (word[word.length-1] === '.' || word[word.length-1] === '!')  {
        sentence++;
    }
})
const summary = (count1, count2, count3, count4) => {
    console.log('Story statystics');
    console.log('Word count: ' + count1.length);
    console.log('Sentences: ' + count2);
    console.log('Better words count: ' + count3.length);
    console.log('Overused words: ' + count4.length);
}




console.log(betterWords.join(' '));

summary(storyWords, sentence, betterWords, overused);

