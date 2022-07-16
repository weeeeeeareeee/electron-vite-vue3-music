import { app, BrowserWindow, shell, ipcMain } from "electron";
import { release } from "os";
import { join } from "path";

//禁用Windows 7的GPU加速
if (release().startsWith("6.1")) app.disableHardwareAcceleration();

// 设置Windows 10+通知的应用程序名称
if (process.platform === "win32") app.setAppUserModelId(app.getName());

if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

//路径拼接
export const ROOT_PATH = {
  // /dist
  dist: join(__dirname, "../.."),
  // /dist or /public
  public: join(__dirname, app.isPackaged ? "../.." : "../../../public")
};
// 申明
let win: BrowserWindow | null = null;
// 预加载
const preload = join(__dirname, "../preload/index.js");
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin
const url = `http://${process.env["VITE_DEV_SERVER_HOST"]}:${process.env["VITE_DEV_SERVER_PORT"]}`;
const indexHtml = join(ROOT_PATH.dist, "index.html");

// 创建窗口
async function createWindow() {
  win = new BrowserWindow({
    title: "肖佳云音乐",
    minWidth: 750,
    // frame: false,
    icon: join(ROOT_PATH.public, "favicon.ico"),
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  if (app.isPackaged) {
    win.loadFile(indexHtml);
  } else {
    win.loadURL(url);
    // win.webContents.openDevTools()
  }
}

app.whenReady().then(createWindow);

// 关闭全部窗口事件
app.on("window-all-closed", () => {
  win = null;
  if (process.platform !== "darwin") app.quit();
});

// macos的窗口激活事件
app.on("activate", () => {
  const allWindows = BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
  } else {
    createWindow();
  }
});

// 新窗口打开参数
ipcMain.handle("open-win", (event, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload
    }
  });

  if (app.isPackaged) {
    childWindow.loadFile(indexHtml, { hash: arg });
  } else {
    childWindow.loadURL(`${url}/#${arg}`);
    // childWindow.webContents.openDevTools({ mode: "undocked", activate: true })
  }
});

// 缩小，全屏，关闭
ipcMain.on("narrowWindow", (event, val) => {
  win.minimize();
});
ipcMain.on("fullWindow", (event, val) => {
  if (win.isFullScreen()) {
    win.setFullScreen(false);
  } else {
    win.setFullScreen(true);
  }
});
ipcMain.on("closeWindow", (event, val) => {
  app.quit();
});
