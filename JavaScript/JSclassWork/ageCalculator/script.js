document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();

    const dob = document.getElementById("date").value;
    const today = document.getElementById("today");
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0))
 {
        age--;
    }

    document.getElementById("result").textContent = `Your age is ${age} years.`;
});