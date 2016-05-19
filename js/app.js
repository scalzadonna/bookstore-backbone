

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
var tmplText = $('#muppet-item-tmpl').html();
console.log(tmplText);
var muppetTmpl = _.template(tmplText);

muppets.fetch().then(function() {
    _.each(muppets.models, function(mup){$('#muppets').append(muppetTmpl(mup.toJSON()))});
});


var KermitModel = Backbone.Model.extend({
    url: 'http://demo2352365.mockable.io/muppets/1',
    defaults: {
        name: '',
        occupation: ''
    }
});

var KermitView = Backbone.View.extend({
    el: '#muppets-list',

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
//
// var kermit = new KermitModel();
// var kermitView = new KermitView({model: kermit});




