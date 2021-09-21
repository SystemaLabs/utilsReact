import axios from "axios";
import { _notEmpty } from "../CONFIGS/api";
import { _api, _getStore } from("../CONFIGS/api");

const _delete = (url, callback) => {
  var token = _getStore() && _getStore().token ? _getStore().token : null;
  var config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  axios.delete(`${_api()}/${url}`, token ? config : null).then(
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
}

const _get = (url, callback) => {
  var { token } = _getStore();
  var config = {
    headers: {
      Authorization: token ? "Bearer " + token : null,
    },
  };

  axios.get(`${_api()}/${url}`, config).then(
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
}

const _post = (url, datas, callback) => {
  if (_notEmpty(datas)) {
    var token = _getStore() && _getStore().token ? _getStore().token : null;
    var config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios.post(`${_api()}/${url}`, datas, token ? config : null).then(
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
}

const _put = (url, datas, callback) => {
  if (_notEmpty(datas)) {
    var token = _getStore() && _getStore().token ? _getStore().token : null;
    var config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios.patch(`${_api()}/${url}`, datas, token ? config : null).then(
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
}

export { _delete, _post, _put, _get };
