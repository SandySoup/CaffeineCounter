// Get references to the input field and the submit button
const cupsInput = document.querySelector('[data-title="coffee-count"]');
const submitButton = document.getElementById('submit-btn');
const date = new Date();

// Store the current date in localStorage if not already stored
if (!localStorage.getItem("date")) {
    localStorage.setItem("date", date.getTime().toString());
}

// Get the stored date from localStorage
const storedDate = new Date(parseInt(localStorage.getItem("date")));

// Add an event listener for the button click
submitButton.addEventListener("click", function () {
    // Get the number of cups entered by the user
    const cups = parseInt(cupsInput.value);

    // If the value is a valid number, calculate caffeine
    if (!isNaN(cups) && cups >= 0) {
        CalculateCaffeine(cups);
    } else {
        alert("Please enter a valid number of cups!");
    }
});

function CalculateCaffeine(cups) {
    // Assuming 5 hours per cup (e.g., 5 hours until caffeine leaves your system)
    const caffeineAmount = cups * 5;
    
    // Calculate the time when caffeine will leave the system
    const currentTime = new Date();
    const timeCaffeineLeft = new Date(currentTime.getTime() + caffeineAmount * 60 * 60 * 1000); // Add hours to current time

    // Format the time into a readable string
    const formattedCurrentTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Local time without date and seconds
    const formattedCaffeineLeftTime = timeCaffeineLeft.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Local time without date and seconds
    // Display the results
    document.querySelector('.hours').textContent = `Hours until caffeine has left your system: ${caffeineAmount} hours`;
    document.querySelector('.live-time').textContent = `The current time is: ${formattedCurrentTime}.`;
    document.querySelector('.time-left').textContent = `This will leave your system at: ${formattedCaffeineLeftTime}.`;

    // Optional description
    document.querySelector('.desc').textContent = `*Providing one cup contains 40mg of coffee, the average half-life for one cup of coffee is 5 hours.*`;
}
