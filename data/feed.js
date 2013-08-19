var olimpic = "Salón Olímpic (piso 12)";
var paris =   "Salón Paris (piso 1)";

var viernes = "Viernes, 09/21/2013";
var sabado  = "Sábado, 09/22/2013";
var domingo = "Domingo, 09/23/2013";

var yael = {
    id: 13,
    order: '10',
    icon: null,
    first_name: 'Yael',
    last_name: 'Barcesat',
    photo: "resources/images/yael.jpg",
    position: "Vicepresidente de la Federación del Método DeRose de Buenos Aires, Argentina.<br/>Directora de la Sede Decana.",
    name: "Prof. Yael Barcesat",
    affiliation: "",
    url: "http://www.yaelbarcesat.com/",
    bio: "Autora de los libros Complementación pedagógica y Mantra, vibración infinita.",
    twitter: ""
}

var edgardo = {
    id: 11,
    order: '02',
    icon: null,
    first_name: 'Edgardo',
    last_name: 'Caramella',
    photo: "resources/images/edi.jpg",
    position: "Presidente de la Federación Método DeRose Buenos Aires.<br/>Presidente del Colegiado de los Presidentes de Federaciones del Método DeRose.",
    name: "Maestro Edgardo Caramella",
    affiliation: "",
    url: "http://www.blogdeedgardo.com.ar",
    bio: "Autor de los libros Bienvenido Yôga, Yôga y energía sexual, La dieta del Yôga y Yôga, guía básica.",
    twitter: ""
}

var fernanda = {
    id: 10,
    order: '05',
    icon: null,
    first_name: 'Fernanda',
    last_name: 'Neis',
    photo: "resources/images/fe.jpg",
    position: "Directora de la Sede Jardins.",
    name: "Prof. Fernanda Neis",
    affiliation: "",
    url: "http://metododerosejardins.wordpress.com/",
    bio: "",
    twitter: ""
}

var charles = {
    id: 12,
    order: '04',
    icon: null,
    first_name: 'Charles',
    last_name: 'Maciel',
    photo: "resources/images/charles.jpg",
    position: "Presidente de Office.",
    name: "Prof. Charles Maciel",
    affiliation: "",
    url: "http://www.metododerose.org",
    bio: "",
    twitter: ""
}

var nina = {
    id: 9,
    order: '05',
    icon: null,
    first_name: 'Nina',
    last_name: 'de Holanda',
    photo: "resources/images/nina.jpg",
    position: "Presidente de la Federación Método DeRose São Paulo.",
    name: "Prof. Nina de Holanda",
    affiliation: "",
    url: "http://unidademoema.blogspot.com/",
    bio: "",
    twitter: ""
}

var mariahelena = {
    id: 8,
    order: '03',
    icon: null,
    first_name: 'Maria Helena',
    last_name: 'Aguiar',
    photo: "resources/images/helena.jpg",
    position: "Presidente de la Federación Método DeRose de Paraná, Brasil.",
    name: "Prof. Maria Helena Aguiar",
    affiliation: "",
    url: "",
    bio: "",
    twitter: ""
}

var vanessa = {
    id: 7,
    order: '08',
    icon: null,
    first_name: 'Vanessa',
    last_name: 'de Holanda',
    photo: "resources/images/vanesa.jpg",
    position: "Presidente de la Federación Método DeRose Rio de Janeiro.",
    name: "Prof. Vanessa de Holanda",
    affiliation: "",
    url: "http://www.vanessadeholanda.com/",
    bio: "",
    twitter: ""
}

var naiana = {
    id: 6,
    order: '07',
    icon: null,
    first_name: 'Naiana',
    last_name: 'Ramos Alberti',
    photo: "resources/images/nai.jpg",
    position: "Presidente de la Federación Método DeRose de Rio Grande do Sul, Brasil.",
    name: "Prof. Naiana Ramos Alberti",
    affiliation: "",
    url: "",
    bio: "",
    twitter: ""
}

