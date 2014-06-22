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

// enable Ext autoloader
Ext.Loader.setConfig({
    enabled: true
});

//<debug>
Ext.Loader.setPath({
    'Ext.ux': 'ux',
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

        document.addEventListener('deviceready', initPushwoosh(), false);
    }

});

function registerPushwooshIOS() {
    var pushNotification = window.plugins.pushNotification;

    //push notifications handler
    document.addEventListener('push-notification', function(event) {
                var notification = event.notification;
                navigator.notification.alert(notification.aps.alert);

                //to view full push payload
                //navigator.notification.alert(JSON.stringify(notification));

                //reset badges on icon
                pushNotification.setApplicationIconBadgeNumber(0);
              });

    pushNotification.registerDevice({alert:true, badge:true, sound:true, pw_appid:"EF513-2E376", appname:"DeRose Festival BA 2014"},
                                    function(status) {
                                        var deviceToken = status['deviceToken'];
                                        console.warn('registerDevice: ' + deviceToken);
                                        onPushwooshiOSInitialized(deviceToken);
                                    },
                                    function(status) {
                                        console.warn('failed to register : ' + JSON.stringify(status));
                                        navigator.notification.alert(JSON.stringify(['failed to register ', status]));
                                    });

    //reset badges on start
    pushNotification.setApplicationIconBadgeNumber(0);
}

function onPushwooshiOSInitialized(pushToken)
{
    var pushNotification = window.plugins.pushNotification;
    //retrieve the tags for the device
    //pushNotification.getTags(function(tags) {
    //                          console.warn('tags for the device: ' + JSON.stringify(tags));
    //                       },
    //                       function(error) {
    //                          console.warn('get tags error: ' + JSON.stringify(error));
    //                       });

    //start geo tracking. PWTrackSignificantLocationChanges - Uses GPS in foreground, Cell Triangulation in background. 
    pushNotification.startLocationTracking('PWTrackSignificantLocationChanges',
                                    function() {
                                           console.warn('Location Tracking Started');
                                    });
}

function registerPushwooshAndroid() {

    var pushNotification = window.plugins.pushNotification;

    //push notifications handler
    document.addEventListener('push-notification', function(event) {
                var title = event.notification.title;
                var userData = event.notification.userdata;

                //dump custom data to the console if it exists
                if(typeof(userData) != "undefined") {
                    console.warn('user data: ' + JSON.stringify(userData));
                }

                //and show alert
                navigator.notification.alert(title);

                //stopping geopushes
                pushNotification.stopGeoPushes();
              });

    //projectid: "GOOGLE_PROJECT_ID", appid : "PUSHWOOSH_APP_ID"
    pushNotification.registerDevice({ projectid: "485682117055", appid : "EF513-2E376" },
                                    function(token) {
                                        //alert(token);
                                        //callback when pushwoosh is ready
                                        onPushwooshAndroidInitialized(token);
                                    },
                                    function(status) {
                                        //alert("failed to register: " +  status);
                                        console.warn(JSON.stringify(['failed to register ', status]));
                                    });
 }

function onPushwooshAndroidInitialized(pushToken)
{
    //output the token to the console
    //console.warn('push token: ' + pushToken);

    var pushNotification = window.plugins.pushNotification;

    //pushNotification.getTags(function(tags) {
    //                      console.warn('tags for the device: ' + JSON.stringify(tags));
    //                   },
    //                   function(error) {
    //                      console.warn('get tags error: ' + JSON.stringify(error));
    //                   });


    //set multi notificaiton mode
    //pushNotification.setMultiNotificationMode();
    //pushNotification.setEnableLED(true);

    //set single notification mode
    //pushNotification.setSingleNotificationMode();

    //disable sound and vibration
    //pushNotification.setSoundType(1);
    //pushNotification.setVibrateType(1);

    //pushNotification.setLightScreenOnNotification(false);

    //goal with count
    //pushNotification.sendGoalAchieved({goal:'purchase', count:3});

    //goal with no count
    //pushNotification.sendGoalAchieved({goal:'registration'});

    //setting list tags
    //pushNotification.setTags({"MyTag":["hello", "world"]});

    //settings tags
    //pushNotification.setTags({deviceName:"hello", deviceId:10},
    //                              function(status) {
    //                                  console.warn('setTags success');
    //                              },
    //                              function(status) {
    //                                  console.warn('setTags failed');
    //                              });

    function geolocationSuccess(position) {
        pushNotification.sendLocation({lat:position.coords.latitude, lon:position.coords.longitude},
                                 function(status) {
                                      console.warn('sendLocation success');
                                 },
                                 function(status) {
                                      console.warn('sendLocation failed');
                                 });
    };

    // onError Callback receives a PositionError object
    //
    function geolocationError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
    }

    //greedy method to get user position every 3 second. works well for demo.
    //  setInterval(getCurrentPosition, 3000);

    //this method just gives the position once
    //  navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);

    //this method should track the user position as per Phonegap docs.
    //  navigator.geolocation.watchPosition(geolocationSuccess, geolocationError, { maximumAge: 3000, enableHighAccuracy: true });

    //Pushwoosh Android specific method that cares for the battery
    pushNotification.startGeoPushes();
}

function initPushwoosh() {
    var pushNotification = window.plugins.pushNotification;
    if(device.platform == "Android")
    {
        registerPushwooshAndroid();
        pushNotification.onDeviceReady();
    }

    if(device.platform == "iPhone" || device.platform == "iOS")
    {
        registerPushwooshIOS();
        pushNotification.onDeviceReady();
    }
}