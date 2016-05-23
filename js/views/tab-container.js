TabContainerView = new (Backbone.View.extend({
    events: {
    },

    el: '#tabContainer',
    tabViews: {}, // aca iria una pila de hasta 5 elementos

    openTab: function (tab) {

        //chequea si existe y sino la crea y la agrega a la lista de tabs
        if (!this.tabViews contains tab.tabId)
            tabViews.add(this.createTabView(params));
        //mostrar nueva tab
        this.tabViews[tabId].render(params);
    },

    createTabView: function () {
        var tab = new TabView();
        return tab;
    },

    closeTab: function (param){
        this.tabViews.remove(param.id);
    }
    }
))();