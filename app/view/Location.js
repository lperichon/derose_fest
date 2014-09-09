var fest_marker = L.marker(new L.LatLng(-34.58798,-58.391127), {icon: L.icon({iconUrl: 'resources/images/fest.png'})});
var party_marker = L.marker(new L.LatLng(-34.586713,-58.431061), {icon: L.icon({iconUrl: 'resources/images/party.png'})});
var cinema_marker = L.marker(new L.LatLng(-34.580095,-58.413158), {icon: L.icon({iconUrl: 'resources/images/cinema.png'})});
var theater_marker = L.marker(new L.LatLng(-34.5917596,-58.4308294), {icon: L.icon({iconUrl: 'resources/images/theater.png'})});

var pani_marker = L.marker(new L.LatLng(-34.5888842,-58.3936346), {icon: L.icon({iconUrl: 'resources/images/restaurant.png'})});
var primafila_marker = L.marker(new L.LatLng(-34.585467, -58.393337), {icon: L.icon({iconUrl: 'resources/images/restaurant.png'})});
var camping_marker = L.marker(new L.LatLng(-34.585467, -58.393337), {icon: L.icon({iconUrl: 'resources/images/restaurant.png'})});
var freddo_marker = L.marker(new L.LatLng(-34.588148, -58.390285), {icon: L.icon({iconUrl: 'resources/images/icecream.png'})});
var bambi_marker = L.marker(new L.LatLng(-34.589038, -58.390716), {icon: L.icon({iconUrl: 'resources/images/restaurant.png'})});


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
                     theater_marker.addTo(map).bindPopup("<b>DeRose ArtCompany</b><br>Sala Siranush");

                     pani_marker.addTo(map).bindPopup("<b>Pani Recoleta,</b> Restaurant</br>Vicente Lopez 2056 - Recoleta Mall</br><i>Beneficio: 15%</i>");
                     primafila_marker.addTo(map).bindPopup("<b>Primafila,</b> Cocina italiana y mediterránea</br>Av. Pueyrredón 2501 - Bs. As. Design</br><i>Beneficio: 20% con pago en efectivo</i>");
                     camping_marker.addTo(map).bindPopup("<b>Camping,</b> Extensión de Primafila</br>Av. Pueyrredón 2501 - Bs. As. Design</br><i>Beneficio: Consumiendo algo la bebida sin cargo</i>");
                     freddo_marker.addTo(map).bindPopup("<b>Freddo,</b> Helados</br>Av. Pres. Manuel Quintana 502</br><i>Beneficio: 15%</i>");
                     bambi_marker.addTo(map).bindPopup("<b>María de Bambi,</b> Pequeño bistró, pastelería y tartas</br>Ayacucho 1821</br><i>Beneficio: 15%</i>");
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
                        {name: 'Cine al aire libre', desc: "Sede Cerviño", lat: -34.580095, lng: -58.413158, marker: cinema_marker},
                        {name: 'DeRose ArtCompany', desc: "Sala Siranush", lat: -34.5917596, lng: -58.4308294, marker: theater_marker},
                        
                        {name: 'Pani Recoleta', desc: "Restaurant</br>Vicente Lopez 2056 - Recoleta Mall</br><i>Beneficio: 15%</i>", lat: -34.5888842, lng: -58.3936346, marker: pani_marker},
                        {name: 'Primafila', desc: "Restaurant</br>Vicente Lopez 2056 - Recoleta Mall</br><i>Beneficio: 15%</i>", lat: -34.5888842, lng: -58.3936346, marker: primafila_marker},
                        {name: 'Camping', desc: "Extensión de Primafila</br>Vicente Lopez 2056 - Recoleta Mall</br><i>Beneficio: Consumiendo algo la bebida sin cargo</i>", lat: -34.5888842, lng: -58.3936346, marker: camping_marker},
                        {name: 'Freddo', desc: "Helados", lat: -34.588148, lng: -58.390285, marker: freddo_marker},
                        {name: 'María de Bambi', desc: "Pequeño bistró", lat: -34.589038, lng: -58.390716, marker: bambi_marker}
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