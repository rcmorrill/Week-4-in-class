/* Week 4 Exercise 1 */
/* Some array exercises */

//Create a new array
var newArray = [];

//Push 100 random numbers between 1 and 1000 into the array
//for(var i = 0; i<100; i++){...}

for(var i=0;i<100;i++){
	newArray.push(Math.random()*1000)
}



//Find out the length of the array

console.log (newArray.length)

//Find out the first value in the array
console.log(newArray[0])

//Find out the last value in the array
console.log(newArray [newArray.length-1])

//Find out the average of all the values in the array

var sum = 0;

newArray.forEach(function(arrayElement){
	sum = (sum + arrayElement);

})

console.log("average " + sum/newArray.length);


newArray.forEach(function(arrayElement){
	console.log("rolling average " + (sum + arrayElement)/newArray.length);
})