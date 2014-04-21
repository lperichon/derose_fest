Ext.define('DeRoseFest.view.speaker.List', {

	extend: 'Ext.List',
	xtype: 'speakers',

	config: {
		title: 'Disertantes',
		itemCls: 'speaker',
        variableHeights: true,
		itemTpl: [
			'<div class="avatar" style="background-image: url({photo});"></div>',
			'<div class="info">',
				'<h3>{first_name} {last_name}</h3>',
				'<h4>{position}</h4>',
			'</div>'
		]
	}
});
