document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    alert('Thank you for contacting us! Your message has been sent.');
    document.getElementById('contactForm').reset();
});

function confirmPurchase() {
    if (confirm('Are you sure you want to buy this product?')) {
        alert('Thank you for your purchase!');
    }
}
