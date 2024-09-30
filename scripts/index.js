// 'use strict'

// --DATATYPES--
// let firstName = `ahmed`;
// let testNumber = 25;
// let testBoolean = true;
// let testUndefined;
// let testNull = null;
// let testBigInt;
// console.log(`Hello, ${firstName} and ${testNumber} and ${testBoolean} and ${testUndefined} and ${testNull}`);
// let fname;
// console.log(fname);
// fname = "omar";
// console.log(fname);
// fname = 23;
// console.log(fname);
// fname = true;
// console.log(fname);

// --CONCATENTAION AND MATHEMATICAL OPERATIONS--
// let x = "26";
// let y = 13;
// console.log(x + y);
// x = 26;
// console.log(x + y);
// console.log(x - y);
// console.log(x % y);
// console.log(x / y);
// console.log(x ** y);

// --EXAMPLE 1--
// //Mark's BMI calculation
// let markHeight = 1.93;
// let markMass = 78;
// let markBmi = markMass / markHeight ** 2;
// console.log("Mark's BMI = " + markBmi);
// //John's BMI calculation
// let johnHeight = 1.87;
// let johnMass = 60;
// let johnBmi = johnMass / johnHeight ** 2;
// console.log("John's BMI = " + johnBmi);
// //output
// console.log(`Mark Weighs ${markMass}kg and is ${markHeight}m tall.
// John weighs ${johnMass}kg and is ${johnHeight}m tall.`);
//comparison output
// (markBmi > johnBmi) ? (console.log("Mark's BMI is bigger")) : (console.log("John's BMI is bigger"));

// --ARRAY BUILT-INS--
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// arr.push(11);
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.length);

// --CONST NOTE--
// in const you cant change values except for array(manipulate it from inside)
// and objects(manipulation from inside) as the var holds the reference not the value?

// --SWITCH--
// let day = "tue";
// switch(day)
// {
//     case "sat":
//         console.log("sat");
//         break;
//     case "sun":
//         console.log("sun");
//         break;
//     case "mon":
//         console.log("mon");
//         break;
//     case "tue":
//         console.log("tue");
//         break;
//     case "wed":
//         console.log("wed");
//         break;
//     case "thu":
//         console.log("thu");
//         break;
//     case "fri":
//         console.log("fri");
//         break;
//     default:
//         console.log("NEIN NEIN NEIN NEIN!");
// }

// --LOOPS--
// for(let set = 1; set <= 4; set++)
//     for(let rep = 1; rep <= 10; rep++)
//         console.log(`set: ${set} x rep: ${rep}`);

// --EXAMPLE 2--
// billArr = [275, 40, 430];
// tipArr = [];
// for(let i = 0; i < billArr.length; i++)
// {
//     (billArr[i] >= 50 && billArr[i] <= 300) ? (tipArr[i] = billArr[i] * .15) : (tipArr[i] = billArr[i] * .2);
//     console.log(`bill = ${billArr[i]}\ntip = ${tipArr[i]}\nthe total = ${billArr[i] + tipArr[i]}`);
// }


// --FUNCTIONS--
// function calcAge(birthYear)
// {
//     logger(2024 - birthYear);
//     return 2024 - birthYear;
// }
// function logger(age)
// {
//     console.log(`your age is ${age}`);
// }
// const age = calcAge(2004);
// console.log(age);
// //lambda function????
// const dateOfBirth = (age) => {return 2024 - age;};


// --EXAMPLE 3--
// function calcAverage(scoreArr)
// {
//     let total = 0;
//     for(let i = 0; i < scoreArr.length; i++)
//     {
//         total += scoreArr[i];
//     }
//     return total / scoreArr.length;

// }

// function checkWinner(dolphinAvr, koalaAvr)
// {
//     if(dolphinAvr / koalaAvr >= 2)
//         console.log(`Dolphins win !!\n(${dolphinAvr} Vs. ${koalaAvr})`);
//     else if(koalaAvr / dolphinAvr >= 2)
//         console.log(`Koalas win !!\n(${koalaAvr} Vs. ${dolphinAvr})`);
//     else
//         console.log(`NO ONE WON!!\ndolphins = ${dolphinAvr}, koalas = ${koalaAvr}`);

// }
// const dolphinArr = [44, 23, 71];
// const koalaArr = [85, 54, 41];

// const dolphinAvr = calcAverage(dolphinArr);
// const koalaAvr = calcAverage(koalaArr);

// checkWinner(dolphinAvr, koalaAvr);


// typeof data types in checks are written in strings -> "number"

// --task 1--
// Make a function that calculates the difference or the summation between the maximum and the minimum element in the given array
// const arr = [1, 4, -7, 2, 14, 'name', 10, -2, 54, -20, 80];
// function minMaxDiff(arr)
// {
//     let max = arr[0], min = arr[0];
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(typeof arr[i] === "number")
//         {
//             if(max < arr[i])
//                 max = arr[i];

//             if(min > arr[i])
//                 min = arr[i];
//         }
//         else
//             continue;
//     }
//     return max - min;
// }
// const arr = [1, 4, -7, 2, 14, 'name', 10, -2, 54, -20, 80];
// console.log(minMaxDiff(arr));

// --task 2--
// function calcTip(bills, tips, totals)
// {
//     for(let i = 0; i < bills.length; i++)
//     {
//         (bills[i] >= 50 && bills[i] <= 300) ? (tips.push(bills[i] * .15)) : (tips.push(bills[i] * .2));
//         totals.push(bills[i] + tips[i]);
//     }
// }
// const bills = [22, 259, 176, 440, 37, 105, 10, 110, 86, 52];
// const tips = [], totals = [];
// calcTip(bills, tips, totals);
