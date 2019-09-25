/*
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: './src/server/public/files/',
    limits: {
        fileSize: 1000000 * 90
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

module.exports.upload = multer({ storage: storage });

module.exports.uploadFiles = async (req, res, next) => {
    res.end();
};

module.exports.getFile = async (req, res, next) => {
    res.download(path.join(__dirname, '../../public/files/', req.params.name));
};*/
