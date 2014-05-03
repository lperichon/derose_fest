Ext.define('DeRoseFest.controller.About', {

	extend: 'Ext.app.Controller',

	config: {

		refs: {
			aboutContainer: 'aboutContainer'
		},

		control: {
			aboutList: {
				itemtap: 'onAboutItemTap',
				activate: 'onAboutListActivate'
			},
			videoList: {
				itemtap: 'onVideoTap'
			},
			'#facebook_share_button': {
				tap: function() {
                	window.plugins.socialsharing.shareViaFacebook('Voy a participar del #DeRoseFestivalBA', 
                		null, 
                		'http://www.derosemartinez.com.ar/derose_fest/resources/images/afiche.jpg', 
                		null);
            	}
			},
			'#twitter_share_button': {
				tap: function() {
                	window.plugins.socialsharing.shareViaTwitter('Voy a participar del #DeRoseFestivalBA', 
                		'X1 DeRose Festival Buenos Aires', 
                		'http://www.derosemartinez.com.ar/derose_fest/resources/images/afiche.jpg', 
                		'http://www.derosefestival.com.ar');
            	}
			}
		}
	},

	onAboutListActivate: function(list) {
		list.deselectAll();
	},

	onAboutItemTap: function(list, idx) {
		this.getAboutContainer().push(DeRoseFest.app.config.aboutPages[idx]);
	},

	onVideoTap: function(list, idx, el, record) {
		Ext.Msg.confirm('External Link', 'Open in YouTube?', function(result){
            if (result == 'yes') {
                window.location = 'http://www.youtube.com/watch?v=' + record.get('id') + '&feature=player_embedded';
            }
        });
	}
});
