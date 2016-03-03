$(document).ready(function () {

    $('.input-form').hover(function () {
            $(this).css('outline-color', 'red');
        }):




        //how do I tie it into dropdown menu?//

        var $toAdd = $('#addItemValue');
    $('.header-container .input-form').keydown(function (key) {
        if (key.keyCode == 13) {
            $('.produce .list-column').append('toAdd');
        }
    });
});





//Code for changing text decoration when box is clicked on.//

$('.checkbox').click(function)();
$('li').addClass('.checked');
});







//Code for removing an item when delete X is clicked on - how do I target that particular li//
$('.list-column .delete').mousedown(function () {
    $('.li').remove();
});



//Code for removing all//
$('.delete-all').mousedown(function () {
    $('.li').remove();

});


//.val()//
