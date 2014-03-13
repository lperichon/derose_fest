Ext.define('DeRoseFest.view.session.Detail', {

	extend: 'Ext.Container',
	xtype: 'session',

	config: {

		layout: 'vbox',
		title: '',

		listeners: {
            painted : function() { document.getElementsByClassName('x-toolbar-dark')[0].style.height='46px'; }
        },		
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
                html: 'Acciones'
            },
            {
                xtype: 'toolbar',
                ui: 'leather',
                layout:{
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        ui: 'toggle-checkin',
                        margin: '10',
                        text: 'Check In/Out',
                        id: 'checkin_button'
                    },
                    {
                        xtype: 'button',
                        ui: 'share',
                        margin: '10',
                        text: 'Share',
                        id: 'share_button'
                    }
                ]
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
