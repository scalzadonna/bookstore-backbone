var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#books',
    template: _.template( $( '#library' ).html() ),
    initialize: function(col) {
        this.collection = col;
        this.collection.on('reset', this.render, this);
        this.collection.on('add', this.renderBook, this);
        this.collection.fetch({reset: true});
    },

    events:{
        'click #add':'addBook'
    },

    close: function () {
        $(this.el).unbind();
        $(this.el).empty();
    },

    // render library by rendering each book in its collection
    render: function() {
        $(this.el).html(this.template);
        this.collection.each(function( item ) {
            this.renderBook( item );
        }, this );
    },

    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderBook: function( item ) {
        var bookView = new app.BookView({
            model: item
        });
        this.$el.append( bookView.render().el );
    },

    addBook: function( e ) {
        e.preventDefault();

        var formData = {};

        $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
            if( $( el ).val() != '' )
            {
                formData[ el.id ] = $( el ).val();
            }
        });

        this.collection.create( formData );
    }
});