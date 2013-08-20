Ext.define('DeRoseFest.view.session.Info', {

	extend: 'Ext.Container',
	xtype: 'sessionInfo',

	config: {

		cls: 'sessionInfo',

		tpl: Ext.create('Ext.XTemplate',
			'<h3>{title} <small>{room}</small></h3>',
			'<h4>{[Ext.Date.format(values.time, "l")]} a las {[this.formatTime(values.time)]}</h4>',
			'<p>{description}</p>',
			{
				formatTime: function(time) {
					return Ext.Date.format(time, 'g:ia')
				}
			}
		)
	}
});
