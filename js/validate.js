// обработка формы
$(".form").each(function() {
  $(this).validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Please specify your name",
      minlength: "The name must be at least two letters"
    },
    email: {
      required: "We need your email address to contact you",
      email: "email must be in the format of name@domain.com"
    },
    phone: {
      required: "Mobile phone is nesessary",
      minlength: "The phone must be at least 10 digits",
    },
  }
});
});

$(document).ready(function(){
$('.phone').mask('+7(000)-000-00-00');
});

$('.alpha-no-spaces').mask("A", {
 translation: {
  "A": { pattern: /[\w@\-.+]/, recursive: true }
 }
});

AOS.init();