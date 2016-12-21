const util = require('util');
const colors = require('colors-mini');

module.exports = function confirm(message, chose, callback) {
  if (!message) {
    throw new Error('message required!');
  };
  if (typeof chose === 'undefined') {
    chose = ['yes', 'no'];
  } else if (typeof chose === 'function') {
    callback = chose;
    chose = ['yes', 'no'];
  }

  if (!util.isArray(chose) || (chose && chose.length !== 2)) {
    throw new Error('chose is not a right array');
  };

  process.stdin.setEncoding('utf8');
  process.stdin.resume();

  const ask = colors.red('?');
  const msg = [ask];

  const promise = new Promise((resolve, reject) => {
    msg.push(colors.grey(message));
    msg.push(colors.yellow('<' + chose.join('|') + '>') + ' : ');

    process.stdout.write(msg.join(' '));
    process.stdin.once('data', function(data) {
      const ok = data.trim() === chose[0];

      if (ok) {
        resolve(ok);
      } else {
        reject(ok);
      }
      process.stdin.pause();
    });
  });

  if (typeof callback === 'function') {
    promise
      .then(ok => {
        callback.call(this, ok);
      })
      .catch(ok => {
        callback.call(this, ok);
      });
  } else {
    return promise;
  }
};
