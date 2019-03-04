var pcfe = $(".password-container .fa-eye"),
    pcfes = $(".password-container .fa-eye-slash"),
    pccfe = $(".password-conf-container .fa-eye"),
    pccfes = $(".password-conf-container .fa-eye-slash");

function tP () {
    $(pcfe).toggle();
    $(pcfes).toggle();
    $("#password").attr("type", $(pcfe).is(":visible") ? "password" : "text");
}

function tPC () {
    $(pccfe).toggle();
    $(pccfes).toggle();
    $("#password-conf").attr("type", $(pccfe).is(":visible") ? "password" : "text");
}

$(document).ready(function () {
    $(pcfe).click(tP);
    $(pcfes).click(tP);
    $(pccfe).click(tPC);
    $(pccfes).click(tPC);
});