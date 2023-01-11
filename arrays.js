var friends =["Jacob", "Cole", "Nate", "Ryan"]
console.log(friends.slice(1,3))
// the slice feature is going to give a copy of the elemetns with a parameter 
// set on the parameters of the index position
// When i run that line of code the output would be "Cole" and "Nate"
var ages =[19, 47, 24, 8]
ages.shift()
// The shift feature is going to pull out the first element
// In the array. SO when i run this code it will result in the 
// output being 19
ages.unshift(47)
console.log(ages)
// Now if we were to do unshift this would result in pulling 
// the number we set in parantheses and adding it to the index position
// of 0
var canDrinkAlcohol =[true, false, false, false]
canDrinkAlcohol.push(false)
console.log(canDrinkAlcohol)
//Runnin the push feature would result in whatever we put in the 
//paranthesis to be pushed to the last index position in our array
// This would result in the output being 
//[true, false, false, false, false]
