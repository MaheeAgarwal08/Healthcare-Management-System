// script.js

// Array to store registered patients
let patients = [];

// Maximum number of available beds
let maxBeds = 5;
let availableBeds = maxBeds;

// Function to handle patient registration
document.getElementById('patientForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const patientName = document.getElementById('patientName').value.trim();
    
    if (patientName !== "") {
        // Add patient to the queue
        patients.push(patientName);
        updateQueueDisplay();
        
        // Clear input field
        document.getElementById('patientName').value = '';
    } else {
        alert('Please enter a valid patient name.');
    }
});

// Function to update the queue display
function updateQueueDisplay() {
    const queueList = document.getElementById('patientQueue');
    queueList.innerHTML = ''; // Clear the current list

    patients.forEach(patient => {
        const listItem = document.createElement('li');
        listItem.textContent = patient;
        queueList.appendChild(listItem);
    });

    // Update bed availability
    updateBedStatus();
}

// Function to update bed status
function updateBedStatus() {
    const bedStatus = document.getElementById('bedStatus');

    if (patients.length <= availableBeds) {
        availableBeds -= patients.length;
        bedStatus.textContent = `Available Beds: ${availableBeds}`;
    } else {
        bedStatus.textContent = `Available Beds: 0 (Full)`;
    }
}

// Simulate patient discharge (for demonstration purposes)
function dischargePatient() {
    if (patients.length > 0) {
        patients.shift(); // Remove the first patient in the queue
        availableBeds = Math.min(availableBeds + 1, maxBeds);
        updateQueueDisplay();
    }
}

// Simulate discharge every 15 seconds
setInterval(dischargePatient, 15000);
