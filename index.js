var movies = [
  { "name": "Get Out", "myRating": "10", "deleteRow": "delete"},
  { "name": "Ex Machina", "myRating": "10"},
  { "name": "Elle", "myRating": "10"},
  { "name": "The Princess Bride", "myRating": "10"},
];

$(document).ready(function(){
var tbody = $('#movies tbody'),
    props = ["name", "myRating", "deleteRow"];
    $.each(movies, function(i, movie) {
var tr = $('<tr>');
    $.each(props, function(i, prop) {
    $('<td>').html(movie[prop]).appendTo(tr);  
  });
    tbody.append(tr);
    console.log(movie);
});
})

/* here is where i will try to delete rows */

function deleteRow(row)
{
    var i=row.parentNode.parentNode.rowIndex;
    document.getElementById('POITable').deleteRow(i);
}
