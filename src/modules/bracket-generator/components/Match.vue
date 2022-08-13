<script setup lang="ts">
import MatchModel from '../match';

const props = defineProps({ match: { type: MatchModel, required: true } });
</script>

<template>
  <div class="match">
    <div class="match-group" v-if="MatchModel.is(match.top) || MatchModel.is(match.bottom)">
      <Match data-position="top" v-if="MatchModel.is(match.top)" :match="match.top" />
      <Match data-position="bottom" v-if="MatchModel.is(match.bottom)" :match="match.bottom" />
    </div>

    <div class="match-details">
      <span class="contestant" data-position="top">{{ !MatchModel.is(match.top) ? match.top : '&nbsp;' }}</span>
      <span class="contestant" data-position="bottom">{{ !MatchModel.is(match.bottom) ? match.bottom : '&nbsp;'
      }}</span>
    </div>
  </div>
</template>