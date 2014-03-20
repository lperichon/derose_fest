Ext.define('DeRoseFest.view.session.Info', {

	extend: 'Ext.Container',
	xtype: 'sessionInfo',

	config: {

		cls: 'sessionInfo',

		listeners: {
            painted : function() { 
            	document.getElementsByClassName('x-toolbar-dark')[0].style.height='46px';
            	data = this.getRecord().data;

				window.plugin.notification.local.isScheduled(data.id.toString(), function (isScheduled) {
				 	if (isScheduled) {
				 		Ext.select("#notify_button").hide();
				 		Ext.select("#cancel_button").show();
				 	} else {
				 		Ext.select("#cancel_button").hide();
				 		Ext.select("#notify_button").show();
				 	}
				});
        	},
        },		

		tpl: Ext.create('Ext.XTemplate',
			'<h3>{title}</h3>',
			'<h4>{room}</h4>',
			'<h4>{[Ext.Date.format(values.time, "l")]} a las {pretty_time}</h4>',
			'<p>{description}</p>'
		)
	}
});
