document.addEventListener('DOMContentLoaded', () => {
    displayBloodAvailability();
    populateEventList();
});

function displayBloodAvailability() {
    const availability = {
        "A+": 10,
        "A-": 5,
        "B+": 8,
        "B-": 4,
        "AB+": 6,
        "AB-": 2,
        "O+": 15,
        "O-": 7
    };

    const availabilityDiv = document.getElementById('blood-availability');
    for (const [type, units] of Object.entries(availability)) {
        const p = document.createElement('p');
        p.textContent = `Blood Type: ${type}, Units Available: ${units}`;
        availabilityDiv.appendChild(p);
    }
}

function donateBlood() {
    alert("Thank you for your willingness to donate! Please visit our nearest center.");
}

document.getElementById('request-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const bloodType = document.getElementById('blood-type').value;
    const quantity = document.getElementById('quantity').value;
    alert(`Blood request for ${quantity} units of ${bloodType} has been submitted.`);
});

document.getElementById('donor-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const bloodType = document.getElementById('blood-type-donor').value;
    const contact = document.getElementById('contact').value;
    alert(`Thank you ${name} for registering as a donor! We will contact you at ${contact}.`);
});

function populateEventList() {
    const events = [
        "Blood Donation Camp - City Center, 10th Sept",
        "Free Health Checkup - Downtown, 15th Sept",
        "Blood Drive - East Side, 20th Sept"
    ];

    const eventList = document.getElementById('event-list');
    events.forEach(event => {
        const li = document.createElement('li');
        li.textContent = event;
        eventList.appendChild(li);
    });
}
