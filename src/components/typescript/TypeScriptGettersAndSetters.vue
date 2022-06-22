<template>
  <div class="java-script-arrays-examples">
    <h1 class="page-title">TypeScript Getters and Setters</h1>
    <div class="code-example-block">
      <div class="code-example__title">Getters and Setters in Classes</div>
      <div class="code-example__description">
        The getters and setters allow you to control the access to the properties of a class.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import { onMounted } from 'vue';

            class BaseClass {
              protected _firstName: string;

              private _lastName: string;

              private _age: number;

              constructor(firstName: string, lastName: string, age: number) {
                this._firstName = firstName;
                this._lastName = lastName;
                this._age = age;
              }

              get firstName() {
                return this._firstName;
              }

              set firstName(theFirstName: string) {
                if (theFirstName.length > 0) {
                  this._firstName = theFirstName;
                } else {
                  console.log('Invalid first name.');
                }
              }

              get lastName() {
                return this._lastName;
              }

              set lastName(theLastName: string) {
                if (theLastName.length > 0) {
                  this._lastName = theLastName;
                } else {
                  console.log('Invalid last name.');
                }
              }

              getFullName(): string {
                return `${this.firstName} ${this.lastName}`;
              }

              get age() {
                return this._age;
              }

              set age(theAge: number) {
                if (theAge > 0 && theAge &lt;= 100) {
                  this._age = theAge;
                } else {
                  console.log('The age is invalid');
                }
              }
            }

            class ChildClass extends BaseClass {
              constructor(firstName: string, lastName: string, age: number) {
                super(firstName, lastName, age);
              }

              changeFirstNameFromChildClass() {
                this.firstName = 'Changed First Name from Child Class';
              }

              changeLastNameFromChildClass() {
                this.lastName = 'Changed Last Name from Child Class';
              }
            }

            onMounted(() => {
              console.log('TypeScript Getters and Setters');
              const NewEmployee = new ChildClass('John', 'Wick', 36);

              // // console.log(NewEmployee._firstName);
              // console.log(NewEmployee.firstName);
              // NewEmployee.firstName = 'New First Name';
              // console.log(NewEmployee.firstName);
              // // console.log(NewEmployee._firstName);
              // console.log(NewEmployee.lastName);
              // NewEmployee.lastName = 'New Last Name';
              // console.log(NewEmployee.lastName);
              // console.log(NewEmployee.getFullName());
              // NewEmployee.changeFirstNameFromChildClass();
              // NewEmployee.changeLastNameFromChildClass();
              // console.log(NewEmployee.getFullName());
            });
          </code>
        </pre>
      </div>
      <a
        href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/components/typescript/TypeScriptGettersAndSetters.vue"
        target="_blank"
        class="button code-example__button">
        Watch on GitHub
        <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'CodeWarsJavaScriptArrays',
  setup() {
    class BaseClass {
      protected _firstName: string;

      private _lastName: string;

      private _age: number;

      constructor(firstName: string, lastName: string, age: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
      }

      get firstName() {
        return this._firstName;
      }

      set firstName(theFirstName: string) {
        if (theFirstName.length > 0) {
          this._firstName = theFirstName;
        } else {
          console.log('Invalid first name.');
        }
      }

      get lastName() {
        return this._lastName;
      }

      set lastName(theLastName: string) {
        if (theLastName.length > 0) {
          this._lastName = theLastName;
        } else {
          console.log('Invalid last name.');
        }
      }

      getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
      }

      get age() {
        return this._age;
      }

      set age(theAge: number) {
        if (theAge > 0 && theAge <= 100) {
          this._age = theAge;
        } else {
          console.log('The age is invalid');
        }
      }
    }

    class ChildClass extends BaseClass {
      constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
      }

      changeFirstNameFromChildClass() {
        this.firstName = 'Changed First Name from Child Class';
      }

      changeLastNameFromChildClass() {
        this.lastName = 'Changed Last Name from Child Class';
      }
    }

    onMounted(() => {
      console.log('TypeScript Getters and Setters');
      const NewEmployee = new ChildClass('John', 'Wick', 36);

      // console.log(NewEmployee._firstName);
      console.log(NewEmployee.firstName);
      // NewEmployee.firstName = 'New First Name';
      // console.log(NewEmployee.firstName);
      // // console.log(NewEmployee._firstName);
      // console.log(NewEmployee.lastName);
      // NewEmployee.lastName = 'New Last Name';
      // console.log(NewEmployee.lastName);
      // console.log(NewEmployee.getFullName());
      // NewEmployee.changeFirstNameFromChildClass();
      // NewEmployee.changeLastNameFromChildClass();
      // console.log(NewEmployee.getFullName());
    });
  },
});
</script>
