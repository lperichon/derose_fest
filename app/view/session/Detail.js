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
                html: 'Compartilhe este aplicativo'
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
                        ui: 'facebook-share',
                        margin: '10',
                        text: 'Facebook',
                        handler: facebook_handler
                    },
                    {
                        xtype: 'button',
                        margin: '10',
                        ui: 'twitter-share',
                        text: 'Twitter',
                        handler: twitter_handler
                    },
                    {
                        xtype: 'button',
                        ui: 'plus-share',
                        margin: '10',
                        text: 'Google+',
                        handler: plus_handler
                    }
                ]
            },

            {
                xtype: 'component',
                cls: 'dark',
                html: 'Ministrantes'
            },
			{
                flex: 2,
				xtype: 'speakers',
				store: 'SessionSpeakers'

			}
		]

	}
});
