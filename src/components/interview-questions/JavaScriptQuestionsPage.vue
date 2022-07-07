<template>
  <div class="interview-questions-page">
    <div class="container">
      <h1 class="page-title">
        JavaScript Questions for Interview
      </h1>
      <el-collapse accordion
        class="interview-questions-accordion">
        <el-collapse-item name="01. What are the differences between Java and JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              01. What are the differences between Java and JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              JavaScript is a client-side scripting language
              and Java is object Oriented Programming language,
              both of them are totally different from each other.
            </p>
            <ul>
              <li>
                <b>JavaScript:</b> is a light-weighted programming language
                ("scripting language") and used to develop interactive web pages.
                It can insert dynamic text into HTML element.
                JavaScript is also known as the browser’s language.
              </li>
              <li>
                <b>Java:</b> is one of the most popular and widely used programming language.
                It is an object-oriented programming language and has a virtual machine platform
                that allows you to create compiled programs that run on nearly every platform.
                Java promised, "Write Once, Run Anywhere".
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="02. What are JavaScript Data Types?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              02. What are JavaScript Data Types?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>There are three major Datatypes in JavaScript.</p>
            <ul>
              <li>Primitive
                <ul>
                  <li>Numbers</li>
                  <li>Strings</li>
                  <li>Boolean</li>
                </ul>
              </li>
              <li>Trivial
                <ul>
                  <li>Null</li>
                  <li>Undefined</li>
                </ul>
              </li>
              <li>Composite
                <ul>
                  <li>Objects</li>
                  <li>Functions</li>
                  <li>Arrays</li>
                </ul>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="03. Which symbol is used for comments in JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              03. Which symbol is used for comments in JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              Comments are used to prevent the execution of statements.
              Comments are ignored while the compiler executes the code.
              There are two type of symbols used to represent comment in JavaScript:
            </p>
            <ul>
              <li>
                <b>Double slash:</b> is known as single line comment.
                <div class="code-example">
                  <pre>
                    <code class="language-javascript">
                      // Single line comment
                    </code>
                  </pre>
                </div>
              </li>
              <li>
                <b>Slash with Asterisk:</b> is known as multi-line comment.
                <div class="code-example">
                  <pre>
                    <code class="language-javascript">
                      /*
                      Multi-line comments
                      ...
                      */
                    </code>
                  </pre>
                </div>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="04. What would be the result of 3+2+'7'?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              04. What would be the result of 3+2+'7'?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            Here 3 and 2 behave like an integer and '7' behaves like a string.
            So 3 plus 2 will 5. Then the output will be 5+'7' = '57'.
          </div>
        </el-collapse-item>
        <el-collapse-item name="05. What is the use of isNaN function?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              05. What is the use of isNaN function?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              The "Number.isNaN()" function in JavaScript is used to determines whether
              the passed value is NaN (Not a Number) and is of the type "Number".
              In JavaScript, the value NaN is considered a type of number.
              It returns true if the argument is not a number else it returns false.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="06. What is negative infinity?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              06. What is negative infinity?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              The negative infinity in JavaScript is a constant value that is used
              to represent the lowest available value. It means that no other number
              is lesser than this value. It can be generated using a self-made
              function or by an arithmetic operation.
              JavaScript shows the NEGATIVE_INFINITY value as -Infinity.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="07. Which company developed JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              07. Which company developed JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              Netscape developed the JavaScript and created by Brenden Eich in the year of 1995.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="08. What are undeclared and undefined variables?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              08. What are undeclared and undefined variables?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <ul>
              <li>
                <b>Undefined:</b> occurs when a variable has been declared
                but has not been assigned with any value. Undefined is not a keyword.
              </li>
              <li>
                <b>Undeclared:</b> occurs when we try to access any variable which
                is not initialized or declared earlier using var or const keyword.
                If we use "typeof" operator to get the value of an undeclared variable,
                we will face the runtime error with return value as "undefined".
                The scope of the undeclared variables is always global.
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="Example Title"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              Example Title
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            Example Content
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'JavaScriptQuestionsPage',
  setup() {
    onMounted(() => {
      console.log('JavaScript Questions for Interview');
    });
  },
});
</script>
