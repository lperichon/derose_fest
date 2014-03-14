var fest_marker = L.marker(new L.LatLng(40.653519,-7.912936), {icon: L.icon({iconUrl: 'resources/images/fest.png'})});
Ext.define('DeRoseFest.view.Location', {
    extend: 'Ext.Panel',

    requires: ['Ext.ux.LeafletMap'],
    
    config: {
	    title: 'Mapa',
		iconCls: 'locate',
 
    	layout: 'vbox',
		items: [
			{
				docked: 'top',
				xtype: 'toolbar',
				title: 'Mapa'
			},
            {
                flex: 2, 
                id   : 'map',
                xtype: 'leafletmap',
                useCurrentLocation: false,
                autoMapCenter: false,
                enableOwnPositionMarker: false,
                tileLayerUrl: 'resources/tiles/{z}/{x}/{y}.png',
                mapOptions: {
                    center: new L.LatLng(40.653519,-7.912936),
                    zoom: 15
                },
                listeners: {
                    maprender : function(comp, map) {
                     // Icons are from http://mapicons.nicolasmollet.com using custom color #fcfc17
                     fest_marker.addTo(map).bindPopup("<b>DeRose Festival</b><br>Pousada de Viseu");
                    }
                }
            },
            {
                flex: 1, 
                xtype:'list',
                fields: [{name:'name'}],
                store: {
                    data: [
                        {name: 'DeRose Festival', desc: "Pousada de Viseu", lat: 40.653519, lng: -7.912936, marker: fest_marker}
                        
                    ]
                },
                itemTpl: '<div>{name} <span style="font-size:0.8em; color: #707070">{desc}</span></div>',
                listeners:{
                    itemtap: function(list, index, target, record) {
                        map = Ext.getCmp('map').getMap();
                        loc = new L.LatLng(record.get('lat'),record.get('lng'));
                        map.panTo(loc);
                        marker = record.get('marker');
                        marker.openPopup();
                    },
                }
            }       
		]
	}
}); 