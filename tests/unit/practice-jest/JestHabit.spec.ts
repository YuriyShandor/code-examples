import { shallowMount } from '@vue/test-utils';
import JestHabit from '@/components/tests/unit/jest/JestHabit.vue';

describe('JestHabit.vue', () => {
  let wrapper = null;
  const habitName = 'Learn something new';

  beforeEach(() => {
    wrapper = shallowMount(JestHabit, {
      propsData: {
        name: habitName,
      },
    });
  })

  afterEach(() => {
    wrapper = null;
  })

  it('Makes sure the habit name is rendered', () => {
    expect(wrapper.props().name).toBe(habitName);
    expect(wrapper.text()).toContain(habitName);
  });

  it('Marks the habit as completed', async () => {
    const box = wrapper.find('.habit__box');
    await box.trigger('click');
    expect(box.text()).toContain("✔");
  });

  it('Calls the onHabitDone method', async () => {
    const spyOnHabitDone = jest.spyOn(wrapper.vm, 'onHabitDone');
    const box = wrapper.find('.habit__box');
    await box.trigger('click');
    expect(spyOnHabitDone).toHaveBeenCalled();
  });

  it('Updates the habit props name', async () => {
    const newHabitName = 'Brush my teeth';
    await wrapper.setProps({
      name: newHabitName,
    });
    expect(wrapper.props('name')).toBe(newHabitName);
  });
});
