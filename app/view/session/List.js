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
        variableHeights: true,
        useSimpleItems: true,
		itemTpl: [
			'<div class="session"><div class="title">{title}</div><div class="room">{room}</div></div>'
		]
	},

	initialize: function() {
		this.config.title = DeRoseFest.app.title;
		this.callParent();

		var segmentedButton = this.down('segmentedbutton');

		Ext.Array.each(DeRoseFest.sessionDays, function(day) {
			segmentedButton.add(day);
		});
	}
});
