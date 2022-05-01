<template>
  <v-md-editor v-model="text"
               left-toolbar="undo redo | tip table emoji todo-list | today align latex mermaid | link image code"
               :toolbar="toolbar"
               autofocus
               height="400px"/>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {dateFormat} from "../util/Util";

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
    action(editor: any) {
      editor.insert(function (selected: string) {
        const str =
`
\`\`\`mermaid
graph LR
A --- B
B-->C[fa:fa-ban forbidden]
B-->D(fa:fa-spinner);
\`\`\`
`
        return {
          text: str,
          selected: '',
        };
      })
    }
  }
})
</script>

<style scoped>

</style>
