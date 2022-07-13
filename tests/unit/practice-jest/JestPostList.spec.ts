import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
import JestPostList from '@/components/tests/unit/jest/JestPostList.vue';

const mockPostList = [
  { id: 1, title: 'title1' },
  { id: 2, title: 'title2' },
];

jest.spyOn(axios, 'get').mockResolvedValue(mockPostList);

describe('JestPostList.vue', () => {
  it('Loads posts on button click', async () => {
    const wrapper = mount(JestPostList);
    await wrapper.get('button').trigger('click');

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/posts');

    await flushPromises();

    const posts = wrapper.findAll('[data-test="post"]');

    expect(posts).toHaveLength(2);
    expect(posts[0].text()).toContain('title1');
    expect(posts[1].text()).toContain('title2');
  });
});
