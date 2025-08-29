// ==========================
// Part 1: JavaScript Basics
// ==========================

// Variables
let destinations = ["Addis Ababa", "Lalibela", "Axum", "Bahir Dar", "Gondar"];
let countdownTime = 10;

// Conditional Example
let currentHour = new Date().getHours();
if(currentHour < 12){
    console.log("Good morning! Ready to explore Ethiopia?");
} else {
    console.log("Good day! Check out our amazing tours!");
}

// ==========================
// Part 2: Functions
// ==========================

// Function to display destinations on the page
function displayDestinations(){
    const list = document.getElementById("destination-list");
    destinations.forEach(dest => {
        let li = document.createElement("li");
        li.textContent = dest;
        list.appendChild(li);
    });
}

// Function to handle booking
function bookTrip(name, destination){
    if(name === "" || destination === ""){
        return "Please enter your name and select a destination.";
    } else {
        return `Thank you ${name}! Your trip to ${destination} has been successfully booked!`;
    }
}

// ==========================
// Part 3: Loops
// ==========================

// 1. Populate destination select options dynamically
const select = document.getElementById("destination");
for(let i = 0; i < destinations.length; i++){
    let option = document.createElement("option");
    option.value = destinations[i];
    option.textContent = destinations[i];
    select.appendChild(option);
}

// 2. Countdown loop using setInterval
const countdownElement = document.getElementById("countdown");
let countdown = countdownTime;
const interval = setInterval(() => {
    if(countdown <= 0){
        clearInterval(interval);
        countdownElement.textContent = "Special Offer Available Now!";
    } else {
        countdownElement.textContent = countdown;
        countdown--;
    }
}, 1000);

// ==========================
// Part 4: DOM Interactions
// ==========================

// 1. Display destinations on page load
displayDestinations();

// 2. Booking button click event
document.getElementById("book-btn").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const destination = document.getElementById("destination").value;
    const message = bookTrip(name, destination);

    const bookingMessage = document.getElementById("booking-message");
    bookingMessage.textContent = message;
    bookingMessage.style.color = "green";
});

// 3. Toggle header background color on click
document.querySelector("header").addEventListener("click", () => {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightyellow" ? "white" : "lightyellow";
});
