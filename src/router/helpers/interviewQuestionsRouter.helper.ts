import SinglePage from '@/components/pages/SinglePage.vue';

import JavaScriptQuestionsPage from '@/components/interview-questions/JavaScriptQuestionsPage.vue';
import TypeScriptQuestionsPage from '@/components/interview-questions/TypeScriptQuestionsPage.vue';
import OOPQuestionsPage from '@/components/interview-questions/OOPQuestionsPage.vue';
import VueQuestionsPage from '@/components/interview-questions/VueQuestionsPage.vue';

class InterviewQuestionsRouterHelper {
  readonly INTERVIEW_QUESTIONS_PAGE_NAME: string = 'Interview Questions';

  readonly INTERVIEW_QUESTIONS_PAGE_PATH: string = 'interview-questions';

  readonly JAVASCRIPT_QUESTIONS_PAGE_NAME: string = 'JavaScript Questions';

  readonly JAVASCRIPT_QUESTIONS_PAGE_PATH: string = 'javascript';

  readonly TYPESCRIPT_QUESTIONS_PAGE_NAME: string = 'TypeScript Questions';

  readonly TYPESCRIPT_QUESTIONS_PAGE_PATH: string = 'typescript';

  readonly OOP_QUESTIONS_PAGE_NAME: string = 'OOP Questions';

  readonly OOP_QUESTIONS_PAGE_PATH: string = 'oop';

  readonly VUE_QUESTIONS_PAGE_NAME: string = 'Vue Questions';

  readonly VUE_QUESTIONS_PAGE_PATH: string = 'vue';

  routes() {
    return {
      name: this.INTERVIEW_QUESTIONS_PAGE_NAME,
      path: `/${this.INTERVIEW_QUESTIONS_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: this.JAVASCRIPT_QUESTIONS_PAGE_NAME,
          path: this.JAVASCRIPT_QUESTIONS_PAGE_PATH,
          component: JavaScriptQuestionsPage,
        },
        {
          name: this.TYPESCRIPT_QUESTIONS_PAGE_NAME,
          path: this.TYPESCRIPT_QUESTIONS_PAGE_PATH,
          component: TypeScriptQuestionsPage,
        },
        {
          name: this.OOP_QUESTIONS_PAGE_NAME,
          path: this.OOP_QUESTIONS_PAGE_PATH,
          component: OOPQuestionsPage,
        },
        {
          name: this.VUE_QUESTIONS_PAGE_NAME,
          path: this.VUE_QUESTIONS_PAGE_PATH,
          component: VueQuestionsPage,
        },
      ],
    };
  }

  menuItems() {
    return {
      title: this.INTERVIEW_QUESTIONS_PAGE_NAME,
      link: `/${this.INTERVIEW_QUESTIONS_PAGE_PATH}`,
      subItems: [
        {
          title: this.JAVASCRIPT_QUESTIONS_PAGE_NAME,
          link: `/${this.INTERVIEW_QUESTIONS_PAGE_PATH}/${this.JAVASCRIPT_QUESTIONS_PAGE_PATH}`,
        },
        {
          title: this.TYPESCRIPT_QUESTIONS_PAGE_NAME,
          link: `/${this.INTERVIEW_QUESTIONS_PAGE_PATH}/${this.TYPESCRIPT_QUESTIONS_PAGE_PATH}`,
        },
        {
          title: this.OOP_QUESTIONS_PAGE_NAME,
          link: `/${this.INTERVIEW_QUESTIONS_PAGE_PATH}/${this.OOP_QUESTIONS_PAGE_PATH}`,
        },
        {
          title: this.VUE_QUESTIONS_PAGE_NAME,
          link: `/${this.INTERVIEW_QUESTIONS_PAGE_PATH}/${this.VUE_QUESTIONS_PAGE_PATH}`,
        },
      ],
    };
  }
}

export default new InterviewQuestionsRouterHelper();
