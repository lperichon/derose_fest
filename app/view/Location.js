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
                        new google.maps.Marker({
                            map : this.getMap(),
                            position : new google.maps.LatLng(DeRoseFest.app.mapCenter[0], DeRoseFest.app.mapCenter[1]),
                            title : 'DeRose Festival',
                            animation : google.maps.Animation.DROP,
                            icon : 'resources/images/hotel_0star.png'
                        });

                        new google.maps.Marker({
                            map : this.getMap(),
                            position : new google.maps.LatLng(-34.586399,-58.389834),
                            title : 'Práctica al aire libre',
                            animation : google.maps.Animation.DROP,
                            icon : 'resources/images/park.png'
                        });

                        new google.maps.Marker({
                            map : this.getMap(),
                            position : new google.maps.LatLng(-34.59679,-58.383504),
                            title : 'DeRose Art Company',
                            animation : google.maps.Animation.DROP,
                            icon : 'resources/images/theater.png'
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
                        {name: 'DeRose Art Company', desc: "Teatro del Globo", lat: -34.59679, lng: -58.383504}
                    ]
                },
                itemTpl: '<div>{name} <span style="font-size:0.8em; color: #707070">{desc}</span></div>',
                listeners:{
                    itemtap: function(list, index, target, record) {
                        Ext.getCmp('map').getMap().panTo(new google.maps.LatLng(record.get('lat'),record.get('lng')));
                    },
                }
            }       
		]
	}
}); 