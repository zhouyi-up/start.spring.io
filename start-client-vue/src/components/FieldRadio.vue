<script setup lang="ts">

import Radio from "@/components/Radio.vue";

const props = defineProps(["id","text", "options", "modelValue"])
const emits = defineEmits(["update:modelValue"])
</script>

<template>
  <div class="control control-inline">
    <label :id="props.id">{{props.text}}</label>
    <Radio :options="options" :selected="modelValue" @change-select="val => emits('update:modelValue', val)"/>
  </div>
</template>

<style scoped lang="scss">

</style>