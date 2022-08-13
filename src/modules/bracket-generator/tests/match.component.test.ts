import { mount, shallowMount } from '@vue/test-utils';
import MatchComponent from '../components/Match.vue';
import Match from '../match';

describe('Single Match component rendering', () => {
  test('Has CSS class match', () => {
    const wrapper = shallowMount(MatchComponent, { props: { match: new Match(1, 2) } });
    expect(wrapper.find('div').classes('match')).toEqual(true);
  });
  test('Match = (1,2)', () => {
    const wrapper = shallowMount(MatchComponent, { props: { match: new Match(1, 2) } });
    expect(wrapper.find('span[data-position="top"]').text()).toEqual('1');
    expect(wrapper.find('span[data-position="bottom"]').text()).toEqual('2');
  });
  test('Match = (2,1)', () => {
    const wrapper = shallowMount(MatchComponent, { props: { match: new Match(2, 1) } });
    expect(wrapper.find('span[data-position="top"]').text()).toEqual('2');
    expect(wrapper.find('span[data-position="bottom"]').text()).toEqual('1');
  });
});

describe.todo('Nested Match component rendering (waiting for https://github.com/capricorn86/happy-dom/issues/564)', () => {
  test.todo('Match = (1,(2,3))');
  test.todo('Match = ((1,4),(2,3))');
  test.todo('Match = ((1,(4,5)),(2,3))');
});