import helloWorld from './example01';
import { pi, phi, absolute, pi as π } from './example02';

class TypeScriptHelper {
  showDifferentVars() {
    helloWorld();
    console.log(pi);
    const absPhi = absolute(phi);
    console.log(absPhi);
    console.log(π);
  }

  implementClass(): void {
    class Car {
      name: string;

      protected userName: string = 'User Name';

      constructor(name: string) {
        this.name = name;
      }

      run(speed:number = 0) {
        console.log(this.userName);
        console.log(`A ${this.name} from is moving at ${speed} mph!`);
      }
    }

    class Mercedes extends Car {
      year: number;

      constructor(name: string, year: number) {
        super(name);
        this.year = year;
      }

      created() {
        console.log('created', this.userName);
        console.log(`A ${this.name} was created in ${this.year}`);
      }

      run(speed = 150) {
        console.log('A Mercedes started');
        super.run(speed);
      }
    }

    class Honda extends Car {
      country: string;

      constructor(name: string, country: string) {
        super(name);
        this.country = country;
      }

      countryOfOrigin() {
        console.log(`A country of origin for ${this.name} is ${this.country}`);
      }

      run(speed = 100) {
        console.log('A Honda started');
        super.run(speed);
      }
    }
    const mercObj = new Mercedes('Mercedes-Benz GLA', 2000);
    const hondaObj = new Honda('Honda City', 'Japan');

    mercObj.run();
    mercObj.created();
    // mercObj.userName;
    hondaObj.run();
    hondaObj.countryOfOrigin();
  }
}

export default new TypeScriptHelper();
