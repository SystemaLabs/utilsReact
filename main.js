import Cookies from "js-cookie";
import { _localDate, _localdateTime } from "./DATES/Date";
import { _post, _post, _put, _get } from "./PGPD/Crud";

import { _upload } from "./UPLOADS/upload";

/************************************************************************************
 *                                                                                  *
 *                                     CRUD                                         *
 *                                                                                  *
 ************************************************************************************/

/**
 * Post les données
 * @param {*} url adresse
 * @param {*} payload données
 * @param {*} callback la reponse
 */

function postRequest(url, datas, callback) {
  return _post(url, datas, callback);
}

/**
 * Recuperation des données
 * @param {*} url adresse
 * @param {*} callback la reponse
 */

function getRequest(url, callback) {
  return _get(url, callback);
}

/**
 * Pour l'edition d'une requete
 * @param {*} url adresse
 * @param {*} datas données
 * @param {*} callback la reponse
 */

function putRequest(url, datas, callback) {
  return _put(url, datas, callback);
}

/**
 * Pour Suppression
 * @param {*} url adresse
 * @param {*} callback la reponse
 */

function deleteRequest(url, callback) {
  return _delete(url, callback);
}

/************************************************************************************
 *                                                                                  *
 *                                     CONFIGURATION                                *
 *                                                                                  *
 ************************************************************************************/

const getRule = () => {
  var agent = getStore() ? getStore().agent : null;
  var identity = agent ? agent.identity : null;
  var rule = agent ? agent.rule.ref : null;

  return rule;
};

/**
 * Renvoi les informations stockées dans le store
 * @returns
 */
function getStore() {
  var datas = Cookies.get("auth") ? JSON.parse(Cookies.get("auth")) : null;

  return datas;
}

/**
 * Met à jour les informations du store
 * @param {*} item L'element a modifier
 * @param {*} newDatas Les nouvelles entrées
 */
function updateStore(item, newDatas) {
  var datas = Cookies.get("auth") ? JSON.parse(Cookies.get("auth")) : null;

  datas[item] = newDatas;

  Cookies.set("auth", datas);
}

/**
 * Fonction permettant de deconncter un user
 * @param {*} e
 */
const logout = (e) => {
  e.preventDefault();
  Cookies.remove("auth");
  if (!Cookies.get("auth")) {
    window.location.assign("/");
  } else {
    Cookies.remove("auth");
  }
};

/**
 * Permet de faire l'upload des fichiers
 * @param {*} files
 */
function upload(files, callback) {
  return _upload(files, callback);
}

/**        

 * Verifie si un objet n'est pas vide
 * @param {*} object 
 * @returns 
 */

const notEmpty = (object) => {
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

/**************************************************
 *               Dates et Heures                  *
 **************************************************/
const convertNormalDate = (date) => {
  return _localdateTime(date);
};

const convertDate = (date) => {
  return _localDate(date);
};

export {
  postRequest,
  convertDate,
  deleteRequest,
  getRequest,
  putRequest,
  getStore,
  updateStore,
  logout,
  upload,
  convertNormalDate,
  getRule,
};
