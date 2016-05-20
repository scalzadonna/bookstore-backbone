var app = app || {};

app.BookDetailView = Backbone.View.extend({
    template: _.template( $('#bookDetailsTemplate').html()),

    events: {},

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});
