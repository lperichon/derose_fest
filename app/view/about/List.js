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
                    ui: 'fb_share_button',
                    margin: '10',
                    text: 'Facebook',
                    id: 'facebook_share_button'
                },
                {
                    xtype: 'button',
                    margin: '10',
                    ui: 'twitter_share_button',
                    text: 'Twitter',
                    id: 'twitter_share_button'
                }
            ] 
        }]
	},

	initialize: function() {
		this.callParent();
		this.setData(DeRoseFest.app.aboutPages);
	}
});
