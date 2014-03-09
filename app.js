/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

//<debug>
Ext.Loader.setPath({
    'Ext': 'src',
    'DeRoseFest': 'app'
});
//</debug>

Ext.require('DeRoseFest.util.Proxy');

Ext.application({
    // Change the values below to re-configure the app for a different conference.

    title:   '<img src="resources/images/logo.png"/>',
    dataUrl: '',

    twitterSearch: '#DeRoseFestivalBA',

    mapCenter: [-34.58798,-58.391127],
    mapText: 'The Palace Hotel<br /><small>2 New Montgomery Street<br />San Francisco, CA 94105<br />(415) 512-1111</small>',

    aboutPages: [
        {
            title: 'Sobre el Método DeRose',
            xtype: 'htmlPage',
            url: 'data/mdr.html'
        },
        {
            title: "Sobre el DeRose Festival",
            xtype: 'htmlPage',
            url: 'data/fest.html'
        },
        {
            title: "Ombudsman",
            xtype: 'htmlPage',
            url: 'data/ombudsman.html'
        },
        {
            title: 'Credits',
            xtype: 'htmlPage',
            url: 'data/credits.html'
        }
    ],

    // App namespace

    name: 'DeRoseFest',

    // Dependencies

    requires: ['DeRoseFest.util.Proxy'],

    models: [
        'Session',
        'Speaker'
    ],

    views: [
        'Main',

        'session.Card',
        'session.List',
        'session.Detail',
        'session.Info',

        'speaker.Card',
        'speaker.List',
        'speaker.Detail',
        'speaker.Info',

        'Tweets',
        'Location',

        'about.Card',
        'about.List',
        'about.HtmlPage',
        'about.VideoList'
    ],

    controllers: [
        'Sessions',
        'Speakers',
        'Tweets',
        'About'
    ],

    stores: [
        'Sessions',
        'SpeakerSessions',
        'Speakers',
        'SessionSpeakers',
        'Tweets',
        'Videos'
    ],

    launch: function() {
        Ext.Date.dayNames = [
            'Domingo',
            'Lunes',
            'Martes',
            'Miércoles',
            'Jueves',
            'Viernes',
            'Sábado'
        ];

        DeRoseFest.util.Proxy.process('data/feed.js', function() {
            Ext.Viewport.add({ xtype: 'main' });
            Ext.Viewport.setMasked(false);
        });
    }

});
