/* eslint-disable */
import JavaScriptGeneralExamples from '@/components/javascript/JavaScriptGeneralExamples.vue'
import JavaScriptArraysExamples from '@/components/javascript/JavaScriptArraysExamples.vue'
import JavaScriptNumbersExamples from '@/components/javascript/JavaScriptNumbersExamples.vue'
import JavaScriptExamplesRouterHelper from '@/helpers/router/javascript-examples/javascriptExamplesRouter.helper';

class javascriptExamplesRoutes {
	children() {
		return [
			{
				name: JavaScriptExamplesRouterHelper.constructor.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_NAME,
				path: JavaScriptExamplesRouterHelper.constructor.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_PATH,
				component: JavaScriptGeneralExamples
			},
			{
				name: JavaScriptExamplesRouterHelper.constructor.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_NAME,
				path: JavaScriptExamplesRouterHelper.constructor.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_PATH,
				component: JavaScriptArraysExamples
			},
			{
				name: JavaScriptExamplesRouterHelper.constructor.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_NAME,
				path: JavaScriptExamplesRouterHelper.constructor.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_PATH,
				component: JavaScriptNumbersExamples
			}
		]
	}
}

export default new javascriptExamplesRoutes