$(document).ready(function() {
    $("#save").click(function() {

        const date = $("#date").val();
        const content = $("#description").val();
        const time = $("#time").val();
        const category = $("#category").val();

        if (date == "" || content == "" || category == "") {
            alert("Please check inputs");
        }
        if (date.length != "" && content.length != "" && category.length != "") {
            $.ajax({
                type: "POST",
                url: "./../api/insertnotes.php",
                data: { "date": date, "content": content, "time": time, "category": category },
                datatype: 'JSON',
                success: function(feedback) {
                    feedback = $.parseJSON(feedback);
                    if (feedback.status == 'error') {

                    } else if (feedback.status == 'success') {
                        $("#error-message").html(feedback.message);
                        location.reload();

                        getTheDay();

                    }
                }
            })
        }
    })

})