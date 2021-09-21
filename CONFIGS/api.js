/*************************************
 *      Renvoi l'url de l'api         *
 **************************************/

export const _api = () => {
  return "https://api-garagekin.herokuapp.com";
};

/**
 * Renvoi les informations stockées dans le store
 * @returns
 */
export const _getStore = () => {
  var datas = localStorage.get("auth")
    ? JSON.parse(localStorage.get("auth"))
    : null;
  return datas;
};

/**
 * Verifie si un objet n'est pas vide
 * @param {*} object
 * @returns
 */
export const _notEmpty = (object) => {
  let flag = false;

  for (const value in object) {
    if (
      object[value] !== "" &&
      object[value] !== null &&
      object.hasOwnProperty(value)
    ) {
      flag = true;
    } else {
      flag = false;
      break;
    }
  }

  return flag;
};

const _getRule = () => {
  var agent = getStore() ? getStore().agent : null;
  var identity = agent ? agent.identity : null;
  var rule = agent ? agent.rule.ref : null;

  return rule;
};

export const _uStore = (item, newDatas) => {
  var datas = localStorage.get("auth")
    ? JSON.parse(localStorage.get("auth"))
    : null;
  datas[item] = newDatas;
  localStorage.set("auth", datas);
};

export const _lout = (e) => {
  e.preventDefault();
  localStorage.removeItem("auth");
  if (!localStorage.get("auth")) {
    window.location.assign("/");
  } else {
    localStorage.removeItem("auth");
  }
};
