var facebook_handler = function (btn, evt) {
    window.location = 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fderosefestival.com.ar';
}

var twitter_handler = function (btn, evt) {
    window.location = 'http://twitter.com/home?status=Voy%20a%20participar%20de%20XXX%20en%20el%20DeroseFestival%20';
}

var plus_handler = function (btn, evt) {
    window.location = 'https://plus.google.com/share?url=http://www.derosefestival.com.ar';
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
                html: 'Compartí en la web'
            },
            {
                xtype: 'toolbar',
                ui: 'grey',
                items: [

                    {
                        xtype: 'button',
                        itemId: 'facebook_share',
                        cls: 'facebook_share',
                        margin: '10',
                        ui: 'action',
                        text: 'Facebook',
                        handler: facebook_handler
                    },
                    {
                        xtype: 'button',
                        itemId: 'twitter_share',
						cls: 'twitter_share',
                        margin: '10',
                        ui: 'action',
                        text: 'Twitter'
                    },
                    {
                        xtype: 'button',
                        itemId: 'plus_share',
                        cls: 'plus_share',
                        margin: '10',
                        ui: 'decline',
                        text: 'Google+'
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
