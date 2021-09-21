import { _upload } from "./UPLOADS/upload";
import { _delete, _get, _post, _put } from "./PGPD/Crud";
import { _localDate, _localdateTime } from "./DATES/Date";
import { _lout, _uStore } from "./CONFIGS/api";

/************************************************************************************                                                                                  *
 *                                     CRUD                                         *
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
  return _delete(url, datas, callback);
}

/**
 * Permet de faire l'upload des fichiers
 * @param {*} files
 */
function upload(files, callback) {
  return _upload(files, callback);
}

/**
 * Met à jour les informations du store
 * @param {*} item L'element a modifier
 * @param {*} newDatas Les nouvelles entrées
 */
function updateStore(item, newDatas) {
  _uStore(item, newDatas);
}

/**
 * Fonction permettant de deconncter un user
 * @param {*} e
 */
const logout = (e) => {
  return _lout(e);
};

/**************************************************
 *               Dates et Heures                  *
 **************************************************/

const convertNormalDate = (date) => {
  return _localDate(date);
};

const convertDate = (date) => {
  return _localdateTime(date);
};

export {
  postRequest,
  convertDate,
  deleteRequest,
  getRequest,
  putRequest,
  updateStore,
  logout,
  upload,
  convertNormalDate,
};
