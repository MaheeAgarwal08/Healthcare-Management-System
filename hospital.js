function searchHospitals() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const hospitals = document.querySelectorAll('.hospital');

    hospitals.forEach(hospital => {
        const hospitalName = hospital.querySelector('h2').textContent.toLowerCase();
        if (hospitalName.includes(searchInput)) {
            hospital.style.display = 'block';
        } else {
            hospital.style.display = 'none';
        }
    });
}

function bookBed(hospitalName) {
    document.getElementById('hospitalName').textContent = hospitalName;
    document.getElementById('bookingModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Bed booked successfully!");
    closeModal();
});

