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
        //async function injectPreloadedContent(htmlPath, docLocation) {
            //try {
                //const response = await fetch(htmlPath);
                //if (!response.ok) throw new Error(`Failed to load: ${response.status}`);
                //const htmlContent = await response.text();
                //docLocation.innerHTML = htmlContent;
            //} catch (error) {
                //console.error('Error injecting content:', error);
                //docLocation.innerHTML = "Failed to load content.";
            //}
        //}
        //injectPreloadedContent(htmlPath, docLocation);
    }
    docLocation.appendChild(element);
}
function createSection(folder, sectionId) {
    const main = document.querySelector('main');
    createElement(main, 'a', 'anchor', sectionId + '-anchor', null);
    createElement(main, 'section', 'section', sectionId, '/html/' + folder + '/' + sectionId + '.html');
}
function createDivider() {
    const main = document.querySelector('main');
    createElement(main, 'div', 'divider', null, '/html/index/divider.html');
}
