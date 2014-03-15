Ext.define('DeRoseFest.view.speaker.Detail', {

	extend: 'Ext.Container',
	xtype: 'speaker',

	config: {

		layout: 'vbox',
		items: [
			{
                flex: 1,
                scrollable: 'vertical',
				xtype: 'speakerInfo'
			},
            {
                xtype: 'component',
                cls: 'dark',
                html: 'Vivências'
            },
			{
                flex: 1,
				xtype: 'list',
				store: 'SpeakerSessions',
				itemTpl: [
					'{title}'
				]
			}
		]

	}
});
