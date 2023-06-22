$(document).ready(function () {


    $("button").click(function () {

        $.ajax({
            type: "POST",
            url: "submit.php",
            data: {
                name: $('#username').val(),
                email: $('#email').val(),
            },
            success: function (data) {
                alert(data);
            },
            error: function (data) {
                alert(data);
            }
        });

    });
});






