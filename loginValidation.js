// function print(printAble) {
//     console.log(printAble);
// }

// function submit() {
//     var emailFieldValue = document.getElementById("email").value;
//     var passwordFieldValue = document.getElementById("password").value;
//     if(emailFieldValue == "admin@admin.com" && passwordFieldValue == "admin") {
//         document.location.href = "http://127.0.0.1:5500/banking.html"
//     } else {
//         window.open("http://127.0.0.1:5500/error.html","_blank");
//     }
// }

var submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", function () {
    var emailFieldValue = document.getElementById("email").value;
    var passwordFieldValue = document.getElementById("password").value;
    if (emailFieldValue == "admin@admin.com" && passwordFieldValue == "admin") {
        document.location.href = "http://127.0.0.1:5500/banking.html"
    } else {
        window.open("http://127.0.0.1:5500/error.html", "_blank");
    }
});