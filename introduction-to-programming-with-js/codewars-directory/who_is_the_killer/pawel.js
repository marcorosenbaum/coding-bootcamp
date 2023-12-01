//  *=*=*=* tested and passed solution - mady by pawel *=*=*=* //

const suspectInfoObj = {
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};

const dead = ["Lucy", "Kyle"]; // dead people

function killer(suspectInfo, dead) {
  suspectInfo = Object.entries(suspectInfo);
  for (let index = 0; index < suspectInfo.length; index++) {
    const [
      currentSuspectName, // Peter
      currentSuspectContacts, // []
    ] = suspectInfo[index];
    let isKiller = currentSuspectContacts.length >= dead.length;

    if (!isKiller) {
      continue;
    }

    for (let index2 = 0; index2 < dead.length; index2++) {
      // ["Lucy", "Kyle"]
      const currentDead = dead[index2]; // Kyle
      // Annahme: currentSuspectName ist der Killer
      // Überprüfe die nächste tote Person, und schaue ob currentSuspectName immer noch der Killer ist
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
