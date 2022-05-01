import IpcMain = Electron.IpcMain;
import BrowserWindow = Electron.BrowserWindow;

let ipc: IpcMain;
let win: BrowserWindow;

export function init(ipcMain: IpcMain, window: BrowserWindow) {
    ipc = ipcMain;
    win = window;
    then()
}

function then() {
    ipc.on('msg', (e, d) => {
        win?.webContents.send('back', d);
    })

    // ipc.on('')
}
