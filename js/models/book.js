var app = app || {};

app.Book = Backbone.Model.extend({
    
    defaults: {
        title: 'No title',
        author: 'Unknown'
    },

    parse: function( response ) {
        response.id = response._id;
        return response;
    }
});