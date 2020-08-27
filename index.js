const {Subject} = require('rxjs');

function PublishSubject(initialValue, ...params) {
  Subject.call(this, ...params);
  this.__value__ = initialValue;
}

PublishSubject.prototype = Object.create(Subject.prototype);

PublishSubject.prototype.getValue = function getValue() {
  return this.__value__;
}

const originNext = PublishSubject.prototype.next;
PublishSubject.prototype.next = function next(value, ...params) {
  this.__value__ = value;
  originNext.call(this, value, ...params);
}

module.exports = {PublishSubject};
