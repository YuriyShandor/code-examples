<template>
  <div class="java-script-arrays-examples">
    <h1 class="page-title">Encapsulation in TypeScript</h1>
    <div class="code-example-block">
      <div class="code-example__title">Encapsulation in Classes</div>
      <div class="code-example__description">
        Encapsulation is built on the idea of hiding data.
        This is where we restrict access to specific properties or methods. <br>
        <br>
        Types of properties and methods in TypeScript: <br>
        <b>Public:</b> default type of properties and methods.
        We can use and change public properties and methods
        in the class where they were declared, child class and from the instance.
        <br>
        <b>Protected:</b> for this type of properties and methods,
        we have access from that class where they were declared,
        and from child classes, but not from the instance.
        <br>
        <b>Private:</b> for this type of properties and methods,
        we have access only from that class where they were declared,
        we can't change and use these values outside this class.
        <br>
        <b>Static:</b> unlike an instance property, a static property
        is shared among all instances of a class. To access a static property,
        you use the <b>className.propertyName</b> syntax. For this type of
        properties and methods, we have access from that class where they were declared,
        and from child classes, but not from the instance.
        <br>
        <b>Readonly:</b> immutable type of properties, we can't use it for methods.
        A readonly property must be initialized as a part of the declaration or
        in the constructor of the same class. We can use and change readonly properties
        in the class where they were declared, child class and from the instance.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import { onMounted } from 'vue';

            class BaseClass {
              publicName: string;

              protected _protectedName: string;

              private _privateName: string;

              static staticName: string = 'Static Name';

              readonly readonlyName: string = 'ReadOnly Name';

              protected constructor(publicName: string, protectedName: string, privateName: string) {
                this.publicName = publicName;
                this._protectedName = protectedName;
                this._privateName = privateName;
              }

              getPublicName(): string {
                return this.publicName;
              }

              protected getProtectedName(): string {
                return this._protectedName;
              }

              private getPrivateName(): string {
                return this._privateName;
              }

              static getStaticName(): string {
                BaseClass.staticName = 'Base Class Static Name';
                return BaseClass.staticName;
              }

              getReadOnlyName(): string {
                return this.readonlyName;
              }
            }

            class ChildClass extends BaseClass {
              constructor(publicName: string, protectedName: string, privateName: string) {
                super(publicName, protectedName, privateName);
              }

              changePublicNameFromChildClass() {
                this.publicName = 'Changed Public Name from Child Class';
              }

              changeProtectedNameFromChildClass() {
                this._protectedName = 'Changed Protected Name from Child Class';
                // this.getProtectedName();
              }

              // getProtectedName(): string {
              //   return this._protectedName;
              // }

              // changePrivateName() {
              //   this._privateName = 'Changed Private Name from Child Class';
              //   this.getPrivateName();
              // }

              getStaticNameFromChildClass(): string {
                // ChildClass.staticName = 'Child Class Static Name';
                // return ChildClass.staticName;
                return ChildClass.getStaticName();
              }
            }

            onMounted(() => {
              console.log('Encapsulation in TypeScript');
              const ExampleClass = new ChildClass('Public Name', 'Protected Name', 'Private Name');

              // console.log(ExampleClass.publicName);
              // ExampleClass.publicName = 'Change Public Name from Instance';
              // console.log(ExampleClass.publicName);
              // ExampleClass.changePublicNameFromChildClass();
              // console.log(ExampleClass.getPublicName());

              // // console.log(ExampleClass._protectedName);
              // console.log(ExampleClass.getProtectedName());
              // ExampleClass.changeProtectedNameFromChildClass();
              // console.log(ExampleClass.getProtectedName());

              // // console.log(ExampleClass._privateName);
              // console.log(ExampleClass.getPrivateName());

              // console.log(ExampleClass.staticName);
              // console.log(ExampleClass.getStaticName());

              // console.log(ExampleClass.readonlyName);
              // console.log(ExampleClass.getReadOnlyName());
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
  publicName: string;

  protected _protectedName: string;

  private _privateName: string;

  static staticName: string = 'Static Name';

  readonly readonlyName: string = 'ReadOnly Name';

  protected constructor(publicName: string, protectedName: string, privateName: string) {
    this.publicName = publicName;
    this._protectedName = protectedName;
    this._privateName = privateName;
  }

  getPublicName(): string {
    return this.publicName;
  }

  protected getProtectedName(): string {
    return this._protectedName;
  }

  private getPrivateName(): string {
    return this._privateName;
  }

  static getStaticName(): string {
    BaseClass.staticName = 'Base Class Static Name';
    return BaseClass.staticName;
  }

  getReadOnlyName(): string {
    return this.readonlyName;
  }
}

class ChildClass extends BaseClass {
  constructor(publicName: string, protectedName: string, privateName: string) {
    super(publicName, protectedName, privateName);
  }

  changePublicNameFromChildClass() {
    this.publicName = 'Changed Public Name from Child Class';
  }

  changeProtectedNameFromChildClass() {
    this._protectedName = 'Changed Protected Name from Child Class';
    // this.getProtectedName();
  }

  // getProtectedName(): string {
  //   return this._protectedName;
  // }

  // changePrivateName() {
  //   this._privateName = 'Changed Private Name from Child Class';
  //   this.getPrivateName();
  // }

  getStaticNameFromChildClass(): string {
    // ChildClass.staticName = 'Child Class Static Name';
    // return ChildClass.staticName;
    return ChildClass.getStaticName();
  }
}

onMounted(() => {
  console.log('Encapsulation in TypeScript');
  const ExampleClass = new ChildClass('Public Name', 'Protected Name', 'Private Name');

  // console.log(ExampleClass.publicName);
  // ExampleClass.publicName = 'Change Public Name from Instance';
  // console.log(ExampleClass.publicName);
  // ExampleClass.changePublicNameFromChildClass();
  // console.log(ExampleClass.getPublicName());

  // // console.log(ExampleClass._protectedName);
  // console.log(ExampleClass.getProtectedName());
  // ExampleClass.changeProtectedNameFromChildClass();
  // console.log(ExampleClass.getProtectedName());

  // // console.log(ExampleClass._privateName);
  // console.log(ExampleClass.getPrivateName());

  // console.log(ExampleClass.staticName);
  // console.log(ExampleClass.getStaticName());

  // console.log(ExampleClass.readonlyName);
  // console.log(ExampleClass.getReadOnlyName());
});
</script>
