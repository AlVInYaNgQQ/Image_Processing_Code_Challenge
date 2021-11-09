const async = require('async');
const CLI = require('../component/CLI');

async.autoInject({
  getHomeworkImage: (cb) => {
    CLI.cmd('curl "127.0.0.1:8080/homework.cgi?image_url=https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf" -o _homework.jpg', () => {
      return cb(null, 'OK');
    });
  },
  getMyCatImage: (cb) => {
    CLI.cmd('curl "127.0.0.1:8080/cat.jpg" -o _cat.jpg', () => {
      return cb(null, 'OK');
    });
  }
});