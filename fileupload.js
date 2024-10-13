
const multer = require("multer");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
       
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      
        const extension = file.originalname.split(".")[1];
       

      const uniqueSuffix = Date.now()+"."+extension;
      cb(null, uniqueSuffix)
    }
  })


  module.exports = storage;