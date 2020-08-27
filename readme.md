# RxJS PublishSubject
This is just a simple RxJS Subject with `getValue()` function

## Why this package?
RxJS BehaviorSubject is great, but it emits the newest value on every new subscription. Sometimes we don't want this effect. RxJS Subject doesn't have the effect but it also doesn't have `getValue()` function like BehaviorSubject. So, this is the solution: add `getValue()` function to Subject, name it PublishSubject.

## How to use?
```js
import {PublishSubject} from 'rxjs-publish-subject';

const ps = new PublishSubject(0);

ps.next(1);
const s1 = ps.subscribe((data) => {console.log('S1 data: ', data)});
ps.next(2);
const s2 = ps.subscribe((data) => {console.log('S2 data: ', data)});
ps.next(3);

console.log('Current value: ', ps.getValue());

// S1 data: 2
// S1 data: 3
// S2 data: 3
// Current value: 3
```

