Ext.define('DeRoseFest.view.session.Info', {

	extend: 'Ext.Container',
	xtype: 'sessionInfo',

	config: {

		cls: 'sessionInfo',

		tpl: Ext.create('Ext.XTemplate',
			'<h3>{title} <small>{room}</small></h3>',
			'<h4>{[Ext.Date.format(values.time, "l")]} a las {[this.formatTime(values.time)]}</h4>',
			'<p>{description}</p>',
			'<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fderosefestival.com.ar" target="_blank">Share on Facebook</a>',
			'<a href="http://twitter.com/home?status=Voy%20a%20participar%20de%20XXX%20en%20el%20DeroseFestival%20" target="_blank">Share on Twitter</a>',
			'<a href="https://plus.google.com/share?url=http://www.derosefestival.com.ar">Share on Google+</a>',
			{
				formatTime: function(time) {
					return Ext.Date.format(time, 'g:ia')
				}
			}
		)
	}
});
