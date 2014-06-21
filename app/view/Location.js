var fest_marker = L.marker(new L.LatLng(-34.58798,-58.391127), {icon: L.icon({iconUrl: 'resources/images/fest.png'})});
var party_marker = L.marker(new L.LatLng(-34.586713,-58.431061), {icon: L.icon({iconUrl: 'resources/images/party.png'})});
var cinema_marker = L.marker(new L.LatLng(-34.580095,-58.413158), {icon: L.icon({iconUrl: 'resources/images/cinema.png'})});
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
                     party_marker.addTo(map).bindPopup("<b>Fiesta</b><br>Sede Palermo");
                     cinema_marker.addTo(map).bindPopup("<b>Cine al aire libre</b><br>Sede Cerviño");
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
                        {name: 'Fiesta', desc: "Sede Palermo", lat: -34.586713, lng: -58.431061, marker: party_marker},
                        {name: 'Cine al aire libre', desc: "Sede Cerviño", lat: -34.580095, lng: -58.413158, marker: cinema_marker}
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