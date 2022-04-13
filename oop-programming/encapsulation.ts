{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    //public
    //private
    //protected

    class CoffeeMaker {
    	private static BEANS_GRAMM_PER_SHOT: number = 7;
    	private coffeeBeans: number = 0;
    
    	constructor(coffeeBeans: number) {
      	this.coffeeBeans = coffeeBeans; 
    	}

			static makeMachine(coffeeBeans:number): CoffeeMaker {
				return new CoffeeMaker(coffeeBeans);
			}

			fillCoffeeBeans(beans:number) {
				if(beans < 0) {
					throw new Error('value for beans should be greater than 0');
				}
				this.coffeeBeans += beans;
			}

   		makeCoffee(shots: number): CoffeeCup {
        if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {            
        	throw new Error('NOT enough coffe beans!')
        }
        this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
        	return {
        		shots,
        		hasMilk: false,
        	}    
        }
    }

    const maker = new CoffeeMaker(32);		
    console.log(maker);	
}