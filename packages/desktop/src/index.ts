import { app } from 'electron';
import { createWindow, getMainWindow } from './window';

app.setName('Guava');
app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (getMainWindow() === null) {
    createWindow();
  }
});
