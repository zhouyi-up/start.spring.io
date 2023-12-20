import {defineStore} from "pinia";
import {ref} from "vue";

export const useDefaultValues = defineStore('defaultValues', () => {
    const defaultValues = ref<any>({
        meta:{}
    })
    const updateValues = (data: any) => {
        defaultValues.value = data
    }
    const getValues = () => defaultValues.value

    return { defaultValues, updateValues, getValues}
})