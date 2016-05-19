

var MuppetModel = Backbone.Model.extend({
    defaults: {
        id: null,
        name: null,
        occupation: null
    }
});

var MuppetsCollection = Backbone.Collection.extend({
    url: 'http://demo2352365.mockable.io/muppets',
    model: MuppetModel,

    parse: function(data) {
        return data.muppets;
    }
});

var muppets = new MuppetsCollection();

muppets.fetch().then(function() {
    console.log(muppets.length); // >> length: 1
    _.each(muppets.models, function(mup){console.log(mup.get('name'))});
});


var KermitModel = Backbone.Model.extend({
    url: 'http://demo2352365.mockable.io/muppets/1',
    defaults: {
        name: '',
        occupation: ''
    }
});

var KermitView = Backbone.View.extend({
    el: '#muppets',

    initialize: function() {

        this.model.fetch();
        this.render();
    },

    render: function() {
        var html = '<b>Name:</b> ' + this.model.get('name');
        html += ', occupation: ' + this.model.get('occupation');
        this.$el.html(html);
        return this;
    }
});

var kermit = new KermitModel();
var kermitView = new KermitView({model: kermit});




