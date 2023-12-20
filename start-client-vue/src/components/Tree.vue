<script setup lang="ts">
import IconFolder from "@/components/icons/IconFolder.vue";

defineProps(["tree"])
</script>

<template>
  <ul class="explorer-ul">
    <template v-for="item in tree.children">
      <li class="li-folder">
        <a :key="'s1'+item.path">
          <span class="item-content" tabindex="-1">
            <span :key="'s2' + item.path" class="text">
              <span :key="'s3' + item.path" class="icon">
                <IconFolder :key="'s4' + item.path" />
              </span>
              {{item.filename}}
            </span>
          </span>
        </a>
      </li>
    </template>
  </ul>
</template>

<style scoped lang="scss">
</style>