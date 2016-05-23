TabView = new (Backbone.View.extend({
        events: [],
        tabId: '',
        el: '#tabView',

        showTab: function (tab) {

            this.render();
        },

        render: function (){

        },

        closeTab: function (param){
            parent.closeTab(this.tabId);
            this.remove();
        }
    }
))();