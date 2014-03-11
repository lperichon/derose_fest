var fest_marker = L.marker(new L.LatLng(-34.58798,-58.391127), {icon: L.icon({iconUrl: 'resources/images/fest.png'})});
var park_marker = L.marker(new L.LatLng(-34.586399,-58.389834), {icon: L.icon({iconUrl: 'resources/images/park.png'})});
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
                    center: new L.LatLng(-34.58798,-58.391127),
                    zoom: 15
                },
                listeners: {
                    maprender : function(comp, map) {
                     // Icons are from http://mapicons.nicolasmollet.com using custom color #fcfc17
                     fest_marker.addTo(map).bindPopup("<b>DeRose Festival</b><br>Hotel Etoile");
                     park_marker.addTo(map).bindPopup("<b>Práctica al aire libre</b><br>Plaza San Martín de Tours");
                    }
                }
            },
            {
                flex: 1, 
                xtype:'list',
                fields: [{name:'name'}],
                store: {
                    data: [
                        {name: 'DeRose Festival', desc: "Hotel Etoile", lat: -34.58798, lng: -58.391127, marker: fest_marker},
                        {name: 'Práctica al aire libre', desc: "Plaza San Martín de Tours", lat: -34.586399, lng: -58.389834, marker: park_marker}
                        
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