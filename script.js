function showLuckyColor() {
    const numberInput = document.getElementById("number");
    const result = document.getElementById("result");
    
    if(!numberInput || !result) return;

    const number = parseInt(numberInput.value);

    if (isNaN(number) || number < 1 || number > 10) {
        result.innerHTML = "⚠️ Please enter a number between 1 and 10.";
        return;
    }

    let color = "";
    let message = "";

    switch(number){
        case 1:
            color = "🩵 Sky Blue";
            message = "Calm, creative, and full of new ideas!";
            break;
        case 2:
            color = "💜 Lavender";
            message = "Kind and thoughtful.";
            break;
        case 3:
            color = "🌿 Mint Green";
            message = "Fresh energy is coming!";
            break;
        case 4:
            color = "🌸 Baby Pink";
            message = "A happy surprise is waiting for you!";
            break;
        case 5:
            color = "☀️ Sunshine Yellow";
            message = "Today is your lucky day!";
            break;
        case 6:
            color = "🤍 White";
            message = "A peaceful day is ahead.";
            break;
        case 7:
            color = "🌌 Navy Blue";
            message = "Trust your intuition today.";
            break;
        case 8:
            color = "🍑 Peach";
            message = "You will make a wonderful new memory.";
            break;
        case 9:
            color = "🟣 Purple";
            message = "Creativity will guide you.";
            break;
        case 10:
            color = "💚 Emerald Green";
            message = "Success is getting closer!";
            break;
    }

    result.innerHTML =
    "<h3>Your Lucky Color</h3>" +
    "<p style='font-size:28px; margin: 10px 0;'>" + color + "</p>" +
    "<p style='font-weight: normal; font-size: 16px;'>" + message + "</p>";
}

// ---------- Contact Form Validation ----------
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if(contactForm){
        contactForm.addEventListener("submit", function(event){
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            if(name && email && message){
                if(name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === ""){
                    alert("Please fill in all fields.");
                    event.preventDefault();
                } else {
                    alert("Thank you for your message! 💙");
                }
            }
        });
    }
});