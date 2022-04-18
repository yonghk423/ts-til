{
    /**
     * JavaScript : 자바스크립트는 크게 원시타입과 Object 타입으로 구성되어 있다.
     * Primitive(원시타입): number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array
     */

    //타입스크립트에서는 변수를 선언할 때 조금 더 엄격하게 타입을 정의한다.
    
    // number
    const num:number = 7;

    // string
    const strt:string = 'hello';

    // boolean
    const boal: boolean = false;

    // undefined : 값이 있는지 없는지 값이 결정 되지 않은 상태이다.
    let nmae: undefined // 이렇게는 거의 사용하지 않는다.
    let age : number | undefined; //보통 이렇게 많이 사용 된다.
    age = undefined;
    age = 18;
    
    // null : 조금 더 명확하게 비어있다고 명시해준다.
    let person = null;
    let person2: string | null; //보통 이렇게 많이 사용 된다.

    // unknown : 어떤 종류의 타입이 담길지 알수가 없는 상황이다. 가능하면 사용하지 않는 것이 좋다.
    let notSure: unknown = 0;
    /**
    * 지양하는 것이 좋은 타입이지만 unknown 타입이 있는 이유는 바로 타입스크립트는 타입이 없는 
    * 자바스크립트와 연동해서 쓸 수 있기 때문이다.
    * 타입스크립트에서 자바스크립트 라이브러리를 이용하는 경우에
    * 자바스크립트에서 리턴하는 타입을 모를 수가 있다.
    * 그럴 때에 unknown을 쑬 수가 있다. 하지만 웬만하면 unknown은 사용하지 않는 것이 좋다.
    */
    
    // any : 어떠한 것이든 모두 담을 수 있는 변수이다. 자바스크립트에서 타입스크릡트로 전환하는 과정에서 사용을 하는 경우가 있지만 지양하는 것이 좋다.
    let anything: any = 0;

    // void : 아무런 값도 리턴하지 않을 때 사용한다. 하지만 생략은 가능하다. 변수에 할당하여 사용하는 경우는 극히 드물다.
    function print(): void {
        console.log('hello');
        return
    }

    // never : 함수에서 절대 리턴 되지 않을 때 그것을 명시하는 경우에 사용한다.
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
        while (true) {}
    }

    // object : object 타입은 원시타입을 제외한 모든 타입을 할당 할수가 있다.
    let obj: object;
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({name: 'yonghee'});
    acceptSomeObject({ toy: 'toy'});

}