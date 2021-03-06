// markdown editor resources
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';

import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';

import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';

import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';

import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';

import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';

import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index';
import '@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css';

import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

import createAlignPlugin from '@kangc/v-md-editor/lib/plugins/align';

import Prism from 'prismjs';

const editor = VueMarkdownEditor.use(vuepressTheme, {Prism})
    .use(createEmojiPlugin())
    .use(createKatexPlugin())
    .use(createTodoListPlugin())
    .use(createLineNumbertPlugin())
    .use(createHighlightLinesPlugin())
    .use(createCopyCodePlugin())
    .use(createAlignPlugin())
    .use(createMermaidPlugin());

export default editor;
