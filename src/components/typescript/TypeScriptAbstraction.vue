<template>
  <div class="java-script-arrays-examples">
    <h1 class="page-title">Abstraction in TypeScript</h1>
    <div class="code-example-block">
      <div class="code-example__title">Abstract Class</div>
      <div class="code-example__description">
        A TypeScript Abstract class is a class that may have some unimplemented methods.
        These methods are called abstract methods. <br>
        We can't create an instance of an abstract class.
        But other classes can derived from abstract class and reuse the functionality of base class. <br>
        To declare an abstract class, we need to use the <b>abstract</b> keyword. <br>
        We must declare an abstract method in the child class. <br>
        We can't declare an abstract method in the not-abstract class. <br>
        The most common use of abstract classes in TypeScript is to locate some common behavior to share within related subclasses.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import { onMounted } from 'vue';

            abstract class BaseClass {
              firstName: string;

              lastName: string;

              age: number;

              protected constructor(firstName: string, lastName: string, age: number) {
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

              abstract getEmployedStatus(): boolean;
            }

            class ChildClass extends BaseClass {
              isEmployed: boolean;

              constructor(firstName: string, lastName: string, age: number, isEmployed: boolean) {
                super(firstName, lastName, age);
                this.isEmployed = isEmployed;
              }

              getEmployedStatus(): boolean {
                return this.isEmployed;
              }
            }

            onMounted(() => {
              console.log('Abstraction in TypeScript');
              const NewEmployee = new ChildClass('John', 'Wick', 36, true);

              console.log(NewEmployee.getName());
              console.log(NewEmployee.getAge());
              console.log(NewEmployee.getEmployedStatus());
            });
          </code>
        </pre>
      </div>
      <a
        href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/components/typescript/TypeScriptAbstraction.vue"
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

abstract class BaseClass {
  firstName: string;

  lastName: string;

  age: number;

  protected constructor(firstName: string, lastName: string, age: number) {
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

  abstract getEmployedStatus(): boolean;
}

class ChildClass extends BaseClass {
  isEmployed: boolean;

  constructor(firstName: string, lastName: string, age: number, isEmployed: boolean) {
    super(firstName, lastName, age);
    this.isEmployed = isEmployed;
  }

  getEmployedStatus(): boolean {
    return this.isEmployed;
  }
}

onMounted(() => {
  console.log('Abstraction in TypeScript');
  const NewEmployee = new ChildClass('John', 'Wick', 36, true);

  console.log(NewEmployee.getName());
  console.log(NewEmployee.getAge());
  console.log(NewEmployee.getEmployedStatus());
});
</script>
