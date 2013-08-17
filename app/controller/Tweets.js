Ext.define('DeRoseFest.controller.Tweets', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			title: 'tweets titlebar'
		},
		control: {
			tweets: {
				activate: 'onActivate'
			}
		}
	},

	onActivate: function() {
		if (!this.loadedTweets) {

			this.getTitle().setTitle(DeRoseFest.app.twitterSearch);

			Ext.getStore('Tweets').getProxy().setExtraParams({
				q: DeRoseFest.app.twitterSearch
			});
			Ext.getStore('Tweets').load();

			this.loadedTweets = true;
		}
	}

});
