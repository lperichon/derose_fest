var facebook_handler = function (btn, evt) {
    window.location = 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fderosefestival.com.ar';
}

var twitter_handler = function (btn, evt) {
    window.location = 'http://twitter.com/home?status=Voy%20a%20participar%20de%20XXX%20en%20el%20DeroseFestival%20';
}

var plus_handler = function (btn, evt) {
    window.location = 'https://plus.google.com/share?url=http://www.derosefestival.com.ar';
}

Ext.define('DeRoseFest.view.about.List', {

	extend: 'Ext.List',
	xtype: 'aboutList',

	config: {
		title: 'Info',
		ui: 'round',
		itemTpl: [ '{title}' ],
		items:[{  
            xtype: 'toolbar',
            ui: 'leather',
            docked:'top', 
            layout:{
                pack: 'center'
            },
            items: [
                {
                    xtype: 'label',
                    html: 'Compartí esta aplicación!'
                }
            ] 
        },
        {  
        	xtype: 'toolbar',
            ui: 'leather',
            docked:'top', 
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
        }]
	},

	initialize: function() {
		this.callParent();
		this.setData(DeRoseFest.app.aboutPages);
	}
});
