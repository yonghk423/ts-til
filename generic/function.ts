{
    function checkNotNullBad(arg: number | null):number {
        if(arg === null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    /*여기서 문제점은 숫자만 확인 할 수 있다. 그러면 타입별로 함수를 다 만들어야 할까라는 의문점이 생긴다
    하지만 any를 사용하는 것은 지양해야 한다 이유는 타입이 보장되지 않기 때문이다.
    해결 방법으로 제네릭이 있다.
    */
    const result = checkNotNullBad(123);
    console.log(result);
    checkNotNullBad(null);
    
    //제네릭을 이용하면 어떤 타입이든 받을 수 있으며 제네릭을 사용할 때 타입이 결정되기 때문에 타입을 더 보장 받을 수 있다.
    function checkNotNull<T>(arg: T | null) : T {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    const number = checkNotNull(123);
    const boal: boolean = checkNotNull(true);
}
