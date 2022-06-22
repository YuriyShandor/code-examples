<template>
  <div class="java-script-arrays-examples">
    <h1 class="page-title">Encapsulation in TypeScript</h1>
    <div class="code-example-block">
      <div class="code-example__title">Public Properties and Methods</div>
      <div class="code-example__description">
        <b>Public:</b> default type of properties and methods.
        We can use and change public properties and methods
        in the class where they were declared, child class and from the instance.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import { defineComponent, onMounted } from 'vue';

            export default defineComponent({
              name: 'TypeScriptEncapsulation',
              setup() {
                class BaseClass {
                  publicName: string;

                  protected constructor(publicName: string) {
                    this.publicName = publicName;
                  }

                  getPublicName(): string {
                    return this.publicName;
                  }
                }

                class ChildClass extends BaseClass {
                  constructor(publicName: string) {
                    super(publicName);
                  }

                  changePublicNameFromChildClass() {
                    this.publicName = 'Changed Public Name from Child Class';
                  }
                }

                onMounted(() => {
                  console.log('Public Properties and Methods');
                  const ExampleClass = new ChildClass('Public Name');

                  console.log(ExampleClass.publicName);
                  ExampleClass.publicName = 'Change Public Name from Instance';
                  console.log(ExampleClass.publicName);
                  ExampleClass.changePublicNameFromChildClass();
                  console.log(ExampleClass.getPublicName());
                });
              },
            });
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-block">
      <div class="code-example__title">Protected Properties and Methods</div>
      <div class="code-example__description">
        <b>Protected:</b> for this type of properties and methods,
        we have access from that class where they were declared,
        and from child classes, but not from the instance.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import { defineComponent, onMounted } from 'vue';

            export default defineComponent({
              name: 'TypeScriptEncapsulation',
              setup() {
                class BaseClass {
                  protected _protectedName: string;

                  constructor(protectedName: string) {
                    this._protectedName = protectedName;
                  }

                  getProtectedName(): string {
                    return this._protectedName;
                  }
                }

                class ChildClass extends BaseClass {
                  protected _baseClassInstance: (BaseClass | null);

                  constructor(protectedName: string, instance: (BaseClass | null)) {
                    super(protectedName);
                    this._baseClassInstance = instance;
                  }

                  getProtectedName(): string {
                    return this._protectedName;
                  }

                  changeProtectedNameFromChildClass(name: string) {
                    this._protectedName = name;
                  }

                  changePropertyInBaseClass(name: string) {
                    this._baseClassInstance._protectedName = name;
                  }
                }

                onMounted(() => {
                  console.log('Protected Properties and Methods');
                  const ExampleClass = new ChildClass('Protected Name', null);

                  console.log(ExampleClass._protectedName);
                  console.log(ExampleClass.getProtectedName());
                  ExampleClass.changeProtectedNameFromChildClass('Changed Protected Name from Child Class');
                  console.log(ExampleClass.getProtectedName());

                  const BaseClassExample = new BaseClass('BaseClassExample');
                  const ChildClassExample = new ChildClass('ChildClassExample', BaseClassExample);

                  ChildClassExample.changePropertyInBaseClass('aaa');
                  console.log(BaseClassExample.getProtectedName());
                });
              },
            });
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-block">
      <div class="code-example__title">Private Properties and Methods</div>
      <div class="code-example__description">
        <b>Private:</b> for this type of properties and methods,
        we have access only from that class where they were declared,
        we can't change and use these values outside this class.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import { defineComponent, onMounted } from 'vue';

            export default defineComponent({
              name: 'TypeScriptEncapsulation',
              setup() {
                class BaseClass {
                  private _privateName: string;

                  constructor(privateName: string) {
                    this._privateName = privateName;
                  }

                  getPrivateName(): string {
                    return this._privateName;
                  }
                }

                class ChildClass extends BaseClass {
                  private _baseClassInstance: (BaseClass | null);

                  constructor(privateName: string, instance: (BaseClass | null)) {
                    super(privateName);
                    this._baseClassInstance = instance;
                  }

                  changePrivateNameFromChildClass(name: string) {
                    this._privateName = name;
                  }

                  changePropertyInBaseClass(name: string) {
                    this._baseClassInstance._privateName = name;
                  }
                }

                onMounted(() => {
                  console.log('Private Properties and Methods');
                  const ExampleClass = new ChildClass('Private Name', null);

                  console.log(ExampleClass._privateName);
                  ExampleClass.changePrivateNameFromChildClass('Changed Private Name from Child Class');
                  console.log(ExampleClass.getPrivateName());

                  const BaseClassExample = new BaseClass('BaseClassExample');
                  const ChildClassExample = new ChildClass('ChildClassExample', BaseClassExample);

                  ChildClassExample.changePropertyInBaseClass('aaaa');
                  console.log(BaseClassExample.getPrivateName());
                });
              },
            });
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Example with bank account.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import { defineComponent, onMounted } from 'vue';

            export default defineComponent({
              name: 'TypeScriptEncapsulation',
              setup() {
                class BankAccount {
                  private _accountNumber: number;

                  private _moneyAmount: number = 0;

                  constructor(accountNumber: number) {
                    if (accountNumber.toString().length >= 10 && accountNumber.toString().length &lt;= 20) {
                      this._accountNumber = accountNumber;
                    } else {
                      throw new Error('The length of the account number should be from 10 to 20');
                    }
                  }

                  getAccountNumber() {
                    return this._accountNumber;
                  }

                  getMoneyAmount() {
                    return this._moneyAmount;
                  }

                  increaseMoneyAmount(moneyAmount: number) {
                    if (moneyAmount > 1000000) {
                      throw new Error('You can increase more than 1000000$');
                    } else {
                      this._moneyAmount += moneyAmount;
                    }
                  }

                  decreaseMoneyAmount(moneyAmount: number) {
                    if (moneyAmount >= this._moneyAmount) {
                      throw new Error('You have no enough money');
                    } else {
                      this._moneyAmount -= moneyAmount;
                    }
                  }
                }

                class Customer extends BankAccount {
                  firstName: string;

                  lastName: string;

                  constructor(accountNumber: number, firstName: string, lastName: string) {
                    super(accountNumber);
                    this.firstName = firstName;
                    this.lastName = lastName;
                  }

                  getCustomerAccountNumber() {
                    return `The account number of ${this.firstName} ${this.lastName} is --- ${this.getAccountNumber()}`;
                  }

                  getCustomerMoneyAmount() {
                    return `The money amount of ${this.firstName} ${this.lastName} is --- ${this.getMoneyAmount()}`;
                  }
                }

                onMounted(() => {
                  console.log('Private Properties and Methods');

                  const NewCustomer = new Customer(1111111111, 'John', 'now');
                  console.log(NewCustomer.getCustomerAccountNumber());
                  NewCustomer.increaseMoneyAmount(1000);
                  console.log(NewCustomer.getCustomerMoneyAmount());
                  NewCustomer.decreaseMoneyAmount(250);
                  console.log(NewCustomer.getCustomerMoneyAmount());
                });
              },
            });
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-block">
      <div class="code-example__title">Static Properties and Methods</div>
      <div class="code-example__description">
        <b>Static:</b> unlike an instance property, a static property
        is shared among all instances of a class. To access a static property,
        you use the <b>className.propertyName</b> syntax. For this type of
        properties and methods, we have access from that class where they were declared,
        and from child classes, but not from the instance.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import { defineComponent, onMounted } from 'vue';

            export default defineComponent({
              name: 'TypeScriptEncapsulation',
              setup() {
                class BaseClass {
                  static staticName: string = 'Static Name';

                  getStaticName(): string {
                    return BaseClass.staticName;
                  }
                }

                class ChildClass extends BaseClass {
                  changeStaticNameFromChildClass(name) {
                    BaseClass.staticName = name;
                  }

                  getStaticNameFromChildClass(): string {
                    return BaseClass.staticName;
                  }
                }

                onMounted(() => {
                  console.log('Static Properties and Methods');
                  const ExampleClass = new ChildClass();

                  console.log(ExampleClass.staticName);
                  console.log(ExampleClass.getStaticName());
                  ExampleClass.changeStaticNameFromChildClass('Child Class Static Name');
                  console.log(ExampleClass.getStaticName());
                });
              },
            });
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-block">
      <div class="code-example__title">Readonly Properties and Methods</div>
      <div class="code-example__description">
        <b>Readonly:</b> immutable type of properties, we can't use it for methods.
        A readonly property must be initialized as a part of the declaration or
        in the constructor of the same class. We can use and change readonly properties
        in the class where they were declared, child class and from the instance.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import { defineComponent, onMounted } from 'vue';

            export default defineComponent({
              name: 'TypeScriptEncapsulation',
              setup() {
                class BaseClass {
                  readonly readonlyName: string = 'ReadOnly Name';

                  getReadOnlyName(): string {
                    return this.readonlyName;
                  }
                }

                class ChildClass extends BaseClass {
                  getReadOnlyNameFromChildClass() {
                    return this.readonlyName;
                  }

                  changeReadOnlyNameFromChildClass(name) {
                    this.readonlyName = name;
                  }
                }

                onMounted(() => {
                  console.log('Readonly Properties and Methods');
                  const ExampleClass = new ChildClass();

                  console.log(ExampleClass.readonlyName);
                  console.log(ExampleClass.getReadOnlyName());
                  ExampleClass.changeReadOnlyNameFromChildClass('New ReadOnly Name');
                  console.log(ExampleClass.getReadOnlyName());
                });
              },
            });
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'TypeScriptEncapsulation',
  setup() {
    class BankAccount {
      private _accountNumber: number;

      private _moneyAmount: number = 0;

      constructor(accountNumber: number) {
        if (accountNumber.toString().length >= 10 && accountNumber.toString().length <= 20) {
          this._accountNumber = accountNumber;
        } else {
          throw new Error('The length of the account number should be from 10 to 20');
        }
      }

      getAccountNumber() {
        return this._accountNumber;
      }

      getMoneyAmount() {
        return this._moneyAmount;
      }

      increaseMoneyAmount(moneyAmount: number) {
        if (moneyAmount > 1000000) {
          throw new Error('You can increase more than 1000000$');
        } else {
          this._moneyAmount += moneyAmount;
        }
      }

      decreaseMoneyAmount(moneyAmount: number) {
        if (moneyAmount >= this._moneyAmount) {
          throw new Error('You have no enough money');
        } else {
          this._moneyAmount -= moneyAmount;
        }
      }
    }

    class Customer extends BankAccount {
      firstName: string;

      lastName: string;

      constructor(accountNumber: number, firstName: string, lastName: string) {
        super(accountNumber);
        this.firstName = firstName;
        this.lastName = lastName;
      }

      getCustomerAccountNumber() {
        return `The account number of ${this.firstName} ${this.lastName} is --- ${this.getAccountNumber()}`;
      }

      getCustomerMoneyAmount() {
        return `The money amount of ${this.firstName} ${this.lastName} is --- ${this.getMoneyAmount()}`;
      }
    }

    onMounted(() => {
      console.log('Private Properties and Methods');

      const NewCustomer = new Customer(1111111111, 'John', 'now');
      console.log(NewCustomer.getCustomerAccountNumber());
      NewCustomer.increaseMoneyAmount(1000);
      console.log(NewCustomer.getCustomerMoneyAmount());
      NewCustomer.decreaseMoneyAmount(250);
      console.log(NewCustomer.getCustomerMoneyAmount());
    });
  },
});
</script>
