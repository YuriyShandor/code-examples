<template>
  <div class="java-script-arrays-examples">
    <h1 class="page-title">Encapsulation in TypeScript</h1>
    <div class="code-example-block">
      <div class="code-example__title">Encapsulation in Classes</div>
      <div class="code-example__description">
        Encapsulation is built on the idea of hiding data. This is where we restrict access to specific properties or methods. <br>
        <br>
        Types of properties and methods in TypeScript: <br>
        <b>Public:</b> default type of properties and methods.
        We can use and change public values in the child class and from the instance.
        <br>
        <b>Protected:</b> for this type of values, we have access from that class where they were declared, and from child classes, but not from the instance.
        <br>
        <b>Private:</b> for this type of values, we have access only from that class where they were declared, we can't change and use these values outside this class.
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
  publicName: string;

  protected _protectedName: string;

  private _privateName: string;

  protected constructor(publicName: string, protectedName: string, privateName: string) {
    this.publicName = publicName;
    this._protectedName = protectedName;
    this._privateName = privateName;
  }

  getPublicName(): string {
    return this.publicName;
  }

  getProtectedName(): string {
    return this._protectedName;
  }

  getPrivateName(): string {
    return this._privateName;
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
  }

  // changePrivateName() {
  //   this._privateName = 'Changed Private Name from Child Class';
  // }
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

  // console.log(ExampleClass._privateName);
  console.log(ExampleClass.getPrivateName());
});
</script>
