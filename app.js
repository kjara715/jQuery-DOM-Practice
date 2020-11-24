// $(document).ready( function(){
//     console.log("Let's get ready to party with jQuery!")
// });

//SHORTHAND -1
$(function(){
    console.log("Let's get ready to party with jQuery!");
});

//2 add class to images under articles
$("article > img").addClass('image-center');

//3 remove last paragraph in the article
$("article > p").last().remove();

//4 Set the font size of the title to be a random pixel size from 0 to 100.
$('#title').css("font-size", `${Math.floor(Math.random()*100)}px`);

//5 Add an item to the list; it can say whatever you want.
$("ol").append("<li>I added another li, woooooo!</li>")

//6 Scratch that; the list is silly. 
//Empty the aside and put a paragraph in it apologizing for the list’s existence.
$("aside").empty().append("<p>Hi I'm a new paragraph</p>")


//7 When you change the numbers in the three inputs on the bottom, 
// the background color of the body should change to match whatever
//  the three values in the inputs are.

let values=$('.form-control')
$('body').css('background-color', `rgb(${values[0].val()},${values[1].val()},${values[2].val()})`);
// $("#form-control")
// $("body").css('background-color', )

//8 Add an event listener so that when you click on the image,
//  it is removed from the DOM.
$('img').on('click', function(e){
    e.target.remove();
})