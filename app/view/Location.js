Ext.define('DeRoseFest.view.Location', {
    extend: 'Ext.Map',
    config: {
	    title: 'Mapa',
		iconCls: 'locate',
 
    	layout: 'fit',
		items: [
			{
				docked: 'top',
				xtype: 'toolbar',
				title: 'Mapa'
			}
		], 
	    mapOptions: {
		    center: new google.maps.LatLng(-34.58798,-58.391127),
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    zoom: 17
	    },
        listeners: {
            maprender : function(comp, map) {
                new google.maps.Marker({
                    map       : this.getMap(),
                    position  : new google.maps.LatLng(DeRoseFest.app.mapCenter[0], DeRoseFest.app.mapCenter[1]),
                    title     : 'DeRose Festival',
                    animation : google.maps.Animation.DROP,
                    icon : 'resources/images/hotel_0star.png'
                });
            }
        }
	}
}); 