function updateTextInput(val) {
    $("").value=val; 
}

const body = $('body')
const theList = $("<ul>"); //createUL
body.append(theList);
let myClass = 1; //initialize a class

$('#submit').on('click', function(e){
    e.preventDefault();
    theList.append($('<li>').addClass(`${myClass}`).text(`${$('#title').val()} has a rating of ${$('#rating').val()}`));
    $(`.${myClass}`).append($('<button>').html("Remove"));
    myClass++
});

$('ul').on('click', 'button', function(e){
    e.preventDefault();
    e.target.closest('li').remove();
})


    


// )