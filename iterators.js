/*
.forEach()

.filter()
*/


//.forEach()
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(item=> console.log(`I want to eat a ${item}`));


//.map()
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage= animals.map(word => {
return word[0];
});

console.log(secretMessage.join(''));
//-----
const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers= bigNumbers.map(function(x){
  return x/100;
})
console.log(bigNumbers);
console.log(smallNumbers);

//.filter()
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const numPeque= randomNumbers.filter(numbers =>
numbers <250);
console.log(numPeque);
//---
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(
palabra => palabra.length > 7);