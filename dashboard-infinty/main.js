const inputs = document.querySelectorAll(".otp-field input");

inputs.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener("keyup", handleOtp);
    input.addEventListener("paste", handleOnPasteOtp);
});

function handleOtp(e) {
    const input = e.target;
    let value = input.value;
    let isValidInput = value.match(/[0-9a-z]/gi);
    input.value = "";
    input.value = isValidInput ? value[0] : "";

    let fieldIndex = input.dataset.index;
    if (fieldIndex < inputs.length - 1 && isValidInput) {
        input.nextElementSibling.focus();
    }

    if (e.key === "Backspace" && fieldIndex > 0) {
        input.previousElementSibling.focus();
    }

    if (fieldIndex == inputs.length - 1 && isValidInput) {
        submit();
    }
}

function handleOnPasteOtp(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length === inputs.length) {
        inputs.forEach((input, index) => (input.value = value[index]));
        submit();
    }
}

function submit() {
    console.log("Submitting...");
    // 👇 Entered OTP
    let otp = "";
    inputs.forEach((input) => {
        otp += input.value;
        input.disabled = true;
        input.classList.add("disabled");
    });
    console.log(otp);
}
 
$('.otp-form').hide();
$('.login-form .green-btn').click(function(){
    $(this).parents('.login-form').slideUp();
    $('.otp-form').slideDown();
})
$('.return').click(function(){
    $(this).parents('form').slideUp();
    $(this).parents('form').siblings().slideDown();
})

var currentStep = 1;

$(document).ready(function () {
    $(".next-step").click(function () {
        $(".step-container .step-separator[data-step='" + currentStep + "']").addClass('active');

        currentStep++;

        $(".step-container .step[data-step='" + currentStep + "']").addClass('active');

    });
})

$('.customer-enquiry').click(function(){
    $('.enquiry-container, .black-overlay').toggleClass('active');
})
$('.black-overlay').click(function(){
    $(this).removeClass('active')
    $('.enquiry-container').removeClass('active');
})
$('.collapse-menu').click(function(){
    $(this).children('span').toggle();
    $('.sidebar').toggleClass('collapsed');  
    $(this).siblings('.contact-info').toggleClass('opacity-0');
})
