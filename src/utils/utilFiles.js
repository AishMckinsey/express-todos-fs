const fs = require('fs');
const path = require('path');

const promisfyReadFile = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) { reject(error); } else { resolve(data.toString().split('\r\n')); }
  });
});

const promisifyWriteData = (filePath, data) => new Promise((resolve, reject) => {
  fs.writeFile(filePath, data, (error, data) => {
    if (error) { reject(error); } else { resolve(data); }
  });
});

const promisifyAppendFile = (filepath, data) => new Promise((resolve, reject) => {
  fs.appendFile(filepath, data, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  });
});

module.exports = {
  promisfyReadFile,
  promisifyWriteData,
  promisifyAppendFile,
};
