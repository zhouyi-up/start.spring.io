<script setup lang="ts">

import Warnings from "@/components/Warnings.vue";
import Control from "@/components/Control.vue";
import Radio from "@/components/Radio.vue";
import FieldInput from "@/components/FieldInput.vue";
import FieldRadio from "@/components/FieldRadio.vue";
import Dependency from "@/components/Dependency.vue";
import Actions from "@/components/Actions.vue";
import Button from "@/components/Button.vue";
import {useMetadata} from "@/stores/metadataState";
import {useDefaultValues} from "@/stores/defaultState";
import {storeToRefs} from "pinia";
import {symb} from "@/utils/WindowUtils";
import {ref} from "vue";
import {getProject} from "@/utils/ApiUitls";
import FileSaver from 'file-saver'
import {get} from "lodash";

const metadata = useMetadata()
const values = useDefaultValues()
const {defaultValues} = storeToRefs(values)

let generate = ref(false)

const onGenerate = async () => {
  if (generate.value){
    return
  }
  generate.value = true
  const project = await getProject("starter.zip", defaultValues.value, metadata.metadata)
  generate.value = false
  if (project){
    FileSaver.saveAs(project, `${get(defaultValues.value, 'meta.artifact')}.zip`)
  }
}

const onExplore = async () => {
  const project = await getProject("starter.zip", defaultValues.value, metadata.metadata)

}
</script>

<template>
  <div class="colset colset-main">
    <div class="left">
      <Warnings/>
      <div class="col-sticky">
        <div class="colset">
          <div class="left">
            <Control :text="$t('project')">
              <Radio
                  :options="metadata.metadata?.project"
                  :selected="defaultValues.project"
                  @change-select="val => defaultValues.project = val"
              />
            </Control>
          </div>
          <div class="right">
            <Control :text="$t('language')">
              <Radio :options="metadata.metadata?.language"
                     :selected="defaultValues.language"
                     @change-select="val => defaultValues.language = val"
              />
            </Control>
          </div>
        </div>

        <Control text="Spring Boot">
          <Radio :options="metadata.metadata?.boot"
                 :selected="defaultValues.boot"
                 @change-select="val => defaultValues.boot = val"/>
        </Control>

        <Control :text="$t('projectMetadata')">
          <FieldInput id="input-group" text="Group" v-model="defaultValues.meta.group"/>
          <FieldInput id="input-artifact" text="Artifact" v-model="defaultValues.meta.artifact"/>
          <FieldInput id="input-name" text="Name" v-model="defaultValues.meta.name" />
          <FieldInput id="input-description" text="Description" v-model="defaultValues.meta.description" />
          <FieldInput id="input-packageName" text="Package name" v-model="defaultValues.meta.packageName" />
          <FieldRadio id="input-java" text="Java" :options="metadata.metadata?.meta.java"
                      v-model="defaultValues.meta.java"/>
        </Control>
      </div>
    </div>
    <div class="right">
      <Dependency />
    </div>
  </div>
  <Actions>
    <span v-if="generate" class='placeholder-button placeholder-button-submit placeholder-button-special'>
      {{$t('generating')}}
    </span>
    <Button v-else id="generate-project"
            :hotkey="symb() + ' + ⏎'" @click="onGenerate">
      {{$t("generate")}}</Button>
    <Button id="explore-project" hotkey='Ctrl + Space' @click="onExplore">{{$t("explore")}}</Button>
    <Button id='share-project' >{{$t("share")}}</Button>
  </Actions>
</template>

<style scoped lang="scss">

</style>