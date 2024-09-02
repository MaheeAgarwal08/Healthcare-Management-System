function scheduleAppointment(doctorName) {
    document.getElementById("doctorName").innerText = "Schedule Appointment with " + doctorName;
    document.getElementById("appointmentModal").style.display = "block";
}

function closeModal() {
    document.getElementById("appointmentModal").style.display = "none";
}

document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Appointment confirmed!");
    closeModal();
});
