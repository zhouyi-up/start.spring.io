<script setup lang="ts">
const props = defineProps(["id", "hotkey"])
</script>

<template>
  <button class="button primary" type="button" :id="props.id">
    <span class="button-content" tabindex="-1">
      <span><slot/></span>
      <span class="secondary desktop-only">{{props.hotkey}}</span>
    </span>
  </button>
</template>

<style scoped lang="scss">

</style>