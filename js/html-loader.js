const xhr = new XMLHttpRequest();
function createElement(docLocation, elemType, elemClass, elemId, htmlPath) {
    const element = document.createElement(elemType);
    if (elemClass !== null)
        element.setAttribute('class', elemClass);
    if (elemId !== null)
        element.setAttribute('id', elemId);
    if (htmlPath !== null) {
        xhr.open('GET', htmlPath, false); // synchronous request
        xhr.send(null);
        if (xhr.status === 200)
            element.innerHTML = xhr.responseText;
    }
    docLocation.appendChild(element);
}
function createSection(sectionId) {
    const main = document.querySelector('main');
    createElement(main, 'a', 'anchor', sectionId + '-anchor', null);
    createElement(main, 'section', 'section', sectionId, 'html/' + sectionId + '.html');
}
function createDivider() {
    const main = document.querySelector('main');
    createElement(main, 'div', 'divider', null, 'html/divider.html');
}
