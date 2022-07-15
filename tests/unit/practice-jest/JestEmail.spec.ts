import { mount } from '@vue/test-utils';
import JestEmail from '@/components/tests/unit/jest/JestEmail.vue';

describe('JestEmail.vue', () => {
  it('Sets the value', async () => {
    const wrapper = mount(JestEmail);
    const input = wrapper.find('input')

    await input.setValue('my@mail.com')

    expect(input.element.value).toBe('my@mail.com')
  });

  it('Trigger the submit', async () => {
    const wrapper = mount(JestEmail);
    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('submit')
  });

  it('Emits the input to its parent', async () => {
    const wrapper: any = mount(JestEmail);
    await wrapper.find('input').setValue('my@mail.com')
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('submit')[0][0]._value).toBe('my@mail.com')
  });
});
