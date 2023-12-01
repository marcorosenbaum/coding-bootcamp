// Beispiellösung von ALex

/* function filterApiData(apiData, mandatoryKeys) {
  return apiData.filter((obj) => {
    // checken ob jeder mandatoryKey vorhanden ist.
    return mandatoryKeys.every((key) => obj.hasOwnProperty(key));
  });
} */

// Beispiellösung Volker
function filterApiData(apiData, mandatoryKeys) {
  let keyObjects = [];
  for (let item of apiData) {
    let keyCount = 0;
    for (let mandatoryKey of mandatoryKeys) {
      for (let key in item) {
        if (key === mandatoryKey) {
          keyCount++;
        }
      }
      if (keyCount === mandatoryKeys.length) {
        keyObjects.push(item);
      }
    }
  }
  return keyObjects;
}
