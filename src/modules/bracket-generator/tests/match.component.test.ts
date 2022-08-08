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

describe('Nested Match component rendering', () => {
  test('Match = (1,(2,3))', () => {
    const wrapper = mount(MatchComponent, { props: { match: new Match(1, new Match(2, 3)) } });
    const matches = wrapper.findAll('div.match');

    expect(matches.length).toEqual(2);
    expect(matches[0].find('span[data-position="top"]').text()).toEqual('2');
    expect(matches[0].find('span[data-position="bottom"]').text()).toEqual('3');
    expect(matches[1].find('span[data-position="top"]').text()).toEqual('1');
    expect(matches[1].find('span[data-position="bottom"]').text()).toEqual('');
  });

  test('Match = ((1,4),(2,3))', () => {
    const wrapper = mount(MatchComponent, { props: { match: new Match(new Match(1, 4), new Match(2, 3)) } });
    const matches = wrapper.findAll('div.match');

    expect(matches.length).toEqual(3);
    expect(matches[0].find('span[data-position="top"]').text()).toEqual('1');
    expect(matches[0].find('span[data-position="bottom"]').text()).toEqual('4');
    expect(matches[1].find('span[data-position="top"]').text()).toEqual('2');
    expect(matches[1].find('span[data-position="bottom"]').text()).toEqual('3');
    expect(matches[2].find('span[data-position="top"]').text()).toEqual('');
    expect(matches[2].find('span[data-position="bottom"]').text()).toEqual('');
  });

  test('Match = ((1,(4,5)),(2,3))', () => {
    const wrapper = mount(MatchComponent, { props: { match: new Match(new Match(1, new Match(4, 5)), new Match(2, 3)) } });
    const matches = wrapper.findAll('div.match');

    expect(matches.length).toEqual(4);
    expect(matches[0].find('span[data-position="top"]').text()).toEqual('4');
    expect(matches[0].find('span[data-position="bottom"]').text()).toEqual('5');
    expect(matches[1].find('span[data-position="top"]').text()).toEqual('1');
    expect(matches[1].find('span[data-position="bottom"]').text()).toEqual('');
    expect(matches[2].find('span[data-position="top"]').text()).toEqual('2');
    expect(matches[2].find('span[data-position="bottom"]').text()).toEqual('3');
    expect(matches[3].find('span[data-position="top"]').text()).toEqual('');
    expect(matches[3].find('span[data-position="bottom"]').text()).toEqual('');
  });
});