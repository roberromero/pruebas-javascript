/*Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. Let’s get started!*/




/*WHALE TALK CONVERTER*/

let input= 'hula and turtles';
input= input.toLowerCase();
const vowels= ["a", "e", "i", "o", "u"];
resultArray=[];

for (let i=0; i<input.length ;i++){
    for(let j=0; j<vowels.length; j++){
 
        if(input[i]===vowels[j]){
            if(input[i]==='u' || input[i]==='e'){
                    resultArray.push(input[i], vowels[j]);
            }else{
                    resultArray.push(vowels[j]);
            }
      }
    }
}

let resultString= resultArray.join();//resultString= resultArray.toString();

resultString= resultString.replace(/,/g," ");


resultString= resultString.toUpperCase();

console.log(resultString);
console.log(typeof resultString);