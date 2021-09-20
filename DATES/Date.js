exports._localDate = (date) => {
  //Conversion du timestamp en milliseconds
  var myDate = new Date(date),
    jour = function () {
      return parseInt(myDate.getDate()) < 10
        ? "0" + myDate.getDate()
        : myDate.getDate();
    },
    mois = function () {
      return myDate.getMonth() + 1 < 10
        ? "0" + (myDate.getMonth() + 1)
        : myDate.getMonth() + 1;
    };
  (heure = function () {
    return myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours();
  }),
    (minute = function () {
      return myDate.getMinutes() < 10
        ? "0" + myDate.getMinutes()
        : myDate.getMinutes();
    });

  return myDate.getFullYear() + "-" + mois() + "-" + jour();
};

exports._localdateTime = (date) => {
  //Conversion du timestamp en milliseconds
  var myDate = new Date(date),
    jour = function () {
      return parseInt(myDate.getDate()) < 10
        ? "0" + myDate.getDate()
        : myDate.getDate();
    },
    mois = function () {
      //return myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1
      var month = myDate.getMonth() + 1;

      //La date par rapport à sa nomination
      switch (month) {
        case 1:
          return "janv.";

        case 2:
          return "févr.";

        case 3:
          return "mars";

        case 4:
          return "avril";

        case 5:
          return "mai";

        case 6:
          return "juin";

        case 7:
          return "juill.";

        case 8:
          return "août";

        case 9:
          return "sept.";

        case 10:
          return "oct.";

        case 11:
          return "nov.";

        case 12:
          return "déc.";

        default:
          return null;
      }
    },
    heure = function () {
      return myDate.getHours() < 10
        ? "0" + myDate.getHours()
        : myDate.getHours();
    },
    minute = function () {
      return myDate.getMinutes() < 10
        ? "0" + myDate.getMinutes()
        : myDate.getMinutes();
    };

  return (
    jour() +
    " " +
    mois() +
    " " +
    myDate.getFullYear() +
    " à " +
    heure() +
    ":" +
    minute() +
    "'"
  );
};
