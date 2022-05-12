{
  //Array 배열의 타입을 표현한는 방법!
  const fruits: string[] = ['🌺', '🌼'];
  const scroes: Array<number> = [1, 3, 4];

  function printArray(fruits: readonly string[]) {
    // fruits.push
  }
  /*만약 주어진 데이터를 변경하거나 업데이트를 할 수 없는 경우가 있다면?
  함수 내부에서 변경하지 않도록 하기 위해서 타입으로 보장할 수 있는 방법이 있다.
  readonly라고 붙여 주는 방법이다.
  이제부터는 fruits는 변경이 불가능하며 데이터만 읽을 수 있게 된다.
  push를 통해 데이터를 넣으려 하면 에러가 생기게 된다. 
  오브젝트의 불변성을 보장한다는 것은 굉장히 중요하다. 따라서 readonly가 굉장히 많이 사용 되기 때문에
  일관성 있게 const fruits: string[] = ['🌺', '🌼']; 이 방식으로 배열의 타입을 지정해 주는 것이 더 좋다.
  */

}
