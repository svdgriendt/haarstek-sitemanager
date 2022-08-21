<script setup lang="ts">
import BracketModel from '../bracket';
import Match from './Match.vue';

const props = defineProps({ bracket: { type: BracketModel, required: true } });
</script>

<template>
  <div class="bracket">
    <Match :match="bracket.finalMatch" />
  </div>
</template>