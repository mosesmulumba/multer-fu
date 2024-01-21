import multer from 'multer';
// const multer = require('multer');

// set up the storage for upload files
const Storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString()+'_'+file.originalname);
    }
});

const upload = multer({storage: Storage});

export {upload};