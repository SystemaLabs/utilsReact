import axios from "axios";
import { _notEmpty } from "../CONFIGS/api";
import { _api, _getStore } from("../CONFIGS/api");


/***
 * TOUTES LES OPERATIONS CRUD
 */

const CRUD = (type = null, url = null, datas=null, callback = null) => {
  switch (type) {

    case type == "post":
        if (_notEmpty(datas)) {
          var token = _getStore() && _getStore().token ? _getStore().token : null;
          var config = {
            headers: {
              Authorization: "Bearer " + token,
            },
          };
      
          axios.type(`${_api()}/${url}`, datas, token ? config : null).then(
            (res) => {
              if (res.data.state) {
                callback(true, res.data);
              } else {
                callback(false, res.data.message);
              }
            },
            (err) => {
              callback(
                false,
                "Une erreur technique est survenue, reessayer plus tard"
              );
            }
          );
        } else {
          callback(false, "Veuillez renseigner toutes les informations");
        }
        break;

    case type == "get":
        var { token } = _getStore();
          var config = {
            headers: {
              Authorization: token ? "Bearer " + token : null,
            },
          };

          axios.type(`${_api()}/${url}`, config).then(
            (res) => {
              if (res.data.state) {
                callback(true, res.data.data);
              } else {
                callback(false, res.data.message);
              }
            },
            (err) => {
              callback(false, "Une erreur technique est survenue, reessayer plus tard");
            }
          );
        break;

    case type == "put":
        if (_notEmpty(datas)) {
          var token = _getStore() && _getStore().token ? _getStore().token : null;
          var config = {
            headers: {
              Authorization: "Bearer " + token,
            },
          };
      
          axios.type(`${_api()}/${url}`, datas, token ? config : null).then(
            (res) => {
              if (res.data.state) {
                callback(true, res.data);
              } else {
                callback(false, res.data.message);
              }
            },
            (err) => {
              callback(
                false,
                "Une erreur technique est survenue, reessayer plus tard"
              );
            }
          );
        } else {
          callback(false, "Veuillez renseigner toutes les informations");
        };
      break;
  
    case type == "delete":
      var token = _getStore() && _getStore().token ? _getStore().token : null;
          var config = {
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        
          axios.type(`${_api()}/${url}`, token ? config : null).then(
            (res) => {
              if (res.data.state) {
                callback(true, res.data);
              } else {
                callback(false, res.data.message);
              }
            },
            (err) => {
              callback(false, "Une erreur technique est survenue, reessayer plus tard");
            }
          );
      break;

      default:
        return null;
  }
}



export { CRUD };
