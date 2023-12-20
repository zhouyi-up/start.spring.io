<script setup lang="ts">
defineProps(["projectName"])

</script>

<template>
  <div class="explorer">
    <div class="colset-explorer">
      <div class="left">
        <div class="head">
          <strong>{{projectName}}</strong>
        </div>
        <div class="explorer-content">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>