const { app, BrowserWindow, globalShortcut } = require('electron')

const createWindow = () => {
      const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences:{
        nodeIntegration: true
      }
    })
    win.loadFile('src/index.html')
    //win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
