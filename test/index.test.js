const confirm = require('../src/');

describe('confirm-promise', function() {
  it('it work with promises type yes', function(done) {
    confirm('are you ok').then(ok => {
      expect(ok).toBe(true);
      done();
    });
    process.stdin.emit('data', 'yes');
  });

  it('it work with promises type no', function(done) {
    confirm('are you ok').catch(ok => {
      expect(ok).toBe(false);
      done();
    });
    process.stdin.emit('data', 'no');
  });

  it('it work with callback type yes', function(done) {
    confirm('are you ok', function(ok) {
      expect(ok).toBe(true);
      done();
    });
    process.stdin.emit('data', 'yes');
  });

  it('it work with callback type no', function(done) {
    confirm('are you ok', function(ok) {
      expect(ok).toBe(false);
      done();
    });
    process.stdin.emit('data', 'no');
  });

  it('custom choes type y', function(done) {
    confirm('are you ok', ['y', 'n'], function(ok) {
      expect(ok).toBe(true);
      done();
    });
    process.stdin.emit('data', 'y');
  });

  it('custom choes type n', function(done) {
    confirm('are you ok', ['y', 'n'], function(ok) {
      expect(ok).toBe(false);
      done();
    });
    process.stdin.emit('data', 'n');
  });

  it('validate message', function() {
    expect(() => {
      confirm();
    }).toThrowError('message required!');
  });

  it('validate chose', function() {
    expect(() => {
      confirm('foo', ['y']);
    }).toThrowError('chose is not a right array');
  });

  it('it work with async/await', async() => {
    try {
      await confirm();
    } catch (err) {
      expect(err.message).toEqual('message required!');
    }
  });
});
