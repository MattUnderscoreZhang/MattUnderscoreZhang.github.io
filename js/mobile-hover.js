function findHoverElements() {
    const hoverElements = [];
    const stylesheets = document.styleSheets;
    for (let sheet of stylesheets) {
        try {
            const rules = sheet.cssRules;
            for (let rule of rules) {
                if (rule.selectorText && rule.selectorText.includes(':hover')) {
                    const hoverTargets = document.querySelectorAll(rule.selectorText.replace(':hover', ''));
                    hoverTargets.forEach(element => {
                        if (!hoverElements.includes(element)) {
                            hoverElements.push(element);
                        }
                    });
                }
            }
        } catch (e) {
            console.warn('Cannot access stylesheet: ', e);
        }
    }
    return hoverElements;
}

findHoverElements().forEach(element => {
    element.addEventListener('click', () => {});
    //element.addEventListener('touchstart', () => {});
    //element.addEventListener('touchend', () => {element.blur();});
});
