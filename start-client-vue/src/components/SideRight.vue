<script setup lang="ts">

import IconSun from "@/components/icons/IconSun.vue";
import IconMoon from "@/components/icons/IconMoon.vue";
import {useTheme} from "@/stores/themeState";
import {useLang} from "@/stores/langState";

const theme = useTheme()
const lang = useLang()
</script>

<template>
  <div id="side-right">
    <div class="side-container">
      <div class="switch">
        <a
           :class="'button inverse top ' + (theme.theme === 'light'? 'active': '') " @click="theme.light()">
          <span class="button-content" tabindex="-1">
            <IconSun />
          </span>
        </a>
        <a :class="'button inverse ' + (theme.theme === 'dark'? 'active': '') " @click="theme.dark()">
          <span class="button-content" tabindex="-1">
            <IconMoon />
          </span>
        </a>
      </div>
      <div style="margin-top: 10px"></div>
      <div class="switch">
        <a
            :class="'button inverse top ' + (lang.language === 'zh-US'? 'active': '') " @click="lang.zh()">
          <span class="button-content" tabindex="-1">
            zh
          </span>
        </a>
        <a :class="'button inverse ' + (lang.language === 'en-US'? 'active': '') " @click="lang.en()">
          <span class="button-content" tabindex="-1">
            en
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>