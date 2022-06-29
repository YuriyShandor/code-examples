import { shallowMount } from '@vue/test-utils';
import JestHabit from '@/components/tests/unit/JestHabit.vue';

describe('JestHabit.vue', () => {
  it('Makes sure the habit name is rendered', () => {
    const habitName = 'Learn something new';
    const wrapper = shallowMount(JestHabit, {
      propsData: {
        name: habitName,
      },
    });
    expect(wrapper.props().name).toBe(habitName);
    expect(wrapper.text()).toContain(habitName);
  });

  it('Marks the habit as completed', async () => {
    const wrapper = shallowMount(JestHabit, {
      propsData: {
        name: 'Learn something new',
      },
    });
    const box = wrapper.find('.habit__box');
    await box.trigger('click');
    expect(box.text()).toContain("✔");
  });

  it('Calls the onHabitDone method', async () => {
    const wrapper: any = shallowMount(JestHabit, {
      propsData: {
        name: 'Learn something new',
      },
    });
    const spyOnHabitDone = jest.spyOn(wrapper.vm, 'onHabitDone');
    const box = wrapper.find('.habit__box');
    await box.trigger('click');
    expect(spyOnHabitDone).toHaveBeenCalled();
  });

  it('Updates the habit props name', async () => {
    const wrapper = shallowMount(JestHabit, {
      propsData: {
        name: 'Learn something new',
      },
    });
    const newHabitName = 'Brush my teeth';
    await wrapper.setProps({
      name: newHabitName,
    });
    expect(wrapper.props('name')).toBe(newHabitName);
  });
});
