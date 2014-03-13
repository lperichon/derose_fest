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
                        ui: 'notify_button',
                        margin: '10',
                        text: 'Asistire',
                        id: 'notify_button'
                    },
                    {
                        xtype: 'button',
                        ui: 'cancel_button',
                        margin: '10',
                        text: 'No Asistire',
                        id: 'cancel_button'
                    },
                    {
                        xtype: 'button',
                        ui: 'share_button',
                        margin: '10',
                        text: 'Compartí',
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
