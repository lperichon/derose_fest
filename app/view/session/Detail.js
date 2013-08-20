Ext.define('DeRoseFest.view.session.Detail', {

	extend: 'Ext.Container',
	xtype: 'session',

	config: {

		layout: 'vbox',
		title: '',

		items: [
			{
                flex: 1,
                layout: 'fit',
                scrollable: 'vertical',
				xtype: 'sessionInfo'
			},
            {
                xtype: 'component',
                cls: 'dark',
                html: 'Disertantes'
            },
			{
                flex: 2,
				xtype: 'speakers',
				store: 'SessionSpeakers'

			}
		]

	}
});
