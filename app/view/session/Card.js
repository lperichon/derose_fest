Ext.define('DeRoseFest.view.session.Card', {

    extend: 'Ext.NavigationView',
    xtype: 'sessionContainer',

    config: {
        id: "sessions",
        title: 'Vivências',
        iconCls: 'time',
        defaultBackButtonText: "Atras",

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
