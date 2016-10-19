var chai = require('chai'),
  spies = require('chai-spies');

chai.use(spies);

var expect = chai.expect,
  lazyfun = require('../lazyfun');

describe('lazyfun', function () {
  it('should be a function', function () {
    expect(lazyfun).to.be.a('function');
  });

  it('should invoke callback only once', function () {
    var callback = chai.spy();

    var func = lazyfun(callback);

    expect(callback).to.not.have.been.called();

    func();

    expect(callback).to.have.been.called.once;
  });

  it('should invoke callback with passed parameter', function () {
    var callback = chai.spy();

    var func = lazyfun(callback, null, 'foo', 'bar');
    func();

    expect(callback).to.have.been.called.with('foo', 'bar');
  });

  it('should invoke callback after passed timeout', function (done) {
    var callback = chai.spy();

    lazyfun(callback, 10);

    setTimeout(function () {
      expect(callback).to.have.been.called.once;

      done();
    }, 11);
  });

  it('should not invoke callback before passed timeout', function (done) {
    var callback = chai.spy();

    lazyfun(callback, 10);

    setTimeout(function () {
      expect(callback).to.not.have.been.called();

      done();
    }, 6);
  });

  it('should invoke callback immediately', function () {
    var callback = chai.spy();

    lazyfun(callback, -1);

    expect(callback).to.have.been.called.once;
  });

  it('should invoke function returned from callback', function () {
    var callbackResult = chai.spy();

    var func = lazyfun(function () {
      return callbackResult;
    }, -1);
    func();

    expect(callbackResult).to.have.been.called.once;
  });

  it('should invoke function returned from callback with passed parameters', function () {
    var callbackResult = chai.spy();

    var func = lazyfun(function () {
      return callbackResult;
    }, -1);
    func('foo', 'bar');

    expect(callbackResult).to.have.been.called.with('foo', 'bar');
  });
});

