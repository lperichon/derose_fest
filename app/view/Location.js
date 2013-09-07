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
            	// Icons are from http://mapicons.nicolasmollet.com using custom color #fcfc17
                new google.maps.Marker({
                    map       : this.getMap(),
                    position  : new google.maps.LatLng(DeRoseFest.app.mapCenter[0], DeRoseFest.app.mapCenter[1]),
                    title     : 'DeRose Festival',
                    animation : google.maps.Animation.DROP,
                    icon : 'resources/images/hotel_0star.png'
                });
				
				new google.maps.Marker({
                    map       : this.getMap(),
                    position  : new google.maps.LatLng(-34.586399,-58.389834),
                    title     : 'Práctica al aire libre',
                    animation : google.maps.Animation.DROP,
                    icon : 'resources/images/park.png'
                });

                new google.maps.Marker({
                    map       : this.getMap(),
                    position  : new google.maps.LatLng(-34.59679,-58.383504),
                    title     : 'DeRose Art Company',
                    animation : google.maps.Animation.DROP,
                    icon : 'resources/images/theater.png'
                });
            }
        }
	}
}); 