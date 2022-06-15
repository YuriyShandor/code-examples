<template>
  <div class="java-script-arrays-examples">
    <h1 class="page-title">Encapsulation in TypeScript</h1>
    <div class="code-example-block">
      <div class="code-example__title">Encapsulation in Classes</div>
      <div class="code-example__description">
        Encapsulation is built on the idea of hiding data. This is where we restrict access to specific properties or methods. <br>
        <br>
        <b>Private:</b> private members can only be accessed within the class it was defined in. Outside clients as well as inheriting classes are unauthorized.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            // code here
          </code>
        </pre>
      </div>
      <a
        href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/components/typescript/components/TypeScriptInterface.vue"
        target="_blank"
        class="button code-example__button">
        Watch on GitHub
        <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

class BaseClass {
  private _firstName: string;

  protected _lastName: string;

  age: number;

  protected constructor(firstName: string, lastName: string, age: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this.age = age;
  }

  private getName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  getAge(): number {
    return this.age;
  }
}

class ChildClass extends BaseClass {
  isEmployed: boolean;

  constructor(firstName: string, lastName: string, age: number, isEmployed: boolean) {
    super(firstName, lastName, age);
    this.isEmployed = isEmployed;
  }

  getFirstName(): string {
    this._firstName = 'gfdfgdf';
    return this._firstName;
  }

  getEmployedStatus(): boolean {
    return this.isEmployed;
  }
}

onMounted(() => {
  console.log('Encapsulation in TypeScript');
  const NewEmployee = new ChildClass('John', 'Snow', 33, true);

  console.log(NewEmployee._firstName);
  console.log(NewEmployee.getName());
  console.log(NewEmployee.getAge());
  console.log(NewEmployee.getEmployedStatus());
});
</script>
