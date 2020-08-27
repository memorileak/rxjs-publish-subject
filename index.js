import {Subject} from 'rxjs';

export class PublishSubject extends Subject {
  constructor(initialValue, ...params) {
    super(...params);
    this.__value__ = initialValue;
  }

  getValue() {
    return this.__value__;
  }

  next(value, ...params) {
    this.__value__ = value;
    super.next(value);
  }
}
