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

    // if (fieldIndex == inputs.length - 1 && isValidInput) {
    //     submit();
    // }
}

function handleOnPasteOtp(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length === inputs.length) {
        inputs.forEach((input, index) => (input.value = value[index]));
        // submit();
    }
}

// function submit() {
//     console.log("Submitting...");
//     // 👇 Entered OTP
//     let otp = "";
//     inputs.forEach((input) => {
//         otp += input.value;
//         input.disabled = true;
//         input.classList.add("disabled");
//     });
//     console.log(otp);
// }
 
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

// $(document).ready(function () {
//     $(".next-step").click(function () {
//         $(".step-container .step-separator[data-step='" + currentStep + "']").addClass('active');

//         currentStep++;

//         $(".step-container .step[data-step='" + currentStep + "']").addClass('active');

//     });
// })
$('.step').click(function(){
    $(this).addClass('active').prev('.step-separator').addClass('active');

    // Check if the SVG is already appended
    if ($(this).find('svg').length === 0) {
        $(this).append(' <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M12 1.8C12 2.0047 11.9233 2.2095 11.7698 2.3655L5.4841 8.7655C5.33125 8.9225 5.12991 9 4.92857 9C4.72723 9 4.52638 8.92188 4.37317 8.76562L1.23031 5.56563C1.07685 5.41 1 5.205 1 5C1 4.543 1.36708 4.2 1.78571 4.2C1.98676 4.2 2.1879 4.27813 2.34112 4.43438L4.92857 7.07L10.6594 1.235C10.8116 1.07825 11.0129 1 11.2143 1C11.6342 1 12 1.3425 12 1.8Z" fill="white" stroke="white"/></svg>');
    }

    var val = $(this).attr('data-target');
    $('#' + val).addClass('active').siblings().removeClass('active');
});

$(function() {
    var count = 45;
    var interval = setInterval(function() {
        $('#countdown').text(count-- + 's');
        if (count < 0) clearInterval(interval);
    }, 1000);
});


$('.customer-enquiry, .contact-me').click(function(){
    $('.enquiry-container, .black-overlay').toggleClass('active');
})
$('.black-overlay').click(function(){
    $(this).removeClass('active')
    $('.enquiry-container, .custom-modal').removeClass('active');
})
$('.collapse-menu').click(function(){
    $(this).children('span').toggle();
    $('.sidebar').toggleClass('collapsed');  
    $(this).siblings('.contact-info').toggleClass('opacity-0');
})
$('.schedule-list .green-btn').click(function(){
    $(this).addClass('d-none');
    $(this).siblings('.signature').removeClass('d-none');
})
$('.signature .close').click(function(){
    $(this).parent().addClass('d-none');
    $(this).parent().siblings('.green-btn').removeClass('d-none');
})
$(' .profile-container .image span').click(function(){
    $(this).parent().siblings('form').find('input').removeAttr('disabled');
})
$('.open-popup').click(function(){
   var target= $(this).attr('data-target');
   $('#'+ target).addClass('active');
   $('.black-overlay').toggleClass('active');
})
$('.custom-modal .close, .custom-modal .black-btn').click(function(){
    $(this).parents('.custom-modal').removeClass('active'); 
    $('.black-overlay').removeClass('active');
})
$('#name').on('input', function() {
    $(this).val($(this).val().replace(/[^a-zA-Z]/g, ''));
});