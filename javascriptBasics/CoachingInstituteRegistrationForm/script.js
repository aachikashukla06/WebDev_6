// SubmitButton
document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const qualification = document.getElementById("qualification").value;
    const marks = document.getElementById("marks").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const pin = document.getElementById("pin").value;

    const timings = [];
    
    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    // console.log(gndr);
    // console.log(timings);
    console.log("Full Name:",fullName);
    console.log("Email:",email);
    console.log("Phone:", phone);
    console.log("Date Of Birth:", dob);
    console.log("Gender:", gender);
    console.log("Qualification:",qualification);
    console.log("Marks:", marks);
    console.log("Timings:", timings);
    console.log("Course:",course);
    console.log("Address:", address);
    console.log("City:",city);
    console.log("Pin Code:", pin)
  });


    validateData(registrationData){

    }
// ResetButton
document
  .getElementById("registrationFrom")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });

  function validateData(data) {
    
  }