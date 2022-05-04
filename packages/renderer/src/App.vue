<script setup lang="ts">
import {ref} from "vue";
import Editor from "./components/Editor.vue";
import {dateFormat} from "./util/Util";
import {UserOutlined, FireTwoTone, SettingTwoTone} from '@ant-design/icons-vue'
import Setting from "./components/Setting.vue";

function send() {
  window.api.send('msg', text.value)
}

let text = ref('你好！')

window.api.receive('back', (d: any) => {
  console.log(d)
})

let selectedKeys1 = ref<string[]>(['2'])
let selectedKeys2 = ref<string[]>(['1'])
let collapsed = ref<boolean>(false)
let openKeys = ref<string[]>(['sub1'])

let currentDate = ref(dateFormat(new Date()))

let activeKey = ref('2')
</script>

<template>
  <a-layout>
    <a-layout-header class="header">
      <div style="float: right; user-select: none">
        <span id="date">{{ currentDate }}</span>
        <a-avatar style="background-color: #87d068">
          <template #icon>
            <UserOutlined/>
          </template>
        </a-avatar>
      </div>
    </a-layout-header>
    <a-layout style="background: #fff">
      <a-layout-sider width="80" style="background: #fff">
        <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            :style="{ height: '100%', borderRight: 0, background: '#f8f8f8' }"
        >
          <a-menu-item key="1">日常</a-menu-item>
          <a-menu-item key="2">归档</a-menu-item>
          <a-menu-item key="3">统计</a-menu-item>
          <a-menu-item key="4">设置</a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content
            :style="{ background: '#fff', padding: '10px', margin: 0, minHeight: '480px' }"
        >
          <div class="card-container">
            <a-tabs v-model:activeKey="activeKey" size="large" :tabBarGutter="100" :tabBarStyle="{width: '100%'}">
              <template #leftExtra>
                <span style="margin: 0 70px"></span>
              </template>
              <a-tab-pane key="1" tab="过往">
                <editor/>
              </a-tab-pane>
              <a-tab-pane key="2">
                <template #tab>
                  <span>
                    <fire-two-tone />
                    今日
                  </span>
                </template>
                <editor/>
              </a-tab-pane>
              <a-tab-pane key="3" tab="明日">
                <editor/>
              </a-tab-pane>
              <a-tab-pane key="4" tab="将来">
                <editor/>
              </a-tab-pane>
              <a-tab-pane key="5">
                <template #tab>
                  <span>
                    <setting-two-tone />
                    设置
                  </span>
                </template>
                <setting/>
              </a-tab-pane>
            </a-tabs>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
}

#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.ant-layout-header {
  background: white;
}

#date {
  font-weight: bold;
  color: #3e9bf4;
  margin: 0 20px
}


.card-container p {
  margin: 0;
}

.card-container > .ant-tabs-card .ant-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.card-container > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
  padding: 5px;
  background: #fff;
}

.card-container > .ant-tabs-card > .ant-tabs-nav::before {
  display: none;
}

.card-container > .ant-tabs-card .ant-tabs-tab,
[data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab {
  background: transparent;
  border-color: transparent;
}

.card-container > .ant-tabs-card .ant-tabs-tab-active,
[data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab-active {
  background: #fff;
  border-color: #fff;
}

#components-tabs-demo-card-top .code-box-demo {
  padding: 24px;
  overflow: hidden;
  background: #f5f5f5;
}

[data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-content {
  height: 120px;
  margin-top: -8px;
}

[data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-tab {
  background: transparent;
  border-color: transparent;
}

[data-theme='dark'] #components-tabs-demo-card-top .code-box-demo {
  background: #000;
}

[data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
  background: #141414;
}

[data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-tab-active {
  background: #141414;
  border-color: #141414;
}

.ant-tabs-tab {
  margin: 0 100px
}
</style>
