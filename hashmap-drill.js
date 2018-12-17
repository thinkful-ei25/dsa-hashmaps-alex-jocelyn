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

palindrome('acecarr');