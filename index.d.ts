import {Subject} from 'rxjs';

export class PublishSubject<T> extends Subject<T> {
  constructor(initValue: T)
  getValue(): T
}
