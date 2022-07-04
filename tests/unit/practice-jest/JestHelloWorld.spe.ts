import { shallowMount } from '@vue/test-utils';
import JestHelloWorld from '@/components/tests/unit/JestHelloWorld.vue';

describe('JestHelloWorld.vue', () => {
  it('props.msg was passed.', () => {
    const message = 'new message';
    const wrapper = shallowMount(JestHelloWorld, {
      propsData: {
        msg: message
      }
    });
    expect(wrapper.props('msg')).toBe(message);
  });

  it('props.msg renders when passed.', () => {
    const message = 'new message';
    const wrapper = shallowMount(JestHelloWorld, {
      propsData: {
        msg: message
      }
    });
    expect(wrapper.text()).toMatch(message);
  });

  it('We have an element with class .hello.', () => {
    const wrapper = shallowMount(JestHelloWorld);
    expect(wrapper.find('.hello').exists()).toBeTruthy();
  });

  it('We have an element with class .unit-test-link.', () => {
    const wrapper = shallowMount(JestHelloWorld);
    expect(wrapper.find('.unit-test-link').exists()).toBeTruthy();
  });

  it('An element with class .unit-test-link have the link to https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest .', () => {
    const wrapper = shallowMount(JestHelloWorld);
    const link = wrapper.find('.unit-test-link');
    expect(link.attributes().href).toBe('https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest');
  });
});
