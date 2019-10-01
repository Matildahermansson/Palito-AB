let form = document.getElementById('mailform');
let email = document.getElementById('email');
let message = document.getElementById('message');
let submitButton = document.getElementById('submitbutton');
let feeback = document.getElementById('feedback');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    // $.ajax({
    //     url: 'mail.php',
    //     type: 'POST',
    //     data: {
    //         email: email.value,
    //         message: message.value
    //     },

    //     success: function(res) {
    //         let jsonResp = JSON.parse(res);
    //         if(jsonResp.success === true) {
    //             mailSuccess();
    //         } else {
    //             console.log(res);
    //         }
    //     },

    //     error(xhr, status, error) {
    //         console.log(xhr, status, error)
    //     }
    // });
    mailSuccess();
});

function mailSuccess() {
    email.value = '';
    message.value = '';
    submitButton.style.display = 'none';
    feedback.innerText = "Your message has been sent!"
}




