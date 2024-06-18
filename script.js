// scripts.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = event.target.email.value;
    const info = event.target.info.value;
    
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, info })
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        event.target.reset();
    })
    .catch(error => {
        alert('Error sending message');
        console.error('Error:', error);
    });
});
// scripts.js

// Simulate typing effect for "Nexus Info"
// const typedText = document.getElementById('typed-text');
// const text = "Nexus Info";
// let index = 0;

// function type() {
//     if (index < text.length) {
//         typedText.textContent += text.charAt(index);
//         index++;
//         setTimeout(type, 200); // Adjust typing speed here (in milliseconds)
//     }
// }

// document.addEventListener('DOMContentLoaded', type);
