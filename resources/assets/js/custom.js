$( document ).ready(function() {
    $('attribute-button').each(function() {
        $(this).on("click", function() {
            console.log($(this).attr('id'));
        })
    });
});
