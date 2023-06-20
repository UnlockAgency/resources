function iconImageURL(url) {
  let cleanURL = url.split("?")[0];
  let extension = cleanURL.split(".")[cleanURL.split(".").length - 1].toLocaleLowerCase();
  if (["png", "gif", "jpg", "jpeg", "webp"].includes(extension)) {
    return url;
  } else if (extension == "pdf") {
    return "https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg";
  } else {
    return "https://em-content.zobj.net/thumbs/120/microsoft/319/page-facing-up_1f4c4.png";
  }
}