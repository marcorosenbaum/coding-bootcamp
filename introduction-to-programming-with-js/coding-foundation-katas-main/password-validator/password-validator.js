function validatePassword(password) {
  let result = { valid: true, reasons: [] };
  const regExLetter = /[a-zA-Z]/;
  const regExNumber = /[1-9]/;
  let duplicateLetter = new Set();
  let duplicateNumber = new Set();
  let duplicateSpecialCharacter = new Set();

  if (password.length < 10) {
    // password to short
    result["valid"] = false;
    result["reasons"].push("min length");
  }

  if (!regExLetter.test(password)) {
    // no character
    result["valid"] = false;
    result["reasons"].push("no character");
  }

  if (!regExNumber.test(password)) {
    // no number
    result["valid"] = false;
    result["reasons"].push("no number");
  }

  if (
    // no special character
    !password.includes("!") &&
    !password.includes("#") &&
    !password.includes("?")
  ) {
    result["valid"] = false;
    result["reasons"].push("no special character");
  }

  for (let i = 0; i < password.length; i++) {
    // duplicate letter
    if (/[a-zA-z]/.test(password[i])) {
      if (duplicateLetter.has(password[i])) {
        result["valid"] = false;
        result["reasons"].push("duplicate character");
      }
      duplicateLetter.add(password[i]);
    }
    // duplicate number
    if (/[1-9]/.test(password[i])) {
      if (duplicateNumber.has(password[i])) {
        result["valid"] = false;
        result["reasons"].push("duplicate number");
      }
      duplicateNumber.add(password[i]);
    }
    // duplicate special character
    if (/!|\?|#/.test(password[i])) {
      if (duplicateSpecialCharacter.has(password[i])) {
        result["valid"] = false;
        result["reasons"].push("duplicate special character");
      }
      duplicateSpecialCharacter.add(password[i]);
    }

    // consecutive letter
    if (
      regExLetter.test(password[i]) === true &&
      regExLetter.test(password[i + 1]) === true
    ) {
      result["valid"] = false;
      result["reasons"].push("consecutive character");
      break;
    } else if (
      // consecutive Number
      regExNumber.test(password[i]) === true &&
      regExNumber.test(password[i + 1]) === true
    ) {
      result["valid"] = false;
      result["reasons"].push("consecutive number");
      break;
    }
  }

  return result;
}
