'use strict';
import multer from 'multer';
import mime from 'mime';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      const filename = file.originalname.split(".")[0];
      cb(null, filename + "-" + Date.now() + '.' + mime.getExtension(file.mimetype));
    }
  });

const uploadImg = multer({ storage: storage });

export {uploadImg}

