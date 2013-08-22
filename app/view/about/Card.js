Ext.define('DeRoseFest.view.about.Card', {

	extend: 'Ext.NavigationView',
	xtype: 'aboutContainer',

	config: {
		defaultBackButtonText: "Atras",
		title: 'Info',
        iconCls: 'more',

        autoDestroy: false,

		items: [
			{
				xtype: 'aboutList'
			}
		]
	}
});
