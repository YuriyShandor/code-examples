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
                <b>JavaScript</b> is a lightweight programming language("scripting language")
                and is used to make web pages interactive. It can insert dynamic text
                into HTML. JavaScript is also known as the browser’s language.
                JavaScript(JS) is not similar or related to Java. Both the languages
                have a C-like syntax and are widely used in client-side and server-side
                Web applications, but there are few similarities only.
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
        <el-collapse-item name="09. Write a JavaScript code for adding new elements dynamically?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              09. Write a JavaScript code for adding new elements dynamically?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <div class="code-example">
              <pre>
                <code class="language-javascript">
                  const createElement = () => {
                    const element = document.createElement('div');
                    element.classList.add('created-element');
                    element.textContent = 'New Created Element';
                    document.body.appendChild(element);
                  };
                  createElement();
                </code>
              </pre>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="10. What are global variables? How are these variable declared and what are the problems associated with them?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              10. What are global variables? How are these variable declared
              and what are the problems associated with them?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              In contrast, global variables are the variables that are defined outside of functions.
              These variables have a global scope, so they can be used by any function
              without passing them to the function as parameters.
            </p>
            <p>
              It is difficult to debug and test the code that relies on global variables.
              Also, we can change this variable in some functions,
              and it will change it in all places where we use it.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="11. What do you mean by NULL in JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              11. What do you mean by NULL in JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              The NULL value represents the no value or no object.
              It can be called as empty value/object.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="12. How to delete property specific value?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              12. How to delete property specific value?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              The delete keyword is used to delete the whole property and all the values at once like
            </p>
            <div class="code-example">
              <pre>
                <code class="language-javascript">
                  const someObj = {
                    propertyOne: 'Value One',
                    propertyTwo: 'Value Two',
                    propertyThree: 'Value Three',
                  };
                  delete someObj.propertyTwo;
                  console.log(someObj);
                </code>
              </pre>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="13. What is a prompt box?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              13. What is a prompt box?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              It is used to display a dialog box with an optional
              message prompting the user to input some text.
              It is often used if the user wants to input a value
              before entering a page. It returns a string containing
              the text entered by the user, or null.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="14. What is 'this' keyword in JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              14. What is "this" keyword in JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              Functions in JavaScript are essential objects.
              Like objects, they can be assigned to variables,
              passed to other functions and returned from functions.
              And much like objects, they have their own properties.
            </p>
            <p>
              Keyword "this" stores the current execution context of the JavaScript program.
              Thus, when it used inside a function, the value of "this"
              will change depending on how the function is defined,
              how it is invoked and the default execution context.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="15. Explain the working of timers in JavaScript? Also elucidate the drawbacks of using the timer, if any?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              15. Explain the working of timers in JavaScript?
              Also elucidate the drawbacks of using the timer, if any?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              Timer is used to execute some specific code at specific time
              or any small amount of code in repetition to do that you need
              to use the function <b>setTimout</b>, <b>setInterval</b> and <b>clearInterval</b>.
              If JavaScript code set the timer of 2 minutes and when the times up
              then the page display an alert message "times up".
              The <b>setTimeout()</b> method calls a function or evaluates an
              expression after a specified number of milliseconds.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="16. How can you submit a form using JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              16. How can you submit a form using JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              You can use <b>document.form[0].submit()</b> method to submit the form in JavaScript.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="17. Does JavaScript support automatic type conversion?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              17. Does JavaScript support automatic type conversion?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>Yes, JavaScript supports automatic type conversion.</p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="18. What are all the looping structures in JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              18. What are all the looping structures in JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <ul>
              <li>
                <b>while loop</b>: is a control flow statement that allows code
                to be executed repeatedly based on a given Boolean condition.
                The while loop can be thought of as a repeating if statement.
              </li>
              <li>
                <b>for loop</b>: provides a concise way of writing the loop structure.
                Unlike a while loop, for statement consumes the initialization,
                condition and increment/decrement in one line thereby providing a shorter,
                easy to debug structure of looping.
              </li>
              <li>
                <b>do while loop</b>: is similar to while loop with the only difference
                that it checks the condition after executing the statements,
                and therefore is an example of Exit Control Loop.
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="19. How can style/class of an element be changed?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              19. How can style/class of an element be changed?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              To change the style/class of an element there are two possible ways.
            </p>
            <div class="code-example">
              <pre>
                <code class="language-javascript">
                  document.querySelector('body').style.fontSize = '16px';
                  document.querySelector('body').className = 'example-class';
                </code>
              </pre>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="20. How to convert the string of any base to integer in JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              20. How to convert the string of any base to integer in JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              In JavaScript, <b>parseInt()</b> function is used to convert
              the string to an integer. This function returns an integer of base
              which is specified in second argument of <b>parseInt()</b> function.
              The <b>parseInt()</b> function returns Nan (not a number) when
              the string doesn't contain number.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="21. Explain how to detect the operating system on the client machine?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              21. Explain how to detect the operating system on the client machine?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              To detect the operating system on the client machine, one can simply use
              <b>navigator.appVersion</b> or navigator.userAgent property. The Navigator
              appVersion property is a read-only property and it returns the string that
              represents the version information of the browser.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="22. What are the types of Pop up boxes available in JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              22. What are the types of Pop up boxes available in JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>There are three types of pop boxes available in JavaScript.</p>
            <ul>
              <li>Alert</li>
              <li>Confirm</li>
              <li>Prompt</li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="23. What is the difference between an alert box and a confirmation box?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              23. What is the difference between an alert box and a confirmation box?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              An alert box will display only one button which is the OK button.
              It is used to inform the user about the agreement has to agree.
              But a Confirmation box displays two buttons OK and cancel,
              where the user can decide to agree or not.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="24. What is the disadvantage of using innerHTML in JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              24. What is the disadvantage of using innerHTML in JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              There are lots of disadvantages of using the innerHTML in JavaScript
              like the content will replace everywhere. If you use += like
              "innerHTML = innerHTML + html" still the old content is replaced by HTML.
              It preserves event handlers attached to any DOM elements.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="25. What are JavaScript Cookies?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              25. What are JavaScript Cookies?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            Cookies are small files that are stored on a user’s computer.
            They are used to hold a modest amount of data specific to
            a particular client and website and can be accessed either
            by the web server or by the client computer.
            When cookies were invented, they were basically little documents
            containing information about you and your preferences.
            For instance, when you select your language in which you want
            to view your website, the website would save the information in
            a document called a cookie on your computer, and the next time
            when you visit the website, it would be able to read a cookie saved earlier.
          </div>
        </el-collapse-item>
        <el-collapse-item name="26. How to create a cookie using JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              26. How to create a cookie using JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              To create a cookie by using JavaScript you just need
              to assign a string value to the document.cookie object.
            </p>
            <div class="code-example">
              <pre>
                <code class="language-javascript">
                  document.cookie = 'key1 = value1; expires = date';
                </code>
              </pre>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="27. How to read a cookie using JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              How to read a cookie using JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              The value of the document.cookie is used to create a cookie.
              Whenever you want to access the cookie you can use the string.
              The document.cookie string keep a list of name = value pairs
              separated by semicolons, where name is the name of a cookie
              and the value is its string value.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="28. How to delete a cookie using JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              28. How to delete a cookie using JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              Deleting cookie is much easier than creating or reading a cookie,
              you just need to set the expires = "past time" and make sure one
              thing defines the right cookie path unless few will not allow
              you to delete the cookie.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="29. What are escape characters and escape() function?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              29. What are escape characters and escape() function?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <ul>
              <li>
                <b>Escape character</b>: is required when you want to work with
                some special characters like single and double quotes, apostrophes
                and ampersands. All the special character plays an important role
                in JavaScript, to ignore that or to print that special character,
                you can use the escape character <b>backslash "\"</b>.
                It will normally ignores and behave like a normal character.
              </li>
              <li>
                <b>escape() function</b>: takes a string as a parameter and encodes
                it so that it can be transmitted to any computer in any network
                which supports ASCII characters.
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="30. Whether JavaScript has a concept level scope?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              30. Whether JavaScript has a concept level scope?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              JavaScript is not concept level scope, its declared the
              variable inside any function has scope inside the function.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="31. Which keywords are used to handle exceptions?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              31. Which keywords are used to handle exceptions?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              When executing JavaScript code, errors will almost definitely occur.
              These errors can occur due to the fault from the programmer's side due
              to the wrong input or even if there is a problem with the logic of the program.
              But all errors can be solved by using the below commands.
            </p>
            <ul>
              <li>
                The <b>try</b> statement lets you test a block of code to check for errors.
              </li>
              <li>
                The <b>catch</b> statement lets you handle the error if any are present.
              </li>
              <li>
                The <b>throw</b> statement lets you make your own errors.
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="32. What is the use of the blur function?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              32. What is the use of the blur function?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              It is used to remove focus from the selected element.
              This method starts the blur event or it can be attached
              a function to run when a blur event occurs.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="33. What is the unshift method in JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              33. What is the unshift method in JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              It is used to insert elements in the front of an array.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="34. What is the 'Strict' mode in JavaScript and how can it be enabled?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              34. What is the "Strict" mode in JavaScript and how can it be enabled?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              Strict Mode is a new feature in ECMAScript 5 that allows you to place
              a program or a function in a “strict” operating context.
              This strict context prevents certain actions from being taken
              and throws more exceptions. The statement "use strict" instructs the browser
              to use the Strict mode, which is a reduced and safer feature set of JavaScript.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="35. How to get the status of a CheckBox?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              35. How to get the status of a CheckBox?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              The DOM Input Checkbox Property is used to set or return
              the checked status of a checkbox field. This property is
              used to reflect the HTML Checked attribute.
            </p>
            <div class="code-example">
              <pre>
                <code class="language-javascript">
                  document.getElementById('element').checked;
                </code>
              </pre>
            </div>
            <p>If the CheckBox is checked then it returns True.</p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="36. How to explain closures in JavaScript and when to use it?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              36. How to explain closures in JavaScript and when to use it?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              The closure is created when a child functions to keep
              the environment of the parent's scope even after the
              parent's function has already executed. The Closure
              is a locally declared variable related to a function.
              The closure will provide better control over
              the code when using them.
            </p>
            <p>
              We have a great explanation of JavaScript Closures on
              <a href="https://www.w3schools.com/js/js_function_closures.asp"
                target="_blank">
                w3schools
              </a>
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="37. What is the difference between 'call()' and 'apply()' methods?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              37. What is the difference between "call()" and "apply()" methods?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              Both methods are used in a different situation:
            </p>
            <ul>
              <li>
                <b>call() method</b>: calls the method, taking the owner object as argument.
                The keyword this refers to the "owner" of the function or the object it
                belongs to. We can call a method that can be used on different objects.
              </li>
              <li>
                <b>apply() method</b>: is used to write methods, which can be used
                on different objects. It is different from the function "call()"
                because it takes arguments as an array.
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="38. What types of errors do we have in JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              38. What types of errors do we have in JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              There are three different types of errors in JavaScript:
            </p>
            <ul>
              <li>
                <b>Syntax error</b>: is an error in the syntax of a sequence of characters or tokens
                that are intended to be written in a particular programming language.
              </li>
              <li>
                <b>Logical error</b>: is the most difficult error to be traced as it is the error
                on the logical part of the coding or logical error is a bug in a program
                that causes to operate incorrectly and terminate abnormally.
              </li>
              <li>
                <b>Runtime Error</b>: is an error that occurs during the running
                of the program, also known as the exceptions.
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="39. How many ways an HTML element can be accessed in a JavaScript code?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              39. How many ways an HTML element can be accessed in a JavaScript code?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>There are four possible ways to access HTML element in JavaScript which are:</p>
            <ul>
              <li>
                <b>getElementById() method</b>: is used to get the element by its id name.
              </li>
              <li>
                <b>getElementsByClass() method</b>: is used to get all the elements
                that have the given classname.
              </li>
              <li>
                <b>getElementsByTagName() method</b>: is used to get all the elements
                that have the given tag name.
              </li>
              <li>
                <b>querySelector() method</b>: this function takes css style selector
                and returns the first selected element.
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="40. What is the difference between 'innerHTML' & 'innerText'?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              40. What is the difference between "innerHTML" & "innerText"?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              The "innerText" property sets or returns the text content as plain text of the
              specified node, and all its descendants whereas the "innerHTML" property
              sets or returns the plain text or HTML contents in the elements.
              Unlike "innerText", "innerHTML" lets you work with HTML rich text and doesn't
              automatically encode and decode text.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="41. What is an event bubbling in JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              41. What is an event bubbling in JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              Consider a situation an element is present inside another element and both
              of them handle an event. When an event occurs in bubbling, the innermost
              element handles the event first, then outer, and so on.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="42. What is the syntax of 'Self Invoking Function'?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              42. What is the syntax of 'Self Invoking Function'?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              The syntax for Self INvoking Function:
              The last bracket contains the function expression.
            </p>
            <div class="code-example">
              <pre>
                <code class="language-javascript">
                  // Self Invoking Function in ES5
                  (function (x) {
                    console.log(x);
                  }(1));

                  // Self Invoking Function in ES6
                  ((x) => {
                    console.log(x);
                  })(2);
                </code>
              </pre>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="43. What is JavaScript(JS)?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              43. What is JavaScript(JS)?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              JavaScript is a lightweight, interpreted programming language with
              object-oriented capabilities that allows you to build
              interactivity into otherwise static HTML pages.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="44. What are the features of JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              44. What are the features of JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <ul>
              <li>JavaScript is a lightweight, interpreted programming language.</li>
              <li>JavaScript is designed for creating network-centric applications.</li>
              <li>JavaScript is complementary to and integrated with Java.</li>
              <li>JavaScript is complementary to and integrated with HTML.</li>
              <li>JavaScript is open and cross-platform.</li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="45. What are the advantages of JavaScript?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              45. What are the advantages of JavaScript?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <ul>
              <li>
                <b>Less server interaction?</b> You can validate user input
                before sending the page off to the server.
              </li>
              <li>
                <b>Immediate feedback to the visitors?</b> They don't have to wait
                for a page reload to see if they have forgotten to enter something.
              </li>
              <li>
                <b>Increased interactivity?</b> You can create interfaces that
                react when the user hovers over them with a mouse or activates
                them via the keyboard
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="46. Is javascript case-sensitive?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              46. Is javascript case-sensitive?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              Yes, JavaScript is a case-sensitive language. This means that language
              keywords, variables, function names, and any other identifiers must
              always be typed with a consistent capitalization of letters.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="47. How to define an anonymous function?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              47. How to define an anonymous function?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              An anonymous function can be defined in a similar way as a normal
              function but it would not have any name.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="48. Which built-in method calls a function for each element in the array?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              48. Which built-in method calls a function for each element in the array?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              <b>forEach</b> method calls a function for each element in the array.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="49. Which type of variable among global and local, takes precedence over other if names are same?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              49. Which type of variable among global and local,
              takes precedence over other if names are same?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              A local variable takes precedence over a global variable with the same name.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="50. What difference between '==' and '==='?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              What difference between "==" and "==="?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              "==" only compares values "===" compare values and type both.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="51. What difference between 'undefined' and 'NULL' Keywords?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              What difference between "undefined" and "NULL" Keywords?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              When you define a var but not assign any value. typeof(undefined)=> undefine
              Null- manually done. typeof(null)=> object
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="52. What is prototypal Inheritance?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              52. What is prototypal Inheritance?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              Every object has a property called a prototype, where we can add
              methods to it and when you create another object from these the
              newly created object will automatically inherit its parent's property.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="53. How can you move element in lowercase to uppercase from an array?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              53. How can you move element in lowercase to uppercase from an array?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              <b>toUpperCase</b> method returns the calling string value converted to upper case.
            </p>
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
