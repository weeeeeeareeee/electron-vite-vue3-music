import { app, BrowserWindow, shell, ipcMain, nativeImage, Tray, Menu } from 'electron'
import { release } from 'os'
import { join } from 'path'
import './renderer'
// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration()

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
	app.quit()
	process.exit(0)
}

// Remove electron security warnings
// This warning only shows in development mode
// Read more on https://www.electronjs.org/docs/latest/tutorial/security
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

export const ROOT_PATH = {
	// /dist
	dist: join(__dirname, '../..'),
	// /dist or /public
	public: join(__dirname, app.isPackaged ? '../..' : '../../../public'),
}

let win = null
// Here, you can also use other preload
const preload = join(__dirname, '../preload/index.js')
const url = process.env.VITE_DEV_SERVER_URL
const indexHtml = join(ROOT_PATH.dist, 'index.html')

// 托盘菜单
const createTray = function () {
	const trayLogo = nativeImage.createFromPath(join(ROOT_PATH.public, 'logo.png'))
	const tray = new Tray(trayLogo)
	const contextMenu = Menu.buildFromTemplate([
		{
			label: '刷新',
			click: () => {
				win.webContents.reload()
			},
		},
		{
			label: '打开调试',
			click: () => {
				win.webContents.openDevTools()
			},
		},
		{
			label: '关闭调试',
			click: () => {
				win.webContents.closeDevTools()
			},
		},
		{ label: '退出音乐', role: 'quit' },
	])
	tray.setToolTip('芜湖云音乐')
	tray.setContextMenu(contextMenu)
	tray.on('click', () => {
		win.show()
	})
}

async function createWindow() {
	win = new BrowserWindow({
		title: 'Main window',
		icon: join(ROOT_PATH.public, 'favicon.ico'),
		minWidth: 1300,
		minHeight: 700,
		frame: false,
		webPreferences: {
			preload,
			nodeIntegration: true,
			contextIsolation: false,
		},
	})

	if (app.isPackaged) {
		win.loadFile(indexHtml)
	} else {
		win.loadURL(url)
		// Open devTool if the app is not packaged
	}

	// Test actively push message to the Electron-Renderer
	win.webContents.on('did-finish-load', () => {
		win?.webContents.send('main-process-message', new Date().toLocaleString())
	})

	// Make all links open with the browser, not with the application
	win.webContents.setWindowOpenHandler(({ url }) => {
		if (url.startsWith('https:')) shell.openExternal(url)
		return { action: 'deny' }
	})
}

app.whenReady().then(() => {
	createWindow(), createTray()
})

app.on('window-all-closed', () => {
	win = null
	if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', () => {
	if (win) {
		// Focus on the main window if the user tried to open another
		if (win.isMinimized()) win.restore()
		win.focus()
	}
})

app.on('activate', () => {
	const allWindows = BrowserWindow.getAllWindows()
	if (allWindows.length) {
		allWindows[0].focus()
	} else {
		createWindow()
	}
})

// new window example arg: new windows url
ipcMain.handle('open-win', (event, arg) => {
	const childWindow = new BrowserWindow({
		webPreferences: {
			preload,
		},
	})

	if (app.isPackaged) {
		childWindow.loadFile(indexHtml, { hash: arg })
	} else {
		childWindow.loadURL(`${url}/#${arg}`)
	}
})

// 窗口控制方法
ipcMain.on('windowControl', (event, data) => {
	switch (data) {
		case 1:
			win.minimize()
			break
		case 2:
			if (win.isMaximized()) {
				win.unmaximize()
			} else {
				win.maximize()
			}
			break
		case 3:
			win.hide()
			break
	}
})
