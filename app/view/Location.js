var infowindow = new google.maps.InfoWindow({
   content: ""
});
Ext.define('DeRoseFest.view.Location', {
    extend: 'Ext.Panel',

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
                xtype:'map',
                id   : 'map',
                mapOptions: {
                  center: new google.maps.LatLng(-34.58798,-58.391127),
                  mapTypeId: google.maps.MapTypeId.ROADMAP,
                  zoom: 17
                },
                listeners: {
                    maprender : function(comp, map) {
                     // Icons are from http://mapicons.nicolasmollet.com using custom color #fcfc17
                        var fest_marker = new google.maps.Marker({
                            map : this.getMap(),
                            position : new google.maps.LatLng(DeRoseFest.app.mapCenter[0], DeRoseFest.app.mapCenter[1]),
                            title : 'DeRose Festival',
                            animation : google.maps.Animation.DROP,
                            icon : 'resources/images/hotel.png'
                        });
                        google.maps.event.addListener(fest_marker, 'click', function() {
                          infowindow.setContent(fest_marker.get('title'));
                          infowindow.open(this.getMap(),fest_marker);
                        });


                        var park_marker = new google.maps.Marker({
                            map : this.getMap(),
                            position : new google.maps.LatLng(-34.586399,-58.389834),
                            title : 'Práctica al aire libre',
                            animation : google.maps.Animation.DROP,
                            icon : 'resources/images/park.png'
                        });
                        google.maps.event.addListener(park_marker, 'click', function() {
                          infowindow.setContent(park_marker.get('title'));
                          infowindow.open(this.getMap(),park_marker);
                        });                        

                        artco_marker = new google.maps.Marker({
                            map : this.getMap(),
                            position : new google.maps.LatLng(-34.59679,-58.383504),
                            title : 'DeRose Art Company',
                            animation : google.maps.Animation.DROP,
                            icon : 'resources/images/theater.png'
                        });
                        google.maps.event.addListener(artco_marker, 'click', function() {
                          infowindow.setContent(artco_marker.get('title'));
                          infowindow.open(this.getMap(),artco_marker);
                        });

                        artco_marker = new google.maps.Marker({
                            map : this.getMap(),
                            position : new google.maps.LatLng(-34.580048, -58.41332),
                            title : 'Fiesta de los 10 años',
                            animation : google.maps.Animation.DROP,
                            icon : 'resources/images/party.png'
                        });
                        google.maps.event.addListener(artco_marker, 'click', function() {
                          infowindow.setContent(artco_marker.get('title'));
                          infowindow.open(this.getMap(),artco_marker);
                        });        

                        bambi_marker = new google.maps.Marker({
                            map : this.getMap(),
                            position : new google.maps.LatLng(-34.589038, -58.390716),
                            title : 'Maria de bambi',
                            animation : google.maps.Animation.DROP,
                            icon : 'resources/images/restaurant.png'
                        });
                        google.maps.event.addListener(bambi_marker, 'click', function() {
                          infowindow.setContent(bambi_marker.get('title'));
                          infowindow.open(this.getMap(),bambi_marker);
                        });

                        primaf_marker = new google.maps.Marker({
                            map : this.getMap(),
                            position : new google.maps.LatLng(-34.585467, -58.393337),
                            title : 'Primafila',
                            animation : google.maps.Animation.DROP,
                            icon : 'resources/images/restaurant.png'
                        });
                        google.maps.event.addListener(primaf_marker, 'click', function() {
                          infowindow.setContent(primaf_marker.get('title'));
                          infowindow.open(this.getMap(),primaf_marker);
                        });

                        freddo_marker = new google.maps.Marker({
                            map : this.getMap(),
                            position : new google.maps.LatLng(-34.588148, -58.390285),
                            title : 'Freddo',
                            animation : google.maps.Animation.DROP,
                            icon : 'resources/images/icecream.png'
                        });
                        google.maps.event.addListener(freddo_marker, 'click', function() {
                          infowindow.setContent(freddo_marker.get('title'));
                          infowindow.open(this.getMap(),freddo_marker);
                        });
                        
                        sirop_marker = new google.maps.Marker({
                            map : this.getMap(),
                            position : new google.maps.LatLng(-34.592313,-58.389362),
                            title : 'Sirop & Folie',
                            animation : google.maps.Animation.DROP,
                            icon : 'resources/images/restaurant.png'
                        });
                        google.maps.event.addListener(sirop_marker, 'click', function() {
                          infowindow.setContent(sirop_marker.get('title'));
                          infowindow.open(this.getMap(),sirop_marker);
                        });
                    }
                }
            },
            {
                flex: 1, 
                xtype:'list',
                fields: [{name:'name'}],
                store: {
                    data: [
                        {name: 'DeRose Festival', desc: "Hotel Etoile", lat: -34.58798, lng: -58.391127},
                        {name: 'Práctica al aire libre', desc: "Plaza San Martín de Tours", lat: -34.586399, lng: -58.389834},
                        {name: 'DeRose Art Company', desc: "Teatro del Globo", lat: -34.59679, lng: -58.383504},
                        {name: 'Fiesta de los 10 años', desc: "Sede Cerviño (Rep. Arabe Siria 3088)", lat: -34.580048, lng: -58.41332},
                        {name: 'Maria de bambi', desc: "20% descuento", lat: -34.589038, lng: -58.390716},
                        {name: 'Primafila', desc: "10% descuento", lat: -34.585467, lng: -58.393337},
                        {name: 'Sirop & Folie', desc: "10% descuento (efectivo)", lat: -34.592313, lng: -58.389362},
                        {name: 'Freddo', desc: "20% descuento", lat: -34.588148, lng: -58.390285}
                        
                    ]
                },
                itemTpl: '<div>{name} <span style="font-size:0.8em; color: #707070">{desc}</span></div>',
                listeners:{
                    itemtap: function(list, index, target, record) {
                        map = Ext.getCmp('map').getMap();
                        loc = new google.maps.LatLng(record.get('lat'),record.get('lng'));
                        map.panTo(loc);
                        infowindow.setContent(record.get('name'));
                        infowindow.setPosition(loc);
                        infowindow.open(map);
                    },
                }
            }       
		]
	}
}); 