var melina = {
    id: 5,
    order: '11',
    icon: null,
    first_name: 'Melina',
    last_name: 'Flores',
    photo: "resources/images/meli.jpg",
    position: "Presidente de la Asociación de Profesionales del Método DeRose de Copacabana, Rio de Janeiro, Brasil.",
    name: "Prof. Melina Flores",
    affiliation: "",
    url: "",
    bio: "",
    twitter: ""
}

var rogerio = {
    id: 4,
    order: '09',
    icon: null,
    first_name: 'Rogério',
    last_name: 'Brant',
    photo: "resources/images/rogerio.jpg",
    position: "Director de la Sede Alto da XV.",
    name: "Prof. Rogério Brant",
    affiliation: "",
    url: "http://www.rogeriobrant.com.br/",
    bio: "",
    twitter: ""
}

var joris = {
    id: 3,
    order: '06',
    icon: null,
    first_name: "Joris",
    photo: "resources/images/joris.jpg",
    position: "Presidente de la Federación del Método DeRose de Santa Catarina, Brasil",
    name: "Prof. Joris Marengo",
    affiliation: "",
    url: "http://www.novoexecutivo.com.br/",
    bio: "<p>Autor del libro Yôga Antigo para iniciantes.</p>",
    twitter: "",
    last_name: "Marengo"
};

var derose = {
    id: 2,
    order: '01',
    icon: null,
    first_name: "",
    last_name: "DeRose",
    photo: "resources/images/derose.jpg",
    position: "Sistematizador del Método DeRose.<br/>Presidente de la Confederación Método DeRose.",
    name: "Maestro DeRose",
    affiliation: "",
    url: "http://www.metododerose.org/blogdoderose",
    bio: "Autor de los libros: Tratado de Yôga, Quando é preciso ser forte, Tudo o que você nunca quis saber sobre Yôga, Programa do Curso Básico, Método de Boas Maneiras, Eu me lembro…, Encontro com o Mestre, Sútras – máximas de lucidez e êxtase, entre otros.",
    twitter: "@blogdoderose"
}

