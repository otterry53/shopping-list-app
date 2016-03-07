//Step one - Function Definitions
//function to add items in list
function addItems() {
    // alert("I've just activated the addItems() function");
    var itemValue = $('#addItemValue').val();
    // alert(itemValue);
    //validate input
    if (itemValue.length === 0) {
        alert('You have to add an item!!!');
    } else {
        var itemCategory = $('.dropdown').val();
        // alert(itemCategory);
        //validate input
        if (itemCategory == "category") {
            alert('You have to choose a category!!!');
        } else if (itemCategory == "bread-bakery") {
            //dynamically create one row inside the produce column
            var rowBreadBakery = $('<li><span class="list">' + itemValue + '</span><button class="delete">X</button><input type="checkbox" class="checkbox"></li>');
            //add each row to the previous ones
            $('.bread-bakery ul').append(rowBreadBakery);
            //empty the input box afer submit by resetting the value
            itemValue = $('#addItemValue').val('');
            itemCategory = $('.dropdown').val("category");
        } else if (itemCategory == "canned-jar") {
            var rowCannedJar = $('<li><span class="list">' + itemValue + '</span><button class="delete">X</button><input type="checkbox" class="checkbox"></li>');
            $('.canned-jar ul').append(rowCannedJar);
            itemValue = $('#addItemValue').val('');
            itemCategory = $('.dropdown').val("category");
        } else if (itemCategory == "cleaning") {
            var rowCleaning = $('<li><span class="list">' + itemValue + '</span><button class="delete">X</button><input type="checkbox" class="checkbox"></li>');
            $('.cleaning ul').append(rowCleaning);
            itemValue = $('#addItemValue').val('');
            itemCategory = $('.dropdown').val("category");
        } else if (itemCategory == "dairy") {
            var rowDairy = $('<li><span class="list">' + itemValue + '</span><button class="delete">X</button><input type="checkbox" class="checkbox"></li>');
            $('.dairy ul').append(rowDairy);
            itemValue = $('#addItemValue').val('');
            itemCategory = $('.dropdown').val("category");
        } else if (itemCategory == "dry-goods") {
            var rowDryGoods = $('<li><span class="list">' + itemValue + '</span><button class="delete">X</button><input type="checkbox" class="checkbox"></li>');
            $('.dry-goods ul').append(rowDryGoods);
            itemValue = $('#addItemValue').val('');
            itemCategory = $('.dropdown').val("category");
        } else if (itemCategory == "frozen") {
            var rowFrozen = $('<li><span class="list">' + itemValue + '</span><button class="delete">X</button><input type="checkbox" class="checkbox"></li>');
            $('.frozen ul').append(rowFrozen);
            itemValue = $('#addItemValue').val('');
            itemCategory = $('.dropdown').val("category");
        } else if (itemCategory == "meat-deli") {
            var rowMeatDeli = $('<li><span class="list">' + itemValue + '</span><button class="delete">X</button><input type="checkbox" class="checkbox"></li>');
            $('.meat-deli ul').append(rowMeatDeli);
            itemValue = $('#addItemValue').val('');
            itemCategory = $('.dropdown').val("category");
        } else if (itemCategory == "paper") {
            var rowPaper = $('<li><span class="list">' + itemValue + '</span><button class="delete">X</button><input type="checkbox" class="checkbox"></li>');
            $('.paper ul').append(rowPaper);
            itemValue = $('#addItemValue').val('');
            itemCategory = $('.dropdown').val("category");
        } else if (itemCategory == "personal") {
            var rowPersonal = $('<li><span class="list">' + itemValue + '</span><button class="delete">X</button><input type="checkbox" class="checkbox"></li>');
            $('.personal ul').append(rowPersonal);
            itemValue = $('#addItemValue').val('');
            itemCategory = $('.dropdown').val("category");
        } else if (itemCategory == "pet") {
            var rowPet = $('<li><span class="list">' + itemValue + '</span><button class="delete">X</button><input type="checkbox" class="checkbox"></li>');
            $('.pet ul').append(rowPet);
            itemValue = $('#addItemValue').val('');
            itemCategory = $('.dropdown').val("category");
        } else if (itemCategory == "produce") {
            var rowProduce = $('<li><span class="list">' + itemValue + '</span><button class="delete">X</button><input type="checkbox" class="checkbox"></li>');
            $('.produce ul').append(rowProduce);
            itemValue = $('#addItemValue').val('');
            itemCategory = $('.dropdown').val("category");
        } else {
            var rowOther = $('<li><span class="list">' + itemValue + '</span><button class="delete">X</button><input type="checkbox" class="checkbox"></li>');
            $('.other ul').append(rowOther);
            itemValue = $('#addItemValue').val('');
            itemCategory = $('.dropdown').val("category");
        }
    }
};


//delete an item when the x after it is pushed

function deleteItems() {
    //alert("I've just activated the deleteItems() function");
    $(this).parent().remove();
}

//put a line through an item and change it to red when box is checked

function checkoffItems() {
    //alert("I've just activated the checkoffItems() function");
    $(this).parent().toggleClass('checked');
}

//remove all items from shopping list

function deleteallItems() {
    //alert("I've just activated the deleteallItems() function");
    $('.list-column li').empty();
}


// Step two - function usage

$(document).ready(function () {
    /*on click on the "#addItem" button activate function called addItems()*/
    $("#addItem").on("click", function () {
        addItems();
    });
    /*on click on the ".delete-all" button activate function called deleteallItems()*/
    $(".delete-all").on("click", function () {
        deleteallItems();
    });
});
/*on click on the ".checkbox" button activate function called checkoffItems()*/
$(document).on('click', '.checkbox', checkoffItems)
    /*on click on the ".delete" X activate function called deleteItems()*/
$(document).on('click', '.delete', deleteItems);
