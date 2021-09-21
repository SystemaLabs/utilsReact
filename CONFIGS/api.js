import Cookies from "js-cookie";

/*************************************
 *      Renvoi l'url de l'api         *
 **************************************/

function _api() {
  return "https://api-garagekin.herokuapp.com";
}

/**
 * Renvoi les informations stockées dans le store
 * @returns
 */
const _getStore = () => {
  var datas = Cookies.get("auth") ? JSON.parse(Cookies.get("auth")) : null;
  return datas;
};

/**        

 * Verifie si un objet n'est pas vide
 * @param {*} object 
 * @returns 
 */

const _notEmpty = (object) => {
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

const _uStore = (item, newDatas) => {
  var datas = Cookies.get("auth") ? JSON.parse(Cookies.get("auth")) : null;
  datas[item] = newDatas;
  Cookies.set("auth", datas);
};

const _lout = (e) => {
  e.preventDefault();
  Cookies.remove("auth");
  if (!Cookies.get("auth")) {
    window.location.assign("/");
  } else {
    Cookies.remove("auth");
  }
};

export { _api, _getStore, _uStore, _lout, _getRule, _notEmpty };
