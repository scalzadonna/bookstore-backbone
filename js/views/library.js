var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#books',

    initialize: function(  ) {
        this.collection = new app.Library();    // UPDATED
        this.collection.on('reset', this.render, this);
        this.collection.on('add', this.renderBook, this);
        this.collection.fetch({reset: true});
    },

    events:{
        'click #add':'addBook'
    },

    // render library by rendering each book in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderBook( item );
        }, this );
    },

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