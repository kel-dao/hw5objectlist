var movies = [
  { "name": "Get Out", "myRating": "10"},
  { "name": "Ex Machina", "myRating": "10"},
  { "name": "Elle", "myRating": "10"},
  { "name": "The Princess Bride", "myRating": "10"},
];

$(document).ready(function(){
var tbody = $('#movies tbody'),
    props = ["name", "myRating"];
    $.each(movies, function(i, movie) {
var tr = $('<tr>');
    $.each(props, function(i, prop) {
    $('<td>').html(movie[prop]).appendTo(tr);  
  });
    tbody.append(tr);
    console.log(movie);
});
})