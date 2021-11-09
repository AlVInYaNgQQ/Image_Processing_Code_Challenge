const shell = require('child_process').exec;

module.exports = CLI = {
  cmd(_cmd = {}, CLICB = null) {
    let _tmp = _cmd;
    // console.log('cmd', _tmp);
    shell(String(_tmp), {encoding : 'buffer', maxBuffer : 1024 * 1024 * 10}, (err, stdout, stderr) => {
      if (err) {
        // console.log('message', String(stderr), ' end');
        if (CLICB) return CLICB({error : true, msg : 'error. ' + err.message, result : {stdout : String(stdout), stderr : String(err), cmd : _tmp }});
        // if (CLICB) return CLICB(cbType(true, 'timeout' + err.message, {stdout : String(stdout), stderr : String(err), cmd : _tmp }));
        // console.error(`shell error: ${err}`);
      } else {
        if (CLICB) return CLICB({error : false, msg : 'This is command.', result : {stdout : String(stdout), stderr : String(stderr), cmd : _tmp }});
        // if (CLICB) return CLICB(cbType(false, 'This is command.', {stdout : String(stdout), stderr : String(stderr), cmd : _tmp }));
      };
    });
  },
};
