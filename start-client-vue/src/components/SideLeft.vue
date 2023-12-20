<script setup lang="ts">

import IconGithub from "@/components/icons/IconGithub.vue";
</script>

<template>
  <div id='side-left'>
    <div class="side-container">
      <div class="navigation-action">
        <button class="hamburger hamburger--spin"
                type="button"
                aria-label="Menu"
                aria-controls="navigation">
          <span class="hamburger-box">
            <span class="hamburger-inner" />
          </span>
        </button>
      </div>
      <div class="social">
        <a rel="noreferrer noopener" target="_blank" href="https://github.com/spring-io/start.spring.io">
          <span class="a-content" tabindex="-1">
            <icon-github />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>