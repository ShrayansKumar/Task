function changeTheme() {
    const body = document.body;
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
    alert("Changed theme successfully");
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update the clock in real time
function updateClock() {
    // Get the current date and time
    var date = new Date();
    // Format the time in 12-hour format with AM/PM
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // Display the time in the clock element
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);