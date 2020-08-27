import {Subject} from "rxjs";

import {Subject} from 'rxjs';

export class PublishSubject<T> extends Subject<T> {
  getValue(): T
}
