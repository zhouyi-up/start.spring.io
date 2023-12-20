<script setup lang="ts">

import LogoMobile from "@/components/icons/LogoMobile.vue";
import IconSun from "@/components/icons/IconSun.vue";
import IconMoon from "@/components/icons/IconMoon.vue";
</script>

<template>
  <div class='is-mobile header-mobile'>
    <h1 class='logo logo-mobile'>
      <a href='/'>
          <span class='logo-content' tabIndex='-1'>
            <LogoMobile />
          </span>
      </a>
    </h1>
    <div class='switch-mobile'>
      <button
          type='button'
          aria-label='Switch theme'
          aria-controls='navigation'>
        <IconSun />
<!--        <IconMoon />-->
      </button>
    </div>
    <button
        class="hamburger hamburger--spin is-active"
        type='button'
        aria-label='Menu'
        aria-controls='navigation'
    >
        <span class='hamburger-box' tabIndex='-1'>
          <span class='hamburger-inner' />
        </span>
    </button>
  </div>
</template>

<style scoped lang="scss">

</style>