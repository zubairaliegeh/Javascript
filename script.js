document.getElementById('action-btn').addEventListener('click', function() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = "🎉 JavaScript is working perfectly on my live site!";
    messageElement.style.color = "green";
    messageElement.style.fontWeight = "bold";
});
