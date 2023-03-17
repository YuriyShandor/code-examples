import SinglePage from '@/components/pages/SinglePage.vue';

import TypeScriptAbstraction from '@/components/typescript/TypeScriptAbstraction.vue';
import TypeScriptEncapsulation from '@/components/typescript/TypeScriptEncapsulation.vue';
import TypeScriptInheritance from '@/components/typescript/TypeScriptInheritance.vue';
import TypeScriptPolymorphism from '@/components/typescript/TypeScriptPolymorphism.vue';
import TypeScriptGettersAndSetters from '@/components/typescript/TypeScriptGettersAndSetters.vue';
import TypeScriptInterface from '@/components/typescript/TypeScriptInterface.vue';

class OOPInTypeScriptRouterHelper {
  readonly TYPESCRIPT_EXAMPLES_PAGE_NAME: string = 'OOP in Typescript';

  readonly TYPESCRIPT_EXAMPLES_PAGE_PATH: string = 'typescript';

  readonly OOP_ABSTRACTION_EXAMPLES_PAGE_NAME: string = 'Abstraction in TypeScript';

  readonly OOP_ABSTRACTION_EXAMPLES_PAGE_PATH: string = 'abstraction';

  readonly OOP_ENCAPSULATION_EXAMPLES_PAGE_NAME: string = 'Encapsulation in TypeScript';

  readonly OOP_ENCAPSULATION_EXAMPLES_PAGE_PATH: string = 'encapsulation';

  readonly OOP_INHERITANCE_EXAMPLES_PAGE_NAME: string = 'Inheritance in TypeScript';

  readonly OOP_INHERITANCE_EXAMPLES_PAGE_PATH: string = 'inheritance';

  readonly OOP_POLYMORPHISM_EXAMPLES_PAGE_NAME: string = 'Polymorphism in TypeScript';

  readonly OOP_POLYMORPHISM_EXAMPLES_PAGE_PATH: string = 'polymorphism';

  readonly GETTERS_AND_SETTERS_EXAMPLES_PAGE_NAME: string = 'Getters and Setters in TypeScript';

  readonly GETTERS_AND_SETTERS_EXAMPLES_PAGE_PATH: string = 'getters-and-setters';

  readonly INTERFACES_EXAMPLES_PAGE_NAME: string = 'Interfaces in TypeScript';

  readonly INTERFACES_EXAMPLES_PAGE_PATH: string = 'interfaces';

  routes() {
    return {
      name: this.TYPESCRIPT_EXAMPLES_PAGE_NAME,
      path: `/${this.TYPESCRIPT_EXAMPLES_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: this.OOP_ABSTRACTION_EXAMPLES_PAGE_NAME,
          path: this.OOP_ABSTRACTION_EXAMPLES_PAGE_PATH,
          component: TypeScriptAbstraction,
        },
        {
          name: this.OOP_ENCAPSULATION_EXAMPLES_PAGE_NAME,
          path: this.OOP_ENCAPSULATION_EXAMPLES_PAGE_PATH,
          component: TypeScriptEncapsulation,
        },
        {
          name: this.OOP_INHERITANCE_EXAMPLES_PAGE_NAME,
          path: this.OOP_INHERITANCE_EXAMPLES_PAGE_PATH,
          component: TypeScriptInheritance,
        },
        {
          name: this.OOP_POLYMORPHISM_EXAMPLES_PAGE_NAME,
          path: this.OOP_POLYMORPHISM_EXAMPLES_PAGE_PATH,
          component: TypeScriptPolymorphism,
        },
        {
          name: this.GETTERS_AND_SETTERS_EXAMPLES_PAGE_NAME,
          path: this.GETTERS_AND_SETTERS_EXAMPLES_PAGE_PATH,
          component: TypeScriptGettersAndSetters,
        },
        {
          name: this.INTERFACES_EXAMPLES_PAGE_NAME,
          path: this.INTERFACES_EXAMPLES_PAGE_PATH,
          component: TypeScriptInterface,
        },
      ],
    };
  }

  menuItems() {
    return {
      title: this.TYPESCRIPT_EXAMPLES_PAGE_NAME,
      link: `/${this.TYPESCRIPT_EXAMPLES_PAGE_PATH}`,
      subItems: [
        {
          title: this.OOP_ABSTRACTION_EXAMPLES_PAGE_NAME,
          link: `/${this.TYPESCRIPT_EXAMPLES_PAGE_PATH}/${this.OOP_ABSTRACTION_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: this.OOP_ENCAPSULATION_EXAMPLES_PAGE_NAME,
          link: `/${this.TYPESCRIPT_EXAMPLES_PAGE_PATH}/${this.OOP_ENCAPSULATION_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: this.OOP_INHERITANCE_EXAMPLES_PAGE_NAME,
          link: `/${this.TYPESCRIPT_EXAMPLES_PAGE_PATH}/${this.OOP_INHERITANCE_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: this.OOP_POLYMORPHISM_EXAMPLES_PAGE_NAME,
          link: `/${this.TYPESCRIPT_EXAMPLES_PAGE_PATH}/${this.OOP_POLYMORPHISM_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: this.GETTERS_AND_SETTERS_EXAMPLES_PAGE_NAME,
          link: `/${this.TYPESCRIPT_EXAMPLES_PAGE_PATH}/${this.GETTERS_AND_SETTERS_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: this.INTERFACES_EXAMPLES_PAGE_NAME,
          link: `/${this.TYPESCRIPT_EXAMPLES_PAGE_PATH}/${this.INTERFACES_EXAMPLES_PAGE_PATH}`,
        },
      ],
    };
  }
}

export default new OOPInTypeScriptRouterHelper();
