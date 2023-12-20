import {defineStore} from "pinia";
import {ref} from "vue";


export const useMetadata = defineStore('metadataState', () => {
    const metadata = ref<Metadata>()
    const setMetadata = (data: any) => {
        metadata.value = data
    }
    const getMetadata = () => metadata.value

    return { metadata,setMetadata, getMetadata}
})