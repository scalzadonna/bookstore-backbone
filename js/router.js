var app = app || {};

app.AppRouter = Backbone.Router.extend({

    routes:{
        "":"list",
        "list":"list",
        "book/:id":"bookDetails"
    },

    list:function () {
        console.log('list');
        if (this.bookDetailView)
            this.bookDetailView.close();
        this.bookList = new app.Library();
        this.library = new app.LibraryView( this.bookList );
    },

    bookDetails:function (id) {
        if (!this.bookList)
            this.list();
        this.book = this.bookList.get(id);
        this.bookDetailView = new app.BookDetailView({model:this.book});
        this.library.close();
        $('#book-detail').html(this.bookDetailView.render().el);
    }
});