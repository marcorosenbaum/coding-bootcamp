"use strict";

// Return den Input bis auf die letzten 4 stellen maskiert
// Iteriere b

// return masked string
function maskify(cc) {
  if (cc.length < 5) {
    return cc;
  }
  return "#".repeat(cc.length - 4) + cc.substring(cc.length - 4);
}

console.log(maskify("12345555"));

// 4556364607935616
