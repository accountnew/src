var $ = require('jquery')
$(document).ready(function () {
    $("form").on("submit",function (e) {
        e.preventDefault(); //To not refresh the page
        $("form").remove(); //Remove the form
        $('.form-success').css('display', 'flex'); //Shows success message
    });
});