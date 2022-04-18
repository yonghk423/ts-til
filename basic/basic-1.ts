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
    age = 1
    
    // null : 조금 더 명확하게 비어있다고 명시해준다.
    let person = null;
    let person2: string | null; //보통 이렇게 많이 사용 된다.
}