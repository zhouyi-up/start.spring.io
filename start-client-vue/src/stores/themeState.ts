import {defineStore} from "pinia";
import {ref} from "vue";

const options:any = {
    persist: {
        enabled: true
    }
}
export const useTheme = defineStore("theme", () => {
    const theme = ref("light")
    const light = () => {
        theme.value = "light"
    }

    const dark = () => {
        theme.value = "dark"
    }
    return { theme ,light, dark}
}, options)