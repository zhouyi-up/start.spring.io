<script setup lang="ts">
const props = defineProps(["text", "checked", "modelValue"])
const emits = defineEmits(["onClick"])

const click = () => {
  emits("onClick", props.modelValue)
}
</script>

<template>
  <a :class="'radio ' + (props.checked? 'checked': '')" @click="click">
    <span class="caret" tabindex="-1" />
    <span class="radio-content" tabindex="-1">
      {{props.text}}
    </span>
  </a>
</template>

<style scoped lang="scss">

</style>