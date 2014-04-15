Ext.define('DeRoseFest.view.Main', {

	extend: 'Ext.tab.Panel',
	xtype: 'main',

	config: {

		tabBarPosition: 'bottom',
		tabBar: {
			ui: 'gray'
		},

		items: [
			{ xclass: 'DeRoseFest.view.session.Card' },
			{ xclass: 'DeRoseFest.view.speaker.Card' },
			{ xclass: 'DeRoseFest.view.about.Card'    }
		]
	}
});
