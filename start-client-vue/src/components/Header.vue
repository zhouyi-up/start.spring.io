<script setup lang="ts">

import HeaderMobile from "@/components/HeaderMobile.vue";
import Logo from "@/components/icons/Logo.vue";
</script>

<template>
  <header id='header'>
    <div class='not-mobile'>
      <h1 class='logo'>
        <a href='/'>
            <span class='logo-content' tabIndex='-1'>
              <Logo />
            </span>
        </a>
      </h1>
    </div>
    <HeaderMobile />
  </header>
</template>

<style scoped lang="scss">

</style>