import SinglePage from '@/components/SinglePage.vue';

import TypeScriptExamples from '@/components/typescript/TypeScriptExamples.vue';
import TypeScriptAbstraction from '@/components/typescript/components/TypeScriptAbstraction.vue';
import TypeScriptEncapsulation from '@/components/typescript/components/TypeScriptEncapsulation.vue';
import TypeScriptInheritance from '@/components/typescript/components/TypeScriptInheritance.vue';
import TypeScriptPolymorphism from '@/components/typescript/components/TypeScriptPolymorphism.vue';

class TypeScriptRouterHelper {
  readonly TYPESCRIPT_EXAMPLES_PAGE_NAME: string = 'Typescript Examples';

  readonly TYPESCRIPT_EXAMPLES_PAGE_PATH: string = 'typescript';

  readonly TYPESCRIPT_GENERAL_EXAMPLES_PAGE_NAME: string = 'Typescript General Examples';

  readonly TYPESCRIPT_GENERAL_EXAMPLES_PAGE_PATH: string = 'general';

  readonly OOP_ABSTRACTION_EXAMPLES_PAGE_NAME: string = 'Abstraction in TypeScript';

  readonly OOP_ABSTRACTION_EXAMPLES_PAGE_PATH: string = 'abstraction';

  readonly OOP_ENCAPSULATION_EXAMPLES_PAGE_NAME: string = 'Encapsulation in TypeScript';

  readonly OOP_ENCAPSULATION_EXAMPLES_PAGE_PATH: string = 'encapsulation';

  readonly OOP_INHERITANCE_EXAMPLES_PAGE_NAME: string = 'Inheritance in TypeScript';

  readonly OOP_INHERITANCE_EXAMPLES_PAGE_PATH: string = 'inheritance';

  readonly OOP_POLYMORPHISM_EXAMPLES_PAGE_NAME: string = 'Polymorphism in TypeScript';

  readonly OOP_POLYMORPHISM_EXAMPLES_PAGE_PATH: string = 'polymorphism';

  routes() {
    return {
      name: this.TYPESCRIPT_EXAMPLES_PAGE_NAME,
      path: `/${this.TYPESCRIPT_EXAMPLES_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: this.TYPESCRIPT_GENERAL_EXAMPLES_PAGE_NAME,
          path: this.TYPESCRIPT_GENERAL_EXAMPLES_PAGE_PATH,
          component: TypeScriptExamples,
        },
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
      ],
    };
  }

  menuItems() {
    return {
      title: this.TYPESCRIPT_EXAMPLES_PAGE_NAME,
      link: `/${this.TYPESCRIPT_EXAMPLES_PAGE_PATH}`,
      subItems: [
        {
          title: this.TYPESCRIPT_GENERAL_EXAMPLES_PAGE_NAME,
          link: `/${this.TYPESCRIPT_EXAMPLES_PAGE_PATH}/${this.TYPESCRIPT_GENERAL_EXAMPLES_PAGE_PATH}`,
        },
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
      ],
    };
  }
}

export default new TypeScriptRouterHelper();
