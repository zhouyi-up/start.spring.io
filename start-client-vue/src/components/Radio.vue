<script setup lang="ts">

import RadioInput from "@/components/RadioInput.vue";

const props = defineProps(["options", "selected"])
const emits = defineEmits(["changeSelect"])

const onSelected = (val:any) => {
  emits("changeSelect", val)
}
</script>

<template>
  <div class="group-radio">
    <radio-input v-for="item in props.options"
                 :text="item.text" :checked="item.key === props.selected" v-model="item.key"
                 @onClick="onSelected"></radio-input>
  </div>
</template>

<style scoped lang="scss">

</style>