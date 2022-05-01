import {domReady} from './utils'
import {useLoading} from './loading'

const {
    contextBridge,
    ipcRenderer
} = require("electron");

const {appendLoading, removeLoading} = useLoading()
window.removeLoading = removeLoading

// domReady().then(appendLoading)

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    "api", {
        send: (channel: string, data: any) => {
            // whitelist channels
            let validChannels = ["msg", 'quit'];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        receive: (channel: string, func: any) => {
            let validChannels = ["back"];
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender`
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        }
    }
);
