<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="工作目录">
      <a-input v-model:value="formState.name"/>
    </a-form-item>
    <a-form-item label="一个开关">
      <a-switch v-model:checked="formState.delivery"/>
    </a-form-item>
    <a-form-item label="报工相关">
      <a-checkbox-group v-model:value="formState.type">
        <a-checkbox value="1" name="type">每日提醒</a-checkbox>
        <a-checkbox value="2" name="type">自动报工</a-checkbox>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item label="提醒时间">
      <a-time-picker v-model:value="formState['time-picker']" value-format="HH:mm:ss"/>
    </a-form-item>
    <a-form-item label="自动报工时间">
      <a-time-picker v-model:value="formState['time-picker']" value-format="HH:mm:ss"/>
    </a-form-item>
    <a-form-item label="自动归档日">
      <a-date-picker v-model:value="formState['time-picker']" value-format="YYYY-MM-DD"/>
    </a-form-item>
    <a-form-item label="Activity form">
      <a-input v-model:value="formState.desc" type="textarea"/>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px">Cancel</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import type {UnwrapRef} from 'vue';
import {defineComponent, reactive, toRaw} from 'vue';
import {dateFormat} from "../util/Util";

interface FormState {
  name: string;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
  'time-picker': string
}

export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
      'time-picker': dateFormat(new Date())
    });
    const onSubmit = () => {
      console.log('submit!', toRaw(formState));
    };
    return {
      labelCol: {style: {width: '150px'}},
      wrapperCol: {span: 14},
      formState,
      onSubmit,
    };
  },
});
</script>

