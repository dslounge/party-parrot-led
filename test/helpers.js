import chai from 'chai';
before(() => {
  chai.config.includeStack = true;
  global.expect = chai.expect;
  global.assert = chai.assert;
});
