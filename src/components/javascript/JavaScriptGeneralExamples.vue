<template>
  <div class="java-script-general-examples">
    <h1 class="page-title">
      JavaScript General Examples
    </h1>
    <div class="code-example-block">
      <div class="code-example__title">
        Url Query Params
      </div>
      <div class="code-example__description">
        Converting object with params to query string
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            interface IParams {
              [key: string]: (string | number | boolean);
            }

            const queryParamsObj: IParams = {
              firstName: 'John',
              lastName: 'Wick',
              profession: 'killer',
            };

            const paramsToQueryString = (params: IParams) => {
              let queryParamsString: string = '';
              if (Object.keys(params).length) {
                let isFistIteration: boolean = true;
                Object.keys(params).forEach((key) => {
                  queryParamsString += `${(isFistIteration ? '?' : '&') + key}=${params[key]}`;
                  isFistIteration = false;
                });
              }
              return queryParamsString;
            };
            console.log(paramsToQueryString(queryParamsObj));
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-block">
      <div class="code-example__title">
        Scroll Helpers Functions
      </div>
      <div class="code-example__description">
        Disabling and enabling scroll with saving scroll position
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let scrollYPosition: number = 0;
            const body: (HTMLElement | null) = document.querySelector('body');
            const header: (HTMLElement | null) = document.querySelector('.header');

            class ScrollHelper {
              disableScroll() {
                const scrollBarWidth: number = window.innerWidth - document.documentElement.clientWidth;
                scrollYPosition = window.pageYOffset;
                if (body !== null) {
                  body.style.overflowY = 'hidden';
                  body.style.position = 'fixed';
                  body.style.top = `-${scrollYPosition}px`;
                  body.style.width = '100%';
                  body.style.paddingRight = `${scrollBarWidth}px`;
                }
                if (header !== null) {
                  header.style.paddingRight = `${scrollBarWidth}px`;
                }
                return true;
              }

              enableScroll() {
                if (body !== null) {
                  body.style.removeProperty('overflow');
                  body.style.removeProperty('position');
                  body.style.removeProperty('top');
                  body.style.removeProperty('width');
                  body.style.removeProperty('padding-right');
                }
                if (header !== null) {
                  header.style.removeProperty('padding-right');
                }
                window.scrollTo(0, scrollYPosition);
                return true;
              }
            }

            export default new ScrollHelper();
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-block">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            // code here
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  console.log('JavaScript General Examples');
});
</script>
