(function ($) {

   $(".normal-step .btn").click(function () {
      $(".normal-step").hide();
      $(".normal-step2").css('display', 'block');
   });

   $(".normal-step2 .movetocopay").click(function () {
      $(".normal-step2").hide();
      $(".copay-step2").css('display', 'block');
   });

   $(".normal-step2 .movetoreimbursement").click(function () {
      $(".normal-step2").hide();
      $(".reimbursement-step2").css('display', 'block');
   });

   // Reimbursement
   $(".reimbursement-step2 .btn").click(function () {
      $(".reimbursement-step2").hide();
      $(".reimbursement-step3").css('display', 'block');
   });
   $(".reimbursement-step3 .btn").click(function () {
      $(".reimbursement-step3").hide();
      $(".reimbursement-step4").css('display', 'block');
   });
   $(".reimbursement-step4 .btn").click(function () {
      $(".reimbursement-step4").hide();
      $(".reimbursement-step5").css('display', 'block');
   });
   $(".reimbursement-step5 .btn").click(function () {
      $(".reimbursement-step5").hide();
      $(".reimbursement-step3").css('display', 'block');
   });
   $(".reimbursement-step5 .editbank").click(function () {
      $(".reimbursement-step5").hide();
      $(".reimbursement-step6").css('display', 'block');
   });
   $(".reimbursement-step6 .btn").click(function () {
      $(".reimbursement-step6").hide();
      $(".reimbursement-step7").css('display', 'block');
   });
   $(".reimbursement-step6 .close-button").click(function () {
      $(".reimbursement-step6").hide();
      $(".reimbursement-step7").css('display', 'block');
   });
   $(".reimbursement-step7 .btn").click(function () {
      $(".reimbursement-step7").hide();
      $(".reimbursement-step8").css('display', 'block');
   });
   $(".reimbursement-step8 .btn").click(function () {
      $(".reimbursement-step8").hide();
      $(".reimbursement-step6").css('display', 'block');
   });

   $(".editable-routingnumber").click(function () {
      $("#routingnumber").removeAttr('disabled');
   });

   $(".editable-accountnumber").click(function () {
      $("#accountnumber").removeAttr('disabled');
   });

   // Co-Pay
   $(".choose-payment .choose-copaybutton").click(function () {
      $(".choose-payment").hide();
      $(".copay-step2").css('display', 'block');
   });

   $(".choose-payment .choose-reimbursementbutton").click(function () {
      $(".choose-payment").hide();
      $(".copay-step2").css('display', 'block');
   });

   $(".copay-step2 .amount-submitted").click(function () {
      $(".copay-step2").hide();
      $(".copay-step4").css('display', 'block');
   });

   $(".copay-step2 .back-to-first-step").click(function () {
      $(".copay-step2").hide();
      $(".normal-step").css('display', 'block');
   });

   $(".copay-step2 .move-to-third-step").click(function () {
      $(".copay-step2").hide();
      $(".copay-step3").css('display', 'block');
   });

   $(".copay-step3 .back-to-first-step").click(function () {
      $(".copay-step3").hide();
      $(".normal-step").css('display', 'block');
   });

   $(".copay-step3 .move-to-fourth-step").click(function () {
      $(".copay-step3").hide();
      $(".copay-step4").css('display', 'block');
   });

   $(".copay-step4 .back-to-first-step").click(function () {
      $(".copay-step4").hide();
      $(".normal-step").css('display', 'block');
   });

   $(".copay-step4 .back-to-second-step").click(function () {
      $(".copay-step4").hide();
      $(".copay-step2").css('display', 'block');
   });

})(jQuery);