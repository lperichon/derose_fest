Ext.define('DeRoseFest.view.speaker.Card', {

	extend: 'Ext.NavigationView',
	xtype: 'speakerContainer',

	config: {
		defaultBackButtonText: "Atras",
		tab: {
			title: 'Disertantes',
			iconCls: 'team',
			action: 'speakersTab'
		},

        autoDestroy: false,

		items: [
			{
				xtype: 'speakers',
				store: 'Speakers',
				pinHeaders: false
			}
		]
	}
});
