import {createApp} from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import {Button, message} from 'ant-design-vue';
// import './samples/node-api'
import editor from "./components/MdEditor";


const app = createApp(App)
    .use(Button)
    .use(editor);
app.config.globalProperties.$message = message;

app.mount('#app')
// .$nextTick(window.removeLoading)
