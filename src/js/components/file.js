export default class File {
  constructor() {
    const li = document.createElement("li");
    li.classList.add("file");
    li.innerHTML = `<span class="title-file">title</span>
    <span class="file-size">sizes</span>
    <a href="./files/Storage Standard.pdf" rel ="noopener" class="file-link">DOWNLOAD</a>`;
    this.element = li;
  }

  get file() {
    return this.element;
  }
}
