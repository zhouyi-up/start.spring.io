import zh from "@/lang/zh";
import en from "@/lang/en";
import {createI18n} from "vue-i18n";

const messages = {
    'zh-US': zh,
    'en-US': en,
}

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'zh-US',
    messages
})

export {i18n}