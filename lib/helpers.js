var helpers = {};
helpers.fileExtensionType = function(filetype){
  if(filetype == 'image/jpeg'){
    return '.jpg';
  } else if(filetype == 'image/png'){
    return '.png';
  } else if(filetype == 'application/pdf'){
    return '.pdf';
  } else if(filetype == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'){
    return '.docx';
  } else if(filetype == 'application/msword'){
    return '.doc';
  } else if(filetype == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
    return '.xlsx';
  } else if(filetype == 'application/vnd.ms-excel'){
    return '.xls';
  } else if(filetype == 'text/plain'){
    return '.txt';
  } else {
    return '.dat';
  }
};
module.exports = helpers;