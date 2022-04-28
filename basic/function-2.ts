{
    //Optional paramerter 
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('steve', undefined); 
    //정확이 인수대로 입력해줘야 하며 타입도 정확이 맞춰저야 합니다.
    //하지만 항상 인수대로 출력하는것이 아닌 
    //이름만 출력하고 싶은 경우도 있을 것이다. --> 이럴때 사용하는 것이 Optional paramerter이다.
    //원하는 인자에 ?를 사용함으로서 전달받지도 받을수도 있게 된다.

    //Default parpmeter 
    function printMessage(message: string = 'default message') {
        console.log(message);
    } 
    printMessage();
    //defalut 값으로 직접 parameter 값을 지정해줄수있다. 
    //이렇게 하게 되면 함수를 호출할 때 값을 넣지 않아도 default message가 출력이 된다.

    //Rest parameter 
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    //인자의 개수가 정해지지 않은 상황에서 Rest parameter를 이용하면 간편하게 배열 형태로 받아 올 수 있습니다.
    //개수에 상관없이 동일한 타입의 데이터를 함수 인자로 전달할때 사용하면 유용하다.
    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3));
    console.log(addNumbers(1,2,3,4));
}
