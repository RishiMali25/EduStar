function sendMessage() {
    // Get user input from the input field
    var userInput = document.getElementById("user-input").value.trim();
    
    // Check if the input is empty
    if (userInput === "") return;
    
    // Display user message
    appendMessage("You: " + userInput);
    
    // Get AI response based on user input
    var aiResponse = getAIResponse(userInput);
    
    // Display AI response
    appendMessage("AI: " + aiResponse);
    
    // Clear user input field
    document.getElementById("user-input").value = "";
}

function getAIResponse(userInput) {
    // Default responses based on user input
    switch (userInput.toLowerCase()) {
        case "hello":
            return "Hi there!\nHow can I help you?";
          
        case "course":
            return "Sure, where would you like to go?\n1. physics\n2. Maths\n3. chemistry\n4. Biology";
           
        case "what is your name":
            return "I'm just a trip assistant, but you can call me Rupam.";
          
        case "1":
            return "Great choice! we have physics course with Ai integration.";
            
        case "2":
            return "we have maths course with Ai integration.";
            
        case "3":
            return "we have chemistry course with Ai integration.";
            
        case "4":
            return "we have Biology course with Ai integration.";
            
        case "help":
            return "I'm here to assist you. How can I help?";
            
        default:
            return "I'm sorry, I didn't understand that.";
    }
}

function appendMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
