'use strict';

const HashMap = require('./hash-map');

function main(){
  const lor = new HashMap();

  lor.set('Hobbit','Bilbo');
  lor.set('Hobbit','Frodo');
  console.log(lor.get('Hobbit'));
  console.log(lor.length);
  lor.set('Wizard', 'Gandalf');
  lor.set('Human', 'Aragon');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  console.log(lor.get('Maiar'));
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');
  console.log(lor);
  console.log(lor._slots[2]);
}
// main();

/* 
input: acecarr
output: true
instance of one unique character
loop through string and add to hash table (key= string[i], value = i)
a,0
when duplicate key happens, value is overwritten
total of original string compared to total of hash (works besides non palindrome double letters)
*/

function palindrome(str){
  const palHash = new HashMap();
  let total = 0;
 
  for(let i=0; i<str.length; i++){
    let character = str[i];
    try{
      let value = palHash.get(character);
      value++;
      palHash.set(character, value);
    }
    catch (error){
      palHash.set(character, 1);
    }
  }
  
  for(let i=0; i<str.length; i++){
    let check = palHash.get(str[i]);
    if(check ===1){
      total++;
    }
  }

  if(total > 1){
    return false;
  }
  return true;

}

// palindrome('acecarr');


/* anagram grouping 
input: ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']
output: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]

things we know: 
each grouping consists of words that contain the same letters (same number implied)
will use hash table 
will have to look at each character of each word within the array 

starter word 
divide characters into hash table
from that hash check for keys that match 
if they do, pair, 
else put in a separate array 


create a total for each word as they go through 
hash each individual character, return hash value 
add them 

compare to other words 
if same group 
else move on 

//
loop over individual words, assign letters an index 

*/

function anagramGroup(arr){
  let charHash = new HashMap;
  let results = [];
 
  for(const word of arr) {
    let charSorted = word.split('').sort().join('');
    try{
      let group = charHash.get(charSorted);
      group.push(word);
    } 
    catch (error){
      results.push(charSorted);
      charHash.set(charSorted, [word]);
    }
  }
  
  let newArray = results.map(group =>{
    return charHash.get(group);
  });

  return newArray;

}

console.log(anagramGroup(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));