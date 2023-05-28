//string  returns  object.
function reportLetters(word){
    let obj = {};
    for (let i = 0; i < word.length; i++) {
        objIndex = word[i];
        if(obj[objIndex]){
            obj[objIndex]++
        }
        else{
            obj[objIndex]=1
        }
      }
      return obj
}


console.log(reportLetters('alionli'));
console.log(reportLetters('css'));
console.log(reportLetters('vivo'));






function checkIsInside(str1, str2) {
    if (str1.includes(str2)) {
      return str1 + str2;
    } else {
      return str2 + str1;
    }
  }
  
  console.log(checkIsInside('ali', 'li')); // alili
  console.log(checkIsInside('ali', 'ko')); // koali
  console.log(checkIsInside('javascript', 'as')); // javascriptas
  console.log(checkIsInside('javascript', 'type')); // typejavascript