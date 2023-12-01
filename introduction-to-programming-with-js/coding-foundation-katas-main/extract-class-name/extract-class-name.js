function extractClassName(sessionTitle) {
  const toArr = sessionTitle.split(" ");
  console.log(toArr);
  const regExp =
    /Class\s\d{4}\s(?:Januar|Februar|Maerz|März|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember)/;
  if (sessionTitle.match(regExp)) {
    switch (
      toArr[3] // Das muss doch irgendwie einfacher gehen als jeden Case zu schreiben
    ) {
      case "Januar":
        return toArr[2] + "-01";
      case "Februar":
        return toArr[2] + "-02";
      case "März":
        return toArr[2] + "-03";
      case "Maerz":
        return toArr[2] + "-03";
      case "April":
        return toArr[2] + "-04";
      case "Mai":
        return toArr[2] + "-05";
      case "Juni":
        return toArr[2] + "-06";
      case "Juli":
        return toArr[2] + "-07";
      case "August":
        return toArr[2] + "-08";
      case "September":
        return toArr[2] + "-09";
      case "Oktober":
        return toArr[2] + "-10";
      case "November":
        return toArr[2] + "-11";
      case "Dezember":
        return toArr[2] + "-12";
    }
  } else return null;
}
