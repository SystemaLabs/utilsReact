import { _upload } from "./UPLOADS/upload";
import { _localDate, _localdateTime } from "./DATES/Date";
import { _lout, _uStore } from "./CONFIGS/api";
import { CRUD } from "./PGPD/Crud";

/**
 *
 * @param {*} type d'operation http a effectuer
 * @param {*} url url a soumettre
 * @param {*} datas donnees a envoyer
 * @param {*} callback la fonction a executer
 * @returns
 */
const _request = (type, url, datas, callback) => {
  return CRUD(type, url, datas, callback);
};

/**
 * Permet de faire l'upload des fichiers
 * @param {*} files
 */
const upload = (files, callback) => {
  return _upload(files, callback);
};

/**
 * Met à jour les informations du store
 * @param {*} item L'element a modifier
 * @param {*} newDatas Les nouvelles entrées
 */
const updateStore = (item, newDatas) => {
  _uStore(item, newDatas);
};

/**
 * Fonction permettant de deconncter un user
 * @param {*} e
 */
const logout = (e) => {
  return _lout(e);
};

/**
 *
 * @param {*} date la date a formater
 * @returns format local renvoyer
 */
const convertNormalDate = (date) => {
  return _localDate(date);
};

/**
 *
 * @param {*} date date a formater et l'heure
 * @returns le format a renvoyer pour avoire l'heure
 */
const convertDateTime = (date) => {
  return _localdateTime(date);
};

export {
  _request,
  convertDateTime,
  updateStore,
  logout,
  upload,
  convertNormalDate,
};
