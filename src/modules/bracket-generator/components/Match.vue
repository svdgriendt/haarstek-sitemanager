<script setup lang="ts">
import Match from '../match';

defineProps({ match: Match });
</script>

<template>
  <div class="match">
    <span class="contestant" data-position="top">{{ match?.top }}</span>
    <span class="contestant" data-position="bottom">{{ match?.bottom }}</span>
  </div>
</template>