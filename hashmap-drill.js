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
main();