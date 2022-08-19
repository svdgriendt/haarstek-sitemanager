<script setup lang="ts">
import { computed } from 'vue';
import MatchModel from '../match';

const props = defineProps({ match: { type: MatchModel, required: true } });
const hasMatchModel = computed(() => {
  return MatchModel.is(props.match.top) || MatchModel.is(props.match.bottom);
});
</script>

<template>
  <div class="match">
    <div class="contestants">
      <div class="contestant" data-position="top">{{ !MatchModel.is(match.top) ? match.top : '&nbsp;' }}</div>
      <div class="contestant" data-position="bottom">{{ !MatchModel.is(match.bottom) ? match.bottom : '&nbsp;' }}</div>
    </div>

    <div class="matches" :class="{ top: MatchModel.is(match.top), bottom: MatchModel.is(match.bottom) }"
      v-if="hasMatchModel">
      <Match data-position="top" v-if="MatchModel.is(match.top)" :match="match.top" />
      <Match data-position="bottom" v-if="MatchModel.is(match.bottom)" :match="match.bottom" />

      <div class="match-connector left"></div>
      <div class="match-connector right"></div>
    </div>
  </div>
</template>