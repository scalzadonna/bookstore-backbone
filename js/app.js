var app = app || {};

$(function() {
    var books = [
        { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford'},
        { title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw'},
        { title: 'Scala for the Impatient', author: 'Cay S. Horstmann'},
        { title: 'American Psycho', author: 'Bret Easton Ellis'},
        { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke'}
    ];

    new app.LibraryView( books );
});