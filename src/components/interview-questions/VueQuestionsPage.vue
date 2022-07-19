<template>
  <div class="interview-questions-page">
    <div class="container">
      <h1 class="page-title">
        JavaScript Questions for Interview
      </h1>
      <el-collapse accordion
        class="interview-questions-accordion">
        <el-collapse-item name="01. What is Vue.js?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              01. What is Vue.js?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              Vue.js is a framework for creating user interfaces that are built on JavaScript.
              It's a framework that's progressive. Vue.js is responsible for the view layer
              of an application. Vue.js may be used to create single-page applications.
              Vue is a framework that handles higher-level issues like fast DOM rendering,
              reactive state management, tools, client-side routing, and server-side rendering.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="02. Why is Vue.js called a progressive framework?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              02. Why is Vue.js called a progressive framework?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            Vue.js called a progressive framework because
            it is being changed and developed continually.
          </div>
        </el-collapse-item>
        <el-collapse-item name="03. Why would you choose Vue instead of React or Angular?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              03. Why would you choose Vue instead of React or Angular?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              Vue.js combines the best parts of Angular and React. Vue.js is a more
              flexible, less opinionated solution than Angular but it’s still
              a framework and not a UI library like React
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="04. What are some of the main features of Vue.js?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              04. What are the advantages of using Vue.js?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <ul>
              <li>
                <b>Very Small In Size</b>: One of Vue.js' biggest advantages is that it is
                very small in size. This exciting JavaScript plug-in is only 18-21KB,
                so you can download and use it very easily in no time.
              </li>
              <li>
                <b>Easy to Understand and Use</b>: The framework of Vue.js is very easy to understand,
                and it id one of the reasons for the popularity of this framework.
                The users can easily add Vue.js to their web project because of its
                simple structure and develop applications.
              </li>
              <li>
                <b>Simple Integration with Existing Applications</b>: Vue.js framework can be
                integrated with the existing applications very easily. Vue.js has a lot of
                components for everything. You can integrate it with any application
                that is written in JavaScript.
              </li>
              <li>
                <b>Flexible in nature</b>: The flexible nature of Vue.js also makes it easy
                to understand for the developers of React.js, Angular.js, and any other
                new JavaScript framework. It provides a lot of flexibility to use virtual
                nodes to write HTML files, JavaScript files, and pure JavaScript files.
              </li>
              <li>
                <b>Components</b>: You can create reusable custom elements in Vue.js applications.
              </li>
              <li>
                <b>Easy & comprehensive documentation</b>: The documentation of Vue.js is very easy
                and comprehensive so that developers can develop applications or web pages,
                only having little knowledge about HTML.
              </li>
              <li>
                <b>Virtual DOM</b>: Vue.js uses virtual DOM similar to other existing frameworks
                such as ReactJS, Ember, etc. Virtual DOM is a light-weight in-memory
                tree representation of the original HTML DOM and updated without
                affecting the original DOM.
              </li>
              <li>
                b
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="05. What are components in Vue?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              05. What are components in Vue?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              Components are the basic building blocks of the user interface of every application.
              Components allow us to split the UI into smaller, independent, and reusable pieces.
            </p>
            <p>
              The concept of components isn’t Vue specific, however, Vue has its own component
              model that provides encapsulation of the content and logic within each component.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="06. How do you create components in Vue?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              06. How do you create components in Vue?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              There are two ways to create a component in Vue. Depending on whether we have
              a build step or not, we can either use a single-file component or a JavaScript object.
            </p>
            <p>
              When using a build step, we typically use a <b>single-file component</b>.
              The Vue component is placed in a single dedicated file using the .vue extension.
            </p>
            <p>
              Without a build step, the Vue component can be defined as a plain JavaScript object
              containing Vue-specific options. The snippet below is the same single-file
              component converted into a JavaScript object.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="07. What is an SFC?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              07. What is an SFC?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              Vue <b>Single File Components</b> (aka <b>*.vue</b> files, abbreviated as SFC)
              is a special file format that allows us to encapsulate the template
              (<code>&lt;template></code>), logic (<code>&lt;script></code>),
            and styling (<code>&lt;style></code>) of a Vue component in a single file.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="08. What are Props in Vue?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              08. What are Props in Vue?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              When building an application, you often end up building a component tree
              with a hierarchy of components. Oftentimes, you will need to pass data
              between the components as you go down the tree.
              These are where props come into play.
            </p>
            <p>
              <b>Props</b> (or properties) are custom attributes you can register
              in a component. They are used to pass data from a parent component
              to its child components. When a value is passed as a prop attribute,
              it becomes a property on the component instance and can be accessed
              in this component.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="09. What are computed properties?"
          class="interview-questions-accordion__item">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              09. What are computed properties?
            </div>
          </template>
          <div class="interview-questions-accordion__item-content">
            <p>
              <b>Computed properties</b> should be used to remove as much logic as possible
              from the templates as otherwise the template gets bloated and is harder
              to maintain. If you have complex logic including reactive data in your
              template you should use a computed property instead.
            </p>
            <p>
              Instead of methods, computed properties are cached based on their reactive
              dependencies. A computed property will only re-evaluate when some of its
              reactive dependencies have changed.
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
  name: 'VueQuestionsPage',
  setup() {
    onMounted(() => {
      console.log('Vue Questions for Interview');
    });
  },
});
</script>
