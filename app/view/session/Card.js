Ext.define('DeRoseFest.view.session.Card', {

    extend: 'Ext.NavigationView',
    xtype: 'sessionContainer',

    config: {

        title: 'Vivencias',
        iconCls: 'time',

        autoDestroy: false,

        items: [
            {
                xtype: 'sessions',
                store: 'Sessions',
                grouped: true,
                pinHeaders: false
            }
        ]
    }
});
