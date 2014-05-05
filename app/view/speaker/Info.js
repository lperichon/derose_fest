Ext.define('DeRoseFest.view.speaker.Info', {

	extend: 'Ext.Container',
	xtype: 'speakerInfo',

	config: {

		cls: 'speakerInfo',
		tpl: [
			'<div class="header">',
				'<div class="avatar" style="background-image: url({photo});"></div>',
				'<h3>{first_name} {last_name}</h3>',
				'<h4>{position}</h4>',
			'</div>',
			'<p>{bio}</p>',
			'{% if (values.url) { %}',
			'<p><a href="{url}">Mais</a></p>',
			'{% } %}'
		]
	}
});
