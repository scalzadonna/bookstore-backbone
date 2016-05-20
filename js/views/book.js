var app = app || {};

app.BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookContainer',
    template: _.template( $( '#bookTemplate' ).html() ),

    events: {
        'click .delete': 'deleteBook',
        'click .show': 'showBook'
    },

    showBook: function() {
        var bookDetailView = new app.BookDetailView({model:this.model});
        $('#book-detail').html(bookDetailView.render().el);
    },

    deleteBook: function() {
        this.model.destroy();
        this.remove();
    },

    render: function() {
        this.$el.html( this.template( this.model.attributes ) );
        return this;
    }

});