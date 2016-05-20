var app = app || {};

app.Library = Backbone.Collection.extend({
    model: app.Book,
    url: 'http://local.youbim:4711/api/books'
});