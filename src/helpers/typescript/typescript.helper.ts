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
}

export default new TypeScriptHelper();
