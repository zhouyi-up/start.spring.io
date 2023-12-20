<script setup lang="ts">
import SideLeft from "@/components/SideLeft.vue";
import Header from "@/components/Header.vue";
import Form from "@/components/Form.vue";
import Fields from "@/components/Fields.vue";
import {useMetadata} from "@/stores/metadataState";
import {getInfo} from "@/utils/ApiUitls";
import SideRight from "@/components/SideRight.vue";
import {useTheme} from "@/stores/themeState";
import {onMounted, watch} from "vue";
import {useLang} from "@/stores/langState";
import {useI18n} from "vue-i18n";
import {useDefaultValues} from "@/stores/defaultState";
import {getDefaultValues, getLists} from "@/utils/DataUtils";


const metadata = useMetadata()
const values = useDefaultValues()

const theme = useTheme()
const lang = useLang()
const {locale} = useI18n()

watch(() => theme.theme, (newVal, oldValue) => {
  document.body.className = newVal
})
watch(() => lang.language, (newValue, oldValue) => {
  locale.value = newValue
})
onMounted(() =>{
  document.body.className = theme.theme
  locale.value = lang.language
})

// 初始化数据
getInfo("metadata/client").then((jsonConfig:any) => {
  metadata.setMetadata(getLists(jsonConfig))
  values.updateValues(getDefaultValues(jsonConfig))
})
</script>

<template>
  <div>
    <side-left/>
    <div id="main">
      <Header />
      <hr class='divider' />
      <Form>
        <Fields/>
      </Form>
    </div>
    <SideRight />
  </div>
</template>

<style lang="scss" scoped>

</style>
