function Submit()
 {
    
    const name = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    

    
    if(/^[a-zA-Z]+$/.test(name))
        
        {
        console.log("Valid name");
        console.log("Name:", name);
        } 

        else  
        {
            alert("Type in letters");
        }
        
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Password:", password);

    
    console.log("Form submitted! Check the console for details.");
}
