
  export const checkFileSize =(obj, size) =>{ 
      let check = false; 
      let sizeinbytes = obj[0].files[0].size;
      let fSExt = new Array('Bytes', 'KB', 'MB', 'GB'); 
      let i = 0; 
      let checkSize = size;

       while (checkSize > 900) { 
           checkSize /= 1024; i++; 
        } 
        
        checkSize = (Math.round(checkSize * 100) / 100) + ' ' + fSExt[i]; var fSize = sizeinbytes; 
        if (fSize > size) { 
            alert("첨부파일은 " + checkSize + " 이하로 첨부 바랍니다."); check = false; 
    } else { check = true; } return check; 
}


