
@import(URL'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit');
var onloadCallback = function() {
    alert("grecaptcha is ready!");
  };

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = this;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "contact.php", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Success
            form.reset();
            alert(xhr.responseText);
        } else {
            // Error
            alert("Error: Unable to submit form. Please try again later.");
        }
    };
    xhr.send(formData);
});