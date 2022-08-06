<script setup lang="ts">
import Match from '../match';

defineProps<{ match: Match }>()
</script>

<template>
  <div>
    <span data-position="top">{{ match.top }}</span>
    <span data-position="bottom">{{ match.bottom }}</span>
  </div>
</template>