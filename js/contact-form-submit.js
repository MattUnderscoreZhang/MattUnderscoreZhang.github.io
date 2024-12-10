const form = document.getElementById('contact-form');
const contactFormSubmitButton = document.getElementById('contact-form-button');
const contactRight = document.getElementById('contact-right');
const contactRightSuccessColors = document.getElementById('contact-right-success-colors');
const contactRightErrorColors = document.getElementById('contact-right-error-colors');
function resetFormStyles() {
    contactFormSubmitButton.value = "Send";
    contactFormSubmitButton.style.backgroundColor = "var(--color-dark)";
    contactFormSubmitButton.style.borderColor = "var(--color-dark)";
    contactFormSubmitButton.style.color = "var(--color-light)";
    contactFormSubmitButton.disabled = false;
    contactRightSuccessColors.style.opacity = 0;
    contactRightErrorColors.style.opacity = 0;
}
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    contactFormSubmitButton.value = "..."
    contactFormSubmitButton.style.backgroundColor = "var(--color-bg)";
    contactFormSubmitButton.style.borderColor = "var(--color-dark)";
    contactFormSubmitButton.style.color = "var(--color-dark)";
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(() => {
            contactFormSubmitButton.value = "Success!";
            contactFormSubmitButton.style.backgroundColor = "var(--color-glow)";
            contactFormSubmitButton.style.borderColor = "var(--color-glow)";
            contactFormSubmitButton.style.color = "var(--color-dark)";
            contactFormSubmitButton.disabled = true;
            contactRightSuccessColors.style.opacity = 1;
            setTimeout(resetFormStyles, 10000);
            setFireworks(30, 300);
        })
        .catch(() => {
            contactFormSubmitButton.value = "ERROR";
            contactFormSubmitButton.style.backgroundColor = "var(--color-glow)";
            contactFormSubmitButton.style.borderColor = "var(--color-glow)";
            contactFormSubmitButton.style.color = "var(--color-dark)";
            contactFormSubmitButton.disabled = true;
            contactRightErrorColors.style.opacity = 1;
            contactRight.classList.add('jiggle');
            contactRightErrorColors.classList.add('jiggle');
            contactRight.addEventListener('animationend', () => {
                contactRight.classList.remove('jiggle');
            }, { once: true });
            contactRightErrorColors.addEventListener('animationend', () => {
                contactRight.classList.remove('jiggle');
            }, { once: true });
            setTimeout(resetFormStyles, 1000);
        })
});
window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("contact-form").reset();
};
