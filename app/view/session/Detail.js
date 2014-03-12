var share_handler = function (btn, evt) {
    window.plugins.socialsharing.share('Message only');
}
var toggle_checkin_handler = function (btn, evt) {
    date = new Date();
    date.setMinutes(date.getMinutes()+1);
    window.plugin.notification.local.add({
        id:         "1",  // A unique id of the notifiction
        date:       date,    // This expects a date object
        message:    "Testing 123",  // The message that is displayed
        title:      "Test"  // The title of the message
    });
}

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
                        handler: toggle_checkin_handler
                    },
                    {
                        xtype: 'button',
                        ui: 'share',
                        margin: '10',
                        text: 'Share',
                        handler: share_handler
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
