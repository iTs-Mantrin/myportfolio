function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "manish.rajput@elasticemail.com",
    Password : "1305E6B46A04FB4042E867876A1456315CED",
    To : 'manish.rajput62647457@gmail.com',
    From : 'manish.rajput62647457@gmail.com',
    Subject : document.getElementById("name").value+" send enquiry from Portfolio",
    Body : 
    "Name: "+document.getElementById("name").value
    + "<br> Email: "+document.getElementById("email").value
    + "<br> Phone No: "+document.getElementById("phone").value
    + "<br> Message: "+document.getElementById("message").value
    }).then(
        message => alert("Message sent successfully")
    );
}