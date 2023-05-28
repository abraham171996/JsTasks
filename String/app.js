//#string

//Find the longest word in a sentence

let sentence = "salam necesiz men front-end developerem"

let newSentenceArr = sentence.split(" ")

function findLongestWord(words){
    let longWord = 0
    let emptyWord = ""
    for(let i = 0; i<words.length; i++){
        if(words[i].length>longWord){
            longWord = words[i].length
            emptyWord =words[i]
        }
    }

    return emptyWord
}

let resultX = findLongestWord(newSentenceArr)

console.log(resultX);


//Reverse the sentence order


const reverseSentence = (sentence)=>sentence.split(" ").reverse().join(" ")

console.log(reverseSentence(sentence));

//a function that removes duplicate characters

function removesDuplicate(sentence){
    let newSentence = ""
    for(let i = 0 ; i<sentence.length;i++){
        if(!newSentence.includes(sentence[i])){
            newSentence+=sentence[i]
        }
    }
    return newSentence
}

console.log(removesDuplicate(sentence));

//toCapitalize()

const toCapitalize = (sentence)=>{
    let newCapitalize = ''
    let emptyString = " "
    for(let i = 0;i<sentence.length;i++){

        newCapitalize +=  sentence[i].replace(sentence[i][0],sentence[i][0].toUpperCase()) + emptyString 
    }
    return newCapitalize
}


console.log(toCapitalize(sentence.split(" ")));




//function that replaces all spaces with dashes

const replacesSpacesDashes = (sentence) => {
    let newSentence2 = ""
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            newSentence2 += "-"
        }
        else{
            newSentence2 +=sentence[i];
        }
    }
    return newSentence2
}


console.log(replacesSpacesDashes(sentence));


//function that swaps the first and last characters

function swapsCharacter(sentence){
    let newSentence3 = ""
    for(let i = 0;i<sentence.length;i++){
        if(i===0){
            newSentence3 += sentence[i].replace(sentence[0],sentence[sentence.length-1])
        }
        else if(i===sentence.length-1){
            newSentence3 += sentence[i].replace(sentence[sentence.length-1],"s")
        }
        else{
            newSentence3 += sentence[i]
        }
    }
    return newSentence3
}


console.log(swapsCharacter(sentence));


//a function to check if it contains only numbers


let newString = "12 edsal 213 sadsa"
let numString = "01171996"

function checkOnlyNumbers(element){
    let em = ""
    for(let i=0; i<element.length;i++){
        
        if(!isNaN(i + +(element)) ){
            em +=  element[i]
        }
    }
    return em
}

console.log(checkOnlyNumbers(numString));
console.log(checkOnlyNumbers(newString));

//A function that finds the number of uppercase letters in a sentence

function countUppercaseLetters(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === sentence[i].toUpperCase() && sentence[i] !== sentence[i].toLowerCase()) {
        count++;
      }
    }
    return count;
  }
 
  const uppercaseCount = countUppercaseLetters(sentence);  
  console.log( uppercaseCount);