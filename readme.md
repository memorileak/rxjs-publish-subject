# RxJS simple Subject with `getValue()` function

RxJS BehaviorSubject is great, but it emits the newest value on every new subscription. Sometimes we don't want this effect. RxJS Subject doesn't have the effect but it also doesn't have `getValue()` function like BehaviorSubject. So, this is the solution: add `getValue()` function to Subject, name it PublishSubject.
