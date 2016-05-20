var app = app || {};

app.AppRouter = Backbone.Router.extend({

    routes:{
        "":"list",
        "book/:id":"bookDetails"
    },

    list:function () {
        this.bookList = new app.Library();
        this.library = new app.LibraryView( this.bookList );
    },

    bookDetails:function (id) {
        this.book = this.bookList.get(id);
        this.bookDetailView = new app.BookDetailView({model:this.book});
        this.library.close();
        $('#book-detail').html(this.bookDetailView.render().el);
    }
});