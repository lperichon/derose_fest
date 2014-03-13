Ext.define('DeRoseFest.controller.Sessions', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			sessions: 'sessions',
			session: 'session',
			sessionInfo: 'sessionContainer sessionInfo',
			sessionSpeakers: 'sessionContainer list',
			sessionContainer: 'sessionContainer',
			sessionDayPicker: 'sessions segmentedbutton',

			speakers: 'sessionContainer speakers',
			speakerInfo: 'sessionContainer speakerInfo'
		},
		control: {
			sessions: {
				initialize: 'initSessions',
				itemtap: 'onSessionTap',
				activate: 'onSessionsActivate'
			},
			sessionDayPicker: {
				toggle: 'onSessionDateChange'
			},
			speakers: {
				itemtap: 'onSpeakerTap'
			},
			'#checkin_button': {
				tap: function() {
					data = this.getSessionInfo().getRecord().data;
                	date = new Date(); // data.date;
				    date.setMinutes(date.getMinutes() + 1); //-15);
				    window.plugin.notification.local.add({
				        id:         data.id.toString(),  // A unique id of the notifiction
				        date:       date,    // This expects a date object
				        message:    data.pretty_time + ' en ' + data.room,  // The message that is displayed
				        title:      data.title  // The title of the message
				    });
            	}
			},
			'#share_button': {
				tap: function() {
					data = this.getSessionInfo().getRecord().data;
                	window.plugins.socialsharing.share('Voy a participar de \"' + data.title + '\" en el #DeRoseFestivalBA', 'X1 DeRose Festival Buenos Aires', 'http://www.derosemartinez.com.ar/derose_fest/resources/images/afiche.jpg', 'http://www.derosefestival.com.ar');
            	}
			}
		}
	},

	initSessions: function() {
		var firstButton = this.getSessionDayPicker().getItems().items[0];
		this.getSessionDayPicker().setPressedButtons(firstButton);
		this.filterByButton(firstButton);
	},

	onSessionDateChange: function(seg, btn, toggle) {
        if (toggle) {
            this.filterByButton(btn);
        }
	},

	filterByButton: function(btn) {
		if (this.getSessionSpeakers()) {
			this.getSessionSpeakers().deselectAll();
		}
		Ext.getStore('Sessions').clearFilter(true);
		Ext.getStore('Sessions').filter(function(record) {
			return record.get('time').getDate() == btn.config.day;
		});
	},

	onSessionTap: function(list, idx, el, record) {
		var speakerStore = Ext.getStore('SessionSpeakers'),
			speakerIds = record.get('speakerIds');

		speakerStore.clearFilter(true);
		speakerStore.filterBy(function(speaker) {
			return Ext.Array.contains(speakerIds, speaker.get('id'));
		});

		if (!this.session) {
			this.session = Ext.widget('session');
		}

		this.session.setTitle(record.get('title'));
		this.getSessionContainer().push(this.session);
		this.getSessionInfo().setRecord(record);
	},

	onSpeakerTap: function(list, idx, el, record) {
		if (!this.speakerInfo) {
			this.speakerInfo = Ext.widget('speakerInfo', {
				scrollable: 'vertical'
			});
		}

		this.speakerInfo.config.title = record.getFullName();
		this.speakerInfo.setRecord(record);
		this.getSessionContainer().push(this.speakerInfo);
	},

	onSessionsActivate: function() {
		if (this.session) {
			this.session.down('speakers').deselectAll();
		}
	}
});
