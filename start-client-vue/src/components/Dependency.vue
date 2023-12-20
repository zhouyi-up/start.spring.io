<script setup lang="ts">

import Button from "@/components/Button.vue";
</script>

<template>
  <div class="control">
    <div class="dependency-header">
      <span class="label">{{$t('dependencies')}}</span>
      <Button id="explore-dependencies" hotkey="">
        {{$t("add")}} <span class="desktop-only">{{$t("dependencyLabel")}}</span>...
      </Button>
      <div class='no-dependency'>{{$t("noDependency")}}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>