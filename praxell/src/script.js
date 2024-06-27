 
    $(document).ready(function() {
    $(".otp-field input").each(function(index) {
        $(this).data("index", index);
        $(this).on("keyup", handleOtp);
        $(this).on("paste", handleOnPasteOtp);
    });
});

function handleOtp(e) {
    const input = $(this);
    let value = input.val();
    let isValidInput = value.match(/[0-9a-z]/gi);
    input.val("");
    input.val(isValidInput ? value[0] : "");

    let fieldIndex = input.data("index");
    const inputs = $(".otp-field input");
    if (fieldIndex < inputs.length - 1 && isValidInput) {
        input.next().focus();
    }

    if (e.key === "Backspace" && fieldIndex > 0) {
        input.prev().focus();
    }
}

function handleOnPasteOtp(e) {
    const data = e.originalEvent.clipboardData.getData("text");
    const value = data.split("");
    const inputs = $(".otp-field input");
    if (value.length === inputs.length) {
        inputs.each(function(index) {
            $(this).val(value[index]);
        });
        submit();
    }
}
