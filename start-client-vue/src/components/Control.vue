<script setup lang="ts">
const props = defineProps(["text"])
</script>

<template>
  <div class="control">
    <label class="label">
      {{props.text}}
    </label>
    <div class="control-element">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>