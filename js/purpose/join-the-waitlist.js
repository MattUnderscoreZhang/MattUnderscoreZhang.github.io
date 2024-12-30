document.getElementById("waitlist-form").addEventListener("submit", async function (e) {
    e.preventDefault();  // prevent form from refreshing the page

    const emailInput = document.getElementById("email");
    const confirmation = document.getElementById("confirmation");
    const email = emailInput.value;

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            access_key: "fe5f8e1d-77e4-4a87-8613-2e4309d47c15",
            email: email,
        }),
    });
    if (response.ok) {
        confirmation.style.display = "block";  // show confirmation message
        emailInput.value = "";  // clear input field
    } else {
        alert("Something went wrong. Please try again.");
    }
});
