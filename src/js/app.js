import DownloadManager from "./manager/downloadmanager";
import File from "./components/file";
const data = { parentName: "wrapper", files: [] };

const file = new File();
const test = file.file;

document.body.append(test);

const manager = new DownloadManager(data);
