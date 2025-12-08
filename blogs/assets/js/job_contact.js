document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("job-contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        var form = this;
        var formData = new FormData(form);
        
        var xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action, true);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.status === "success") {
                    document.getElementById("status").innerHTML = "<p style='color: green;'>" + response.message + "</p>";
                    form.reset();
                } else {
                    document.getElementById("status").innerHTML = "<p style='color: red;'>" + response.message + "</p>";
                }
            } else {
                document.getElementById("status").innerHTML = "<p style='color: red;'>There was a problem sending your message.</p>";
            }
        };
        xhr.send(formData);
    });
});
