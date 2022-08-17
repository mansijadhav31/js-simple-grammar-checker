let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0;

 //iterate over each word in storyWords
function myCallBack(word){
  count++;
}
storyWords.forEach(myCallBack)


//remove literally word from storyWords
function filtering(word){
  if(word!==unnecessaryWord){
    return word;
  }
}
storyWords = storyWords.filter(filtering);


//remove misspelt word by mapping over storyWords & reassigning it 
const removeMisspell = word =>{
  if(word==misspelledWord){
    return "beautiful"
  }
  return word;
}
storyWords = storyWords.map(removeMisspell);

//finding a bad word 
const findBadWord = (word) =>{
  if (word==badWord){
    return word;
  }
}
let badWordIndex = storyWords.findIndex(findBadWord);
console.log("bad word index " + badWordIndex)

//replacing the index of the badword with a better one 
storyWords[badWordIndex] ='really';

//finding if there are words longer than 10 chars
function longWordsCheck(word){
  if (word.length>10){
    return word;
  }
}

let lengthCheck = storyWords.every(longWordsCheck);
console.log(lengthCheck);

//finding the word 
storyWords.forEach((word)=>{
  word.length>10 && console.log(word);
})

console.log(storyWords.join(' ')); //to compare, do the opposite of line 3, and join back
