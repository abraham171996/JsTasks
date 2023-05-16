    // Task 1

/*Ask the user to enter a two-digit number.
 Increase this number by 7 until it becomes three digits.
 Output the last value to the console.*/

let userNum = +prompt("Please enter tow-digit number");



const threeDigitsNumber = (userNum) => {
    for (let i = 0; i < 13; i++) {
        if (userNum.length != 3) {
            userNum += 7;
        }
        else {
            break;
        }

    }

    return userNum


}

console.log(threeDigitsNumber(userNum));

//task 2
/*
Write a program that outputs the message "I know how to use cycles" N times to the console.
The program asks the user for the number N.
*/

let askNumber = +prompt("Please enter number");

let word = "I know how to use cycles";


const showAskNumber = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(word);
    }
}

showAskNumber(askNumber)

//task 3

/*
    Write a program that outputs the sum of all
    two-digit odd numbers to the console.
*/
let sumOddNumbers = 0;
function oddNumbers (num){
    for(let i = 11 ; i<100;i++){
        if(i%2!=0){
            num+=i;
        }
    }
    return num
}

console.log(oddNumbers(sumOddNumbers));


// Task 4

function isLucky(ticketNumber) {
    const digits = ticketNumber.toString().split('');
    const sumFirstHalf = digits.slice(0, 3).reduce((a, b) => Number(a) + Number(b));
    const sumSecondHalf = digits.slice(3).reduce((a, b) => Number(a) + Number(b));
    return sumFirstHalf === sumSecondHalf;
  }

  console.log(isLucky(123321));


//task 5
// const dateInput = prompt("Please enter a date in the format 'YYYY.MM.DD':");

const [year, month, day] = dateInput.split('.');
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = monthNames[Number(month) - 1];
const dateDescription = `${monthName} ${Number(day)}, ${year}`;

console.log(dateDescription);

//task 6

/*
    Write a numberToText function that prompts the user to enter 
    a number between 1 and 99 and outputs it to the console as text.

*/

let entNumber = +prompt("enter a number between 1 and 99");

const  numberToText = num=> num;

console.log(numberToText(typeof entNumber.toString()));



//task 7

/*
Ask the user to enter the full name in the format "NAME LASTNAME". 
Output the full name to the console in a different order, i.e. 
in "LAST NAME" format,

*/
let name1 = prompt("Please enter name")
let surname = prompt("Please enter surname")
let fullName = name1 + " " +  surname;
let result = fullName.split(" ");

console.log(result[1]+ " " + result[0]);


//task 8

let phoneNumber = prompt("Please enter phonenumber");

function isvalidnumber(phone){
    if(phone.length == 12 && phone.startsWith("+7") ){
        return true
    }
    else{
        return false
    }
} 

console.log(isvalidnumber(phoneNumber));
