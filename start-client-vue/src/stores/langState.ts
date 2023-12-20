import {defineStore} from "pinia";
import {ref} from "vue";
const options:any = {
    persist: {
        enabled: true
    }
}
export const useLang = defineStore("lang", () => {
    const language = ref("zh-US")
    const zh = () => {
        language.value = "zh-US"
    }
    const en = () => {
        language.value = "en-US"
    }
    return {language, zh, en}
}, options)