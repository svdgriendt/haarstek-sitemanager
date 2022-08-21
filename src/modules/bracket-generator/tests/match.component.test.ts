import { mount, shallowMount } from '@vue/test-utils';
import MatchComponent from '../components/Match.vue';
import Match from '../match';

describe('Single Match component rendering', () => {
  test('Has CSS class match', () => {
    const wrapper = shallowMount(MatchComponent, { props: { match: new Match(1, 2) } });
    expect(wrapper.classes('match')).toEqual(true);
  });
  test('Match = (1,2)', () => {
    const wrapper = shallowMount(MatchComponent, { props: { match: new Match(1, 2) } });
    expect(wrapper.find('.contestants .contestant[data-position="top"]').text()).toEqual('1');
    expect(wrapper.find('.contestants .contestant[data-position="bottom"]').text()).toEqual('2');
  });
  test('Match = (2,1)', () => {
    const wrapper = shallowMount(MatchComponent, { props: { match: new Match(2, 1) } });
    expect(wrapper.find('.contestants .contestant[data-position="top"]').text()).toEqual('2');
    expect(wrapper.find('.contestants .contestant[data-position="bottom"]').text()).toEqual('1');
  });
});

describe('Nested Match component rendering', () => {
  test('Match = (1,(2,3))', () => {
    const wrapper = mount(MatchComponent, { props: { match: new Match(1, new Match(2, 3)) } });
    expect(wrapper.find('.contestants .contestant[data-position="top"]').text()).toEqual('1');
    expect(wrapper.find('.contestants .contestant[data-position="bottom"]').text()).toEqual('');

    const matches = wrapper.find('.matches');
    expect(matches.classes()).toEqual(['matches', 'bottom']);

    expect(() => matches.getComponent<typeof MatchComponent>('.match[data-position="top"]')).toThrowError();

    const bottom = matches.getComponent<typeof MatchComponent>('.match[data-position="bottom"]');
    expect(bottom.vm.$options.__name).toEqual(MatchComponent.__name);
    expect(bottom.vm.match).toEqual(new Match(2, 3));
  });
  test('Match = ((1,3),2)', () => {
    const wrapper = mount(MatchComponent, { props: { match: new Match(new Match(1, 3), 2) } });
    expect(wrapper.find('.contestants .contestant[data-position="top"]').text()).toEqual('');
    expect(wrapper.find('.contestants .contestant[data-position="bottom"]').text()).toEqual('2');

    const matches = wrapper.find('.matches');
    expect(matches.classes()).toEqual(['matches', 'top']);

    const top = matches.getComponent<typeof MatchComponent>('.match[data-position="top"]');
    expect(top.vm.$options.__name).toEqual(MatchComponent.__name);
    expect(top.vm.match).toEqual(new Match(1, 3));

    expect(() => matches.getComponent<typeof MatchComponent>('.match[data-position="bottom"]')).toThrowError();

  });
  test('Match = ((1,4),(2,3))', () => {
    const wrapper = mount(MatchComponent, { props: { match: new Match(new Match(1, 4), new Match(2, 3)) } });
    expect(wrapper.find('.contestants .contestant[data-position="top"]').text()).toEqual('');
    expect(wrapper.find('.contestants .contestant[data-position="bottom"]').text()).toEqual('');

    const matches = wrapper.find('.matches');
    expect(matches.classes()).toEqual(['matches', 'top', 'bottom']);

    const top = matches.getComponent<typeof MatchComponent>('.match[data-position="top"]');
    expect(top.vm.$options.__name).toEqual(MatchComponent.__name);
    expect(top.vm.match).toEqual(new Match(1, 4));

    const bottom = matches.getComponent<typeof MatchComponent>('.match[data-position="bottom"]');
    expect(bottom.vm.$options.__name).toEqual(MatchComponent.__name);
    expect(bottom.vm.match).toEqual(new Match(2, 3));
  });
});