<template>
  <v-md-editor v-model="text"
               left-toolbar="undo redo | tip table emoji todo-list | today align latex mermaid | link image code"
               :toolbar="toolbar"
               autofocus
               height="500px"/>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {dateFormat} from "../util/Util";
import MermaidTemplate from "./editor-mermaid";

const alignFn = (pos = 'left') => {
  return (editor: any) => {
    editor.insert(function (selected: string) {
      const str = `
::: align-${pos}
    ${pos}
:::
`
      return {
        text: str,
        selected: `    ${pos}`,
      };
    })
  }
}

const mermaid = (type = 'graph') => {
  const temp = MermaidTemplate[type]
  console.log(MermaidTemplate, type)
  return (editor: any) => {
    editor.insert(function (selected: string) {
      return {
        text: temp || '❎',
        selected: '',
      };
    })
  }
}

let toolbar = ref({
  today: {
    title: 'today',
    text: '🌞',
    action(editor: any) {
      editor.insert(function (selected: string) {
        const str = dateFormat(new Date())
        const newStr = '- '
        return {
          text: `\n\n## ${str}\n\n${newStr}`,
          selected: newStr,
        };
      });
    }
  },
  align: {
    title: 'align',
    text: '对齐',
    menus: [
      {
        name: 'left',
        text: '⬅️',
        action: alignFn()
      },
      {
        name: 'center',
        text: '🀄️',
        action: alignFn('center')
      },
      {
        name: 'right',
        text: '➡️',
        action: alignFn('right')
      }
    ]
  },
  latex: {
    title: 'latex',
    text: '🔢',
    // icon: 'v-md-icon-tip',
    action(editor: any) {
      editor.insert(function (selected: string) {
        const newStr = selected || 'math'
        return {
          text: `$$${newStr}$$`,
          selected: newStr,
        };
      });
    }
  },
  mermaid: {
    title: 'mermaid',
    text: '📊',
    menus: [
      {
        name: '流程图',
        text: '流程图',
        action: mermaid()
      },
      {
        name: '时序图',
        text: '时序图',
        action: mermaid('timeSeq')
      },
      {
        name: '类图',
        text: '类图',
        action: mermaid('classDiagram')
      },
      {
        name: '状态图',
        text: '状态图',
        action: mermaid('state')
      },
      {
        name: '关系图',
        text: '关系图',
        action: mermaid('erDiagram')
      },
      {
        name: '旅程图',
        text: '旅程图',
        action: mermaid('journey')
      },
      {
        name: '甘特图',
        text: '甘特图',
        action: mermaid('gantt')
      },
      {
        name: '饼图',
        text: '饼图',
        action: mermaid('pie')
      }
    ]
  }
})
</script>

<style scoped>

</style>
