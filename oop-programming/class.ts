{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
    BEANS_GRAMM_PER_SHOT: number = 7;
    coffeeBeans: number = 0;
    
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
        if(this.coffeeBeans < shots * this.BEANS_GRAMM_PER_SHOT) {            
        throw new Error('NOT enough coffe beans!')
        }
        this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT;
        return {
        shots,
        hasMilk: false,
        }    
        }
    }

    const maker = new CoffeeMaker(32);
}