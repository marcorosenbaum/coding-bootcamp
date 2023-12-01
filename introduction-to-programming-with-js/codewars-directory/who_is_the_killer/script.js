"use strict";

// Given is a Person and all the people he saw
// if the person saw all the dead people, he is the killer

// 1) create a function that checks if the person saw all dead people
// 2) turn onject to array
// 3) loop over array and check if the nested array contains all dead people
// 4) if the nested array contains all dead people, return the first level array as the killer

const suspectInfoObj = {
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};

const dead = ["Jacob", "Bill"]; // dead people

function killer(suspectInfo, dead) {
  suspectInfo = Object.entries(suspectInfo); // Object to array

  for (let index = 0; index < suspectInfo.length; index++) {
    const [currentSuspectName, currentSuspectContacts] = suspectInfo[index];

    let isKiller = currentSuspectContacts.length >= dead.length; // isKiller = true
    if (!isKiller) {
      // if isKiller = not true / false // If suspect had no contacts: continue
      continue;
    }

    for (let index2 = 0; index2 < dead.length; index2++) {
      //iterate through suspect contacts
      const currentDead = dead[index2];
      isKiller = isKiller && currentSuspectContacts.includes(currentDead);
      if (!isKiller) {
        break;
      }
    }
    if (isKiller) {
      return currentSuspectName;
    }
  }
}
// end

console.log(killer(suspectInfo, dead));

console.log("==== TEST ====");
console.log(suspectInfo);
console.log(dead);

// Error: suspect is already killer when he saw one of the dead person
