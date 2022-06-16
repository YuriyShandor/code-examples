<template>
  <div class="java-script-arrays-examples">
    <h1 class="page-title">Polymorphism in TypeScript</h1>
    <div class="code-example-block">
      <div class="code-example__title">Polymorphism in Classes</div>
      <div class="code-example__description">
        Polymorphism is the ability to create a class with more than one form.
        Or in other words, classes have the same methods but different implementations.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import { onMounted } from 'vue';

            class BaseClass {
              firstName: string;

              lastName: string;

              age: number;

              constructor(firstName: string, lastName: string, age: number) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.age = age;
              }

              getName(): string {
                return `${this.firstName} ${this.lastName}`;
              }

              getAge(): number {
                return this.age;
              }
            }

            class ChildClass extends BaseClass {
              constructor(firstName: string, lastName: string, age: number) {
                super(firstName, lastName, age);
              }

              getName(): string {
                return `${this.firstName} ${this.lastName} from the child class`;
              }

              getAge(): number {
                return this.age * 100;
              }
            }

            onMounted(() => {
              console.log('Polymorphism in TypeScript');
              const NewEmployee = new ChildClass('John', 'Wick', 36);

              console.log(NewEmployee.getName());
              console.log(NewEmployee.getAge());
            });
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
  firstName: string;

  lastName: string;

  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(): number {
    return this.age;
  }
}

class ChildClass extends BaseClass {
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
  }

  getName(): string {
    return `${this.firstName} ${this.lastName} from the child class`;
  }

  getAge(): number {
    return this.age * 100;
  }
}

onMounted(() => {
  console.log('Polymorphism in TypeScript');
  const NewEmployee = new ChildClass('John', 'Wick', 36);

  console.log(NewEmployee.getName());
  console.log(NewEmployee.getAge());
});
</script>
