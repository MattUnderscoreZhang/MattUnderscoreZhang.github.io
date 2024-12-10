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

console.log('Hover elements:', findHoverElements());
findHoverElements().forEach(element => {
    element.addEventListener('click', () => {
        document.querySelectorAll('.hover-simulate').forEach(el => el.classList.remove('hovered'));
        element.classList.add('hovered');
    });
});
