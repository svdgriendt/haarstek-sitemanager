import { mount, shallowMount, VueWrapper } from '@vue/test-utils';
import BracketComponent from '../components/Bracket.vue';
import MatchComponent from '../components/Match.vue';
import Bracket from '../bracket';
import Match from '../match';

describe('Bracket component rendering', () => {
  test('Has CSS class', () => {
    const wrapper = shallowMount(BracketComponent, { props: { bracket: new Bracket(new Match(1, 2)) } });
    expect(wrapper.classes('bracket')).toEqual(true);
  });

  test('Renders final match', () => {
    const wrapper = mount(BracketComponent, { props: { bracket: new Bracket(new Match(1, 2)) } });
    expect(wrapper.getComponent<typeof MatchComponent>('.match').vm.$options.__name).toEqual(MatchComponent.__name);
  });
});