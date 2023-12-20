<script setup lang="ts">
const props = defineProps(["id","text", "modelValue"])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="control control-inline">
    <label :for="props.id">{{props.text}}</label>
    <input type="text" :id="props.id" class="input"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<style scoped lang="scss">

</style>