Ext.define('DeRoseFest.view.session.List', {

	extend: 'Ext.List',
	requires: 'Ext.SegmentedButton',

	xtype: 'sessions',

	config: {
		items: [
			{
				docked: 'top',
				xtype: 'toolbar',
				ui: 'gray',

				items: [
					{
						width: '100%',
						defaults: {
							flex: 1
						},
						xtype: 'segmentedbutton',
						allowDepress: false
					}
				]
			}
		],
		listeners: {
            painted : function() { document.getElementsByClassName('x-toolbar-dark')[0].style.height='110px'; }
        },		
        variableHeights: true,
        useSimpleItems: true,
		itemTpl: new Ext.XTemplate(
			'<div class="session">',
				'<tpl if="speakerIds.length &gt; 0">',
	            	'<div class="avatar" style="background-image: url({[this.speaker(values.speakerIds[0]).get(\'photo\')]});"></div>',
	        	'</tpl>',
	        	'<div class="info">',
	        	    '<tpl if="speakerIds.length &gt; 0">',
	        	        '<div class="name">{[this.speaker(values.speakerIds[0]).get(\'name\')]}</div>',
	        	    '</tpl>',
	        	    '<div class="title">{title}</div>',
	        	    '<div class="room">{room}</div>',
	        	'</div>',
        	'</div>',
        	{
             speaker: function (id) {
             	var speakerStore = Ext.getStore('Speakers');
             	var speaker = speakerStore.getById(id);
                return speaker;
             }
         }
		)
	},

	initialize: function() {
		this.config.title = DeRoseFest.app.title;
		this.callParent();

		var segmentedButton = this.down('segmentedbutton');

		Ext.Array.each(DeRoseFest.sessionDays, function(day) {
			segmentedButton.add(day);
		});
	},
	onPainted: function() {
		document.getElementsByClassName('x-toolbar-dark')[0].style.height='110px';
	}
});
