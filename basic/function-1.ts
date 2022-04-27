{
    //JavaScript 
    function jsADD(num1, num2) {
        return num1 + num2;
        /*코드가 짧기 때문에 어떤 걸  하는지 파악할 수 있지만
        함수가 긴 경우에는 어떤 값을 내가 전달해야지 될지 잘 모를 때도 있고
        어떤 값을 리턴한다는 것인지 모를 때도 있습니다.
        또한 number값을 전달해야하는데 엉뚱하게 문자열이 들어가게 돼어 잘못된 작동을 할 수도 있습니다.*/
    }

    //TypeScript 
    function add(num1:number, num2:number): number {
        return num1 + num2;
        // 타입스크립트를 통해 타입을 지정하면 자바스크립트의 아쉬운 점들을 해소할 수 있습니다.
    }


    //JavaScript 
    function jsFetchNum(id) {
        //code ...
        //code ...
        //code ... 코드가 굉장히 많아지면 밑에 부분까지 내려가며 다 확인해야 하는 번거로움이 생긴다.
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    //TypeScript
    function tsFetchNum(id: string): Promise<number> {
        //code ...
        //code ...
        //code ... 
                return new Promise((resolve, reject) => {
            resolve(100);
        })
    }
    //이렇게 타입스크립트 어떤 타입의 인자를 받고 어떤 타입의 데이터를 리터할지 명시하면 빠르게 예상이 가능하며
    //다른 타입이 들어가 에러가 나오는 경우를 사전에 방지할 수 있다.
}