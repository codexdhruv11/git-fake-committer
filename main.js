const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const { makeCommits } = require('./commitLogic');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.handle('select-folder', async () => {
  const result = await dialog.showOpenDialog({ properties: ['openDirectory'] });
  return result.filePaths[0];
});

ipcMain.handle('start-commits', async (event, args) => {
  const { folderPath, startDate, endDate, totalCommits } = args;
  return await makeCommits(folderPath, startDate, endDate, totalCommits);
});
