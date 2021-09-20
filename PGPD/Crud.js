import axios from "axios";
const { _api } = require("../CONFIGS/api");

exports._delete = (url, callback) => {
  var token = getStore() && getStore().token ? getStore().token : null;
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
};

exports._get = (url, callback) => {
  var { token } = getStore();
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
};

exports._post = (url, datas, callback) => {
  if (notEmpty(datas)) {
    var token = getStore() && getStore().token ? getStore().token : null;
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
};

exports._put = (url, datas, callback) => {
  if (notEmpty(datas)) {
    var token = getStore() && getStore().token ? getStore().token : null;
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
};
