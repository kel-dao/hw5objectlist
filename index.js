var movies = [
  { "name": "Get Out", "myRating": "10", "deleteRow": "delete"},
  { "name": "Ex Machina", "myRating": "10", "deleteRow": "delete"},
  { "name": "Elle", "myRating": "10", "deleteRow": "delete"},
  { "name": "The Princess Bride", "myRating": "10", "deleteRow": "delete"},
];

function displayMovies() {
    var tbody = $('#movies tbody');
    var props = ["name", "myRating", "deleteRow"];
    $.each(movies, function(i, movie) {
        var tr = $('<tr>');
        $.each(props, function(i, prop) {
            $('<td>').html(movie[prop]).appendTo(tr);  
        });
        tbody.append(tr);
    });  
}

$(document).ready(function(){
    displayMovies();
    /* here is where i will try to add form to array */
    $( "#myForm" ).submit(function( event ) {
        var values = {};
        $.each($('#myForm').serializeArray(), function(i, field) {
            values[field.name] = field.value;
        });
        movies.push(values);
        console.log(movies);
        var tbody = $('#movies tbody');
        tbody.empty();
        displayMovies();
        event.preventDefault();
    });
});

/* here is where i will try to hide and seek */

$(document).ready(function(){
    $("#form").hide();
    $("#hidenseek").click(function(){
        $("#table").hide();
    });
    $("#hidenseek").click(function(){
        $("#form").show();
    });
});

$(document).ready(function(){
    $("#submit").click(function(){
        $("#form").hide();
    });
    $("#submit").click(function(){
        $("#table").show();
    });
});
