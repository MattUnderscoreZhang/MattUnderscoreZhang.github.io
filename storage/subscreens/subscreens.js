const phoneScreen = document.getElementById("phone-screen");
function changePhoneScreen(time) {
    const currentPhoneContent = document.querySelector(".phone-screen-content");
    currentPhoneContent.style.opacity = "0";
    const newPhoneContent = document.createElement("div");
    newPhoneContent.classList.add("phone-screen-content");
    newPhoneContent.style.transition = "opacity 0.3s";
    phoneScreen.appendChild(newPhoneContent);
    requestAnimationFrame(() => {
        newPhoneContent.style.opacity = "0";
        requestAnimationFrame(() => {
            newPhoneContent.style.opacity = "1";
        });
    });
    setTimeout(() => {
        currentPhoneContent.remove();
    }, time);
    return newPhoneContent;
}
const computerScreen = document.getElementById("computer-screen");
function changeComputerScreen(time) {
    const currentComputerContent = document.querySelector(".computer-screen-content");
    currentComputerContent.style.opacity = "0";
    const newComputerContent = document.createElement("div");
    newComputerContent.classList.add("computer-screen-content");
    newComputerContent.style.transition = "opacity 0.3s";
    computerScreen.appendChild(newComputerContent);
    requestAnimationFrame(() => {
        newComputerContent.style.opacity = "0";
        requestAnimationFrame(() => {
            newComputerContent.style.opacity = "1";
        });
    });
    setTimeout(() => {
        currentComputerContent.remove();
    }, time);
    return newComputerContent;
}
function loadContent(phoneContent, computerContent, index) {
    fetch(`/storage/subscreens/screens/${index}.html`)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            phoneContent.innerHTML = doc.getElementById("phone-content").innerHTML;
            computerContent.innerHTML = doc.getElementById("computer-content").innerHTML;
        })
        .catch(error => console.error("Error loading content:", error));
}
const nScreens = 2;
function changeScreens(index, time) {
    newPhoneContent = changePhoneScreen(time);
    newComputerContent = changeComputerScreen(time);
    loadContent(newPhoneContent, newComputerContent, index);
    setTimeout(() => {
        changeScreens((index + 1) % nScreens, time);
    }, time);
}
changeScreens(0, 1000);
