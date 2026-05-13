document.getElementById("registrationForm")
.addEventListener("submit", function (e) {

    e.preventDefault();

    let isValid = true;

    // Clear old errors
    document.querySelectorAll("small").forEach((el) => {
        el.innerText = "";
    });

    // Input Values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const dob = document.getElementById("dob").value;
    const qualification = document.getElementById("qualification").value;
    const grade = document.getElementById("grade").value.trim();
    const course = document.getElementById("course").value;
    const batch = document.getElementById("batch").value;
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const pincode = document.getElementById("pincode").value.trim();
    const guardianName = document.getElementById("guardianName").value.trim();
    const guardianMobile = document.getElementById("guardianMobile").value.trim();
    const reference = document.getElementById("reference").value;

