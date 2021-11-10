var sharp = require('sharp');
var fs = require('fs');
var http = require('http');
var url = require('url');

var request = require('request').defaults({ encoding: null });

var _buff = Buffer.alloc(0);

http.createServer(function(req, res) {
  let _pathname = url.parse(req.url, true).pathname;
  let _query = url.parse(req.url, true).query;
  if (req.method == 'GET') {
    if (_pathname == '/homework.cgi') {
      // console.log(_pathname);
      let _url = _query.image_url || 'https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf';
      // console.log(_query.image_url);
      // console.log(_url);
      if(_url) {
        request.get(`${_url}`, function (_err, _res, _body) {
          // request.get('https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf', function (_err, _res, _body) {
          sharp(Buffer.from(_body))
          .flip(true)
          .flop(true)
          .toBuffer((error, buffer, info) => {
            // console.log(info);
            if (info && info.format == 'jpeg') {
              res.writeHead(200, {'Content-Type': 'image/jpeg'});
              res.end(buffer);
            } else {
              res.writeHead(404, {'Content-Type': 'text/plain'});
              return res.end('file type error.');
            };
          });
        });
      } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        return res.end('not found.');
      };
      return;
    } else {
      var filename = __dirname + _pathname;
    
      if (!fs.existsSync(filename)) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        return res.end('error');
      };
      var readStream = fs.createReadStream(filename);
    
      readStream.on('data', (chunk) => {
        _buff = Buffer.concat([_buff, chunk]);
      });
      readStream.on('end', () => {
        sharp(Buffer.from(_buff))
        .flip(true)
        .flop(true)
        .toBuffer((error, buffer, info) => {
          // readStream.pipe(res);
          res.end(buffer);
        });
      });
    };
  };
}).listen(8080);