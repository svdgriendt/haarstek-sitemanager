<script setup lang="ts">
import MatchModel from '../match';

const props = defineProps({ match: { type: MatchModel, required: true } });

</script>

<template>
  <Match v-if="MatchModel.is(match.top)" :match="match.top" />
  <Match v-if="MatchModel.is(match.bottom)" :match="match.bottom" />

  <div class="match">
    <span class="contestant" data-position="top">{{ !MatchModel.is(match.top) ? match.top : '&nbsp;' }}</span>
    <span class="contestant" data-position="bottom">{{ !MatchModel.is(match.bottom) ? match.bottom : '&nbsp;' }}</span>
  </div>
</template>