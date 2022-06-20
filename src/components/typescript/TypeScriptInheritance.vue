<template>
  <div class="java-script-arrays-examples">
    <h1 class="page-title">Inheritance in TypeScript</h1>
    <div class="code-example-block">
      <div class="code-example__title">Inheritance in Classes</div>
      <div class="code-example__description">
        A class can reuse the properties and methods of another class.
        This is called inheritance in TypeScript.
        <br>
        The class which inherits properties and methods is called the child class.
        And the class whose properties and methods are inherited is known
        as the parent class. These names come from the nature that children
        inherit genes from parents.
        <br>
        Inheritance allows you to reuse the functionality
        of an existing class without rewriting it.
        <br>
        We should use the <b>extends</b> keyword to allow a class to inherit from another class.
        We can use <b>super()</b> in the constructor of the child class
        to call the constructor of the parent class. Also, we can use the
        <b>super.methodInParentClass()</b> syntax to invoke the <b>methodInParentClass()</b>
        in the method of the child class.
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
              isEmployed: boolean;

              constructor(firstName: string, lastName: string, age: number, isEmployed: boolean) {
                super(firstName, lastName, age);
                this.isEmployed = isEmployed;
              }

              getEmployedStatus(): boolean {
                return this.isEmployed;
              }

              getNameAndAge(): string {
                return `${super.getName()} is ${super.getAge()} old`;
              }
            }

            onMounted(() => {
              console.log('Inheritance in TypeScript');
              const NewEmployee = new ChildClass('John', 'Wick', 36, true);

              console.log(NewEmployee.getName());
              console.log(NewEmployee.getAge());
              console.log(NewEmployee.getEmployedStatus());
              console.log(NewEmployee.getNameAndAge());
            });
          </code>
        </pre>
      </div>
      <a
        href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/components/typescript/TypeScriptInheritance.vue"
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
  isEmployed: boolean;

  constructor(firstName: string, lastName: string, age: number, isEmployed: boolean) {
    super(firstName, lastName, age);
    this.isEmployed = isEmployed;
  }

  getEmployedStatus(): boolean {
    return this.isEmployed;
  }

  getAge(): number {
    return this.age * 2;
  }

  getNameAndAge(): string {
    return `${this.getName()} is ${super.getAge()} old`;
  }
}

onMounted(() => {
  console.log('Inheritance in TypeScript');
  const NewEmployee = new ChildClass('John', 'Wick', 36, true);

  console.log(NewEmployee.getName());
  console.log(NewEmployee.getAge());
  console.log(NewEmployee.getEmployedStatus());
  console.log(NewEmployee.getNameAndAge());
});
</script>
