

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
});