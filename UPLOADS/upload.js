exports._upload = (file, callback) => {
  var allowedTypes = ["png", "jpg", "jpeg", "svg", "tif"],
    imgType;

  console.log("upload");
  for (var i = 0; i < files.length; i++) {
    imgType = files[i].name.split(".");
    imgType = imgType[imgType.length - 1].toLowerCase();

    if (allowedTypes.indexOf(imgType) !== -1) {
      console.log(files);

      var formData = new FormData(),
        file;
      //reader,
      //sortie = false;

      if (files.length > 0) {
        file = files[0];
        //sortie = true;
      }

      formData.append("file", file, file.name);
      //var url = `${getURLApi()}/api/request/upload`;
      var url = `${getURLApi()}/api/upload-file/file`;

      axios.post(url, formData).then((res) => {
        // then print response status
        if (res.data.state) {
          callback(true, res.data);
        } else {
          callback(false, res.data.data);
        }
      });
    } else {
      callback(false, "L'extension choisie est invalide !");
    }
  }
};
