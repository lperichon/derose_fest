var olimpic = "Salón Olímpic";
var paris =   "Salón Paris";
var viernes = "Viernes, 09/21/2013";
var sabado  = "Sábado, 09/22/2013";
var domingo = "Domingo, 09/23/2013";

var joris = {
    "icon": null,
    "first_name": "Joris",
    "photo": "resources/images/joris.jpg",
    "position": "Presidente de la ArchiFederación del Método DeRose de Santa Catarina, Brasil",
    "name": "Prof. Joris Marengo",
    "affiliation": "",
    "url": "http://www.novoexecutivo.com.br/",
    "bio": "<p>Autor del libro Yôga Antigo para iniciantes.</p>",
    "id": 1,
    "twitter": "",
    "last_name": "Marengo"
};

Ext.data.JsonP.feedCb({
    "proposals": [
        {
            "topics": [
                "Conversation",
                "Live Stream"
            ],
            "room": "Sirop Folie",
            "end_time": "2013-09-21T13:00:00",
            "description": "",
            "title": "Almuerzo y asamblea de Presidentes de Federación",
            "url": "",
            "date": "09/21/2013",
            "speakers": [
            ],
            "proposal_type": "Asamblea",
            "id": 1,
            "time": "2013-09-21T13:00:00",
            "pretty_time": "1:00pm",
            "day": viernes
        },
        {
            "topics": [
                "Conversation",
                "Live Stream"
            ],
            "room": olimpic,
            "end_time": "2013-09-22T10:00:00",
            "description": "",
            "title": "Práctica ortodoxa con énfasis en reeducación comportamental",
            "url": "",
            "date": "09/22/2013",
            "speakers": [joris],
            "proposal_type": "Práctica",
            "id": 2,
            "time": "2013-09-22T10:00:00",
            "pretty_time": "10:00am",
            "day": sabado
        },
        {
            "topics": [
                "Conversation",
                "Live Stream"
            ],
            "room": paris,
            "end_time": "2013-09-23T11:45:00",
            "description": "",
            "title": "Práctica heterodoxa con énfasis en cambio de karma, sólo para instructores",
            "url": "",
            "date": "09/23/2013",
            "speakers": [joris],
            "proposal_type": "Práctica",
            "id": 3,
            "time": "2013-09-23T11:45:00",
            "pretty_time": "11:45am",
            "day": domingo
        }
    ]
});
