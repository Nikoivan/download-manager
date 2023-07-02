import "./manager.css";
//import fileUrl from "../../files/Storage Standard.pdf";
import File from "../components/file";

export default class DownloadManager {
  constructor(data) {
    this.element = document.createElement("div");
    this.element.classList.add("download-manager");
    this.element.innerHTML = `<div class="loader-wrapper">
    <div class="loader-header">    
        <span class="list-title title">Available Files (without sms and registration)</span>
    </div>
    <ul class="file-list">
        <li class="file">
            <span class="title-file text">DOM Standard</span>
            <span class="file-size text">3.1 Mb</span>
            <a href="#" class="file-link text">Download</a>
        </li>
        <li class="file">
            <span class="title-file text">Fetch Standard</span>
            <span class="file-size text">3.4 Mb</span>
            <a href="#" class="file-link text">Download</a>
        </li>
        <li class="file">
            <span class="title-file  text">Storage Standard</span>
            <span class="file-size  text">310 Kb</span>
            <a href="#" class="file-link text">Download</a>
        </li>
        <li class="file">
            <span class="title-file text">XMLHttpRequest</span>
            <span class="file-size text">833 Kb</span>
            <a href="#" class="file-link text">Download</a>
        </li>
    </ul>    
</div>
<div class="loader-footer">
    <span class="footer-title title">You've already downloaded:</span>
    <span class="footer-size">0</span>
</div>`;

    document.querySelector(`.${data.parentName}`).append(this.element);
    this.fileList = this.element.querySelector(".file-list");
  }
}