Ext.data.JsonP.feedCb({
        "proposals": [
        {
            "room": "Sirop Folie",
            "end_time": "2013-09-21T13:00:00",
            "description": "",
            "title": "Almuerzo y asamblea de Presidentes de Federación",
            "url": "",
            "date": "09/21/2013",
            "speakers": [],
            "proposal_type": "Asamblea",
            "id": 1,
            "time": "2013-09-21T13:00:00",
            "pretty_time": "1:00pm",
            "day": viernes
        },
        {
            id: 4,
            room: olimpic,
            date: "09/21/2013",
            day: viernes,
            time: "2013-09-21T15:00:00",
            end_time: "2013-09-21T16:20:00",
            pretty_time: '15:00 hs.',
            title: "Esculpiendo el Ser Humano. Vivencia con un poco de teoría y mucha práctica",
            description: "",
            speakers: [rogerio]
        },
        {
            id: 5,
            room: paris,
            date: "09/21/2013",
            day: viernes,
            time: "2013-09-21T15:00:00",
            end_time: "2013-09-21T16:20:00",
            pretty_time: '15:00 hs',
            title: "Práctica con énfasis en vocalizaciones",
            description: "",
            speakers: [melina]
        },
        {
            id: 6,
            room: olimpic,
            date: "09/21/2013",
            day: viernes,
            time: "2013-09-21T16:45:00",
            end_time: "2013-09-21T18:05:00",
            pretty_time: '16:45 hs.',
            title: "Práctica con énfasis en conciencia corporal.",
            description: "",
            speakers: [naiana]
        },
        {
            id: 7,
            room: paris,
            date: "09/21/2013",
            day: viernes,
            time: "2013-09-21T16:45:00",
            end_time: "2013-09-21T18:05:00",
            pretty_time: '16:45 hs.',
            title: "Respiración consciente. Teoría y práctica.",
            description: "",
            speakers: [vanessa]
        },
        {
            id: 8,
            room: olimpic,
            date: "09/21/2013",
            day: viernes,
            time: "2013-09-21T18:30:00",
            end_time: "2013-09-21T20:00:00",
            pretty_time: '18:30 hs.',
            title: "Apertura conmemorativa de los diez años",
            description: "",
            speakers: []
        },
        {
            id: 9,
            room: 'Teatro del Globo (Marcelo T. de Alvear 1155)',
            date: "09/21/2013",
            day: viernes,
            time: "2013-09-21T22:00:00",
            end_time: "2013-09-21T23:30:00",
            pretty_time: '22:00 hs.',
            title: "Presentación de DeRose Art Company.",
            description: "",
            speakers: []
        },
        {
            "room": olimpic,
            "end_time": "2013-09-22T10:00:00",
            "description": "",
            "title": "Práctica ortodoxa con énfasis en reeducación comportamental",
            description: "",
            "url": "",
            "date": "09/22/2013",
            "speakers": [joris],
            "proposal_type": "Práctica",
            "id": 2,
            "time": "2013-09-22T10:00:00",
            "pretty_time": "10:00 hs.",
            "day": sabado
        },
        {
            id: 10,
            room: paris,
            date: "09/22/2013",
            day: sabado,
            time: "2013-09-22T10:00:00",
            end_time: "2013-09-22T11:20:00",
            pretty_time: '10:00 hs.',
            title: "Nuestras usinas nucleares. Comprensión, desarrollo y entrenamiento de los centros de fuerza.",
            description: "",
            speakers: [mariahelena]
        },
        {
            id: 11,
            room: olimpic,
            date: "09/22/2013",
            day: sabado,
            time: "2013-09-22T11:45:00",
            end_time: "2013-09-22T13:05:00",
            pretty_time: '11:45 hs.',
            title: "Sentimiento gregario: unión que fortalece. Vivencia teórica con un poco de práctica.",
            description: "",
            speakers: [nina]
        },
        {
            id: 12,
            room: paris,
            date: "09/22/2013",
            day: sabado,
            time: "2013-09-22T11:45:00",
            end_time: "2013-09-22T13:05:00",
            pretty_time: '11:45 hs.',
            title: "Coreografía, conciencia en movimiento. Teoría y práctica.",
            description: "",
            speakers: [melina]
        },
        {
            id: 13,
            room: olimpic,
            date: "09/22/2013",
            day: sabado,
            time: "2013-09-22T13:30:00",
            end_time: "2013-09-22T14:50:00",
            pretty_time: '13.30 hs.',
            title: "Práctica ortodoxa.",
            description: "",
            speakers: [fernanda, charles]
        },
        {
            id: 14,
            room: olimpic,
            date: "09/22/2013",
            day: sabado,
            time: "2013-09-22T15:15:00",
            end_time: "2013-09-22T16:35:00",
            pretty_time: '15:15 hs.',
            title: "El lenguaje gestual. Práctica",
            description: "",
            speakers: [naiana]
        },
        {
            id: 15,
            room: paris,
            date: "09/22/2013",
            day: sabado,
            time: "2013-09-22T15:15:00",
            end_time: "2013-09-22T16:35:00",
            pretty_time: '15:15 hs.',
            title: "Alimentación en el Método DeRose. Teoría",
            description: "",
            speakers: [rogerio]
        },
        {
            id: 16,
            room: 'Salón Versalles',
            date: "09/22/2013",
            day: sabado,
            time: "2013-09-22T15:15:00",
            end_time: "2013-09-22T16:35:00",
            pretty_time: '15:15 hs.',
            title: "Actualización del Concejo Administrativo y Colegiado de Presidentes de Federación, sólo para instructores de Unidades Acreditadas.",
            description: "",
            speakers: [derose,edgardo,charles]
        },
        {
            id: 17,
            room: olimpic,
            date: "09/22/2013",
            day: sabado,
            time: "2013-09-22T17:00:00",
            end_time: "2013-09-22T18:20:00",
            pretty_time: '17:00 hs.',
            title: "Mejorando la concentración. Posiciones de meditación y práctica.",
            description: "",
            speakers: [vanessa]
        },
        {
            id: 18,
            room: paris,
            date: "09/22/2013",
            day: sabado,
            time: "2013-09-22T17:00:00",
            end_time: "2013-09-22T18:20:00",
            pretty_time: '17:00 hs.',
            title: "Método de Ingeniería corporal. Práctica",
            description: "",
            speakers: [edgardo]
        },
        {
            id: 19,
            room: '',
            date: "09/22/2013",
            day: sabado,
            time: "2013-09-22T19:00:00",
            end_time: "2013-09-22T20:00:00",
            pretty_time: '19:00 hs.',
            title: "Lanzamiento de un nuevo libro del Maestro DeRose.",
            description: "",
            speakers: [derose]
        },
        {
            id: 20,
            room: 'Sede Cerviño (Rep. Árabe Siria 3088)',
            date: "09/22/2013",
            day: sabado,
            time: "2013-09-22T22:00:00",
            end_time: "2013-09-23T06:00:00",
            pretty_time: '22:00 hs.',
            title: "Fiesta de los 10 años.",
            description: "",
            speakers: []
        },
        {
            id: 21,
            room: olimpic,
            date: "09/23/2013",
            day: domingo,
            time: "2013-09-23T10:00:00",
            end_time: "2013-09-23T11:20:00",
            pretty_time: '10:00 hs.',
            title: "Buena forma con Método. Práctica",
            description: "",
            speakers: [rogerio]
        },
        {
            id: 22,
            room: paris,
            date: "09/23/2013",
            day: domingo,
            time: "2013-09-23T10:00:00",
            end_time: "2013-09-23T11:20:00",
            pretty_time: '10:00 hs.',
            title: "Cuerpo en poesía, coreografía. Teoría y práctica",
            description: "",
            speakers: [nina]
        },
        {
            id: 23,
            room: paris,
            date: "09/23/2013",
            day: domingo,
            time: "2013-09-23T11:45:00",
            end_time: "2013-09-23T13:05:00",
            pretty_time: '11:45 hs.',
            title: "Armado de una coreografía para la flashmob.",
            description: "",
            speakers: [yael]
        },
        {
            id: 24,
            room: olimpic,
            date: "09/23/2013",
            day: domingo,
            time: "2013-09-23T11:45:00",
            end_time: "2013-09-23T13:05:00",
            pretty_time: '11:45 hs.',
            title: "Práctica heterodoxa con énfasis en cambio de karma, sólo para instructores.",
            description: "",
            speakers: [joris]
        },
        {
            id: 25,
            room: '',
            date: "09/23/2013",
            day: domingo,
            time: "2013-09-23T13:30:00",
            end_time: "2013-09-23T14:30:00",
            pretty_time: '13:30 hs.',
            title: "Práctica al aire libre y flashmob, con el apoyo del Gobierno de la Ciudad de Buenos Aires.",
            description: "",
            speakers: []
        },
        {
            id: 26,
            room: olimpic,
            date: "09/23/2013",
            day: domingo,
            time: "2013-09-23T15:15:00",
            end_time: "2013-09-23T16:35:00",
            pretty_time: '15:15 hs.',
            title: "Sonidos de poder",
            description: "",
            speakers: [charles]
        },
        {
            id: 27,
            room: olimpic,
            date: "09/23/2013",
            day: domingo,
            time: "2013-09-23T17:00:00",
            end_time: "2013-09-23T19:40:00",
            pretty_time: '17:00 hs.',
            title: "Curso: Ásanas para Coreografía.",
            description: "",
            speakers: [derose]
        },
        {
            id: 28,
            room: olimpic,
            date: "09/23/2013",
            day: domingo,
            time: "2013-09-23T20:00:00",
            end_time: "2013-09-23T22:00:00",
            pretty_time: '20:00 hs.',
            title: "Sat chakra, coreografías, graduación y After Fest",
            description: "",
            speakers: [derose]
        },
        {
            id: 29,
            room: paris,
            date: "09/22/2013",
            day: sabado,
            time: "2013-09-22T13:30:00",
            end_time: "2013-09-22T14:50:00",
            pretty_time: '13:30 hs.',
            title: "El entrenamiento en Nuestra Cultura. Teoría y práctica.",
            description: "",
            speakers: [yael]
        }
    ]
});