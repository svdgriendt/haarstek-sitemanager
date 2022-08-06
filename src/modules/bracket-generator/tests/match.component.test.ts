import { shallowMount } from '@vue/test-utils';
import MatchComponent from '../components/Match.vue';
import Match from '../match';


describe('Match component rendering', () => {
  test('Match = (1,2)', () => {
    const wrapper = shallowMount(MatchComponent, { props: { match: new Match(1, 2) }});
    expect(wrapper.find('span[data-position="top"]').text()).toEqual('1');
    expect(wrapper.find('span[data-position="bottom"]').text()).toEqual('2');
  });
  test('Match = (2,1)', () => {
    const wrapper = shallowMount(MatchComponent, { props: { match: new Match(2, 1) }});
    expect(wrapper.find('span[data-position="top"]').text()).toEqual('2');
    expect(wrapper.find('span[data-position="bottom"]').text()).toEqual('1');
  });
});