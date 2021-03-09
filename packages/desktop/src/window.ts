import {app, BrowserWindow} from 'electron';
import * as constants from './constants';
import {isDev} from './is-dev';

let mainWindow: BrowserWindow | undefined;

export function getMainWindow() {
  return mainWindow;
}

export function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    vibrancy: 'dark',
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
    },
  });

  mainWindow.loadURL(constants.LOAD_URL);
  mainWindow.on('closed', () => {
    mainWindow = undefined;
  });

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}
