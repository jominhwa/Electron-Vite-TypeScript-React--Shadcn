import { app, BrowserWindow } from "electron";

let mainWindow: BrowserWindow | null = null;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false, // 보안 강화
            contextIsolation: true, // 보안 강화
            preload: __dirname + "/preload.js", // 필요하면 프리로드 추가
        },
    });

    mainWindow.loadURL("http://localhost:5173"); // Vite 개발 서버 실행

    // 개발자 도구 열기
    mainWindow.webContents.openDevTools();
});
