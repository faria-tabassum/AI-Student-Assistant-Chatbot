const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");
sendBtn.addEventListener("click", function () {
let message = userInput.value;
if (message.trim() === "") {
return;
}
chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
userInput.value = "";
});