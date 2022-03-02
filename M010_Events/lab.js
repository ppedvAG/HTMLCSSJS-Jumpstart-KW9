let editor = document.querySelector("#editor");
let addButton = document.querySelector("#add");
let previewBox = document.querySelector("#preview");

function previewHtml() {
    previewBox.innerText = editor.value;
}

function appendHtml() {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = editor.value;
    document.body.appendChild(newDiv);
    editor.value = "";
}

editor.addEventListener("keyup", previewHtml);
addButton.addEventListener("click", appendHtml);