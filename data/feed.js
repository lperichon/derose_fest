var olimpic = "Salón Olímpic (piso 12)";
var paris =   "Salón Paris (piso 1)";

var jueves  = "Jueves, 09/18/2014"
var viernes = "Viernes, 09/19/2014";
var sabado  = "Sábado, 09/20/2014";
var domingo = "Domingo, 09/21/2014";

var yael = {
    id: 13,
    order: '10',
    icon: null,
    first_name: 'Yael',
    last_name: 'Barcesat',
    photo: "resources/images/yael.jpg",
    position: "Vicepresidente de la Federación del Método DeRose de Argentina.",
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
    position: "Presidente de la Federación del Método DeRose de Argentina.",
    name: "Maestro Edgardo Caramella",
    affiliation: "",
    url: "http://www.blogdeedgardo.com.ar",
    bio: "Autor de los libros Bienvenido Yôga, Yôga y energía sexual, La dieta del Yôga y Yôga, guía básica.",
    twitter: ""
}

var charles = {
    id: 12,
    order: '04',
    icon: null,
    first_name: 'Charles',
    last_name: 'Maciel',
    photo: "resources/images/charles.jpg",
    position: "Director de Office.",
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
    position: "Presidente de la Federación del Método DeRose São Paulo, Brasil.",
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
    position: "Presidente de la Federación del Método DeRose de Paraná, Brasil.",
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
    position: "Directora general de Método DeRose Leblon, Rio de Janeiro, Brasil.",
    name: "Prof. Vanessa de Holanda",
    affiliation: "",
    url: "http://www.vanessadeholanda.com/",
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
    position: "Presidente de la Federación del Método DeRose de Rio de Janeiro, Brasil.",
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
    position: "Vicepresidente de la Federación del Método DeRose de Paraná, Brasil.",
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
    position: "Presidente de la Federación del Método DeRose de Santa Catarina, Brasil.",
    name: "Prof. Joris Marengo",
    affiliation: "",
    url: "http://www.novoexecutivo.com.br/",
    bio: "<p>Autor del libro Yôga Antigo para iniciantes.</p>",
    twitter: "",
    last_name: "Marengo"
};


var nilzo = {
    id: 1,
    order: '12',
    icon: null,
    first_name: "Nilzo",
    photo: "resources/images/nilzo.jpg",
    position: "Director general de Método DeRose Batel.",
    name: "Prof. Nilzo Andrade",
    affiliation: "",
    url: "",
    bio: "",
    twitter: "",
    last_name: "Andrade"
};

var derose = {
    id: 2,
    order: '01',
    icon: null,
    first_name: "",
    last_name: "DeRose",
    photo: "resources/images/derose.jpg",
    position: "Sistematizador del Método DeRose.",
    name: "Maestro DeRose",
    affiliation: "",
    url: "http://www.metododerose.org/blogdoderose",
    bio: "Autor de los libros: Tratado de Yôga, Quando é preciso ser forte, Tudo o que você nunca quis saber sobre Yôga, Programa do Curso Básico, Método de Boas Maneiras, Eu me lembro…, Encontro com o Mestre, Sútras – máximas de lucidez e êxtase, entre otros.",
    twitter: "@blogdoderose"
}

Ext.data.JsonP.feedCb({
        "proposals": [
        {
            id: 1,
            room: "",
            date: viernes,
            day: viernes,
            time: "2014-09-19T13:30:00",
            end_time: "2014-09-19T15:05:00",
            pretty_time: '13:30 hs.',
            title: "Acreditación",
            description: "",
            speakers: []
        },
        {
            id: 2,
            room: paris,
            date: viernes,
            day: viernes,
            time: "2014-09-19T15:15:00",
            end_time: "2014-09-20T16:35:00",
            pretty_time: '15:15 hs.',
            title: "Buena forma",
            description: "",
            speakers: [rogerio]
        },
        {
            id: 3,
            room: olimpic,
            date: viernes,
            day: viernes,
            time: "2014-09-19T15:30:00",
            end_time: "2014-09-19T16:50:00",
            pretty_time: '15:30 hs.',
            title: "Coreografía, cuerpo y poesía",
            description: "Teórica y práctica, basada en el encadenamiento de técnicas orgánicas que sumadas hacen surgir un movimiento armonioso, fuerte, envolvente, utilizando uno de los ejemplos más antiguos de nuestra historia, la coreografía.",
            speakers: [nina]
        },
        {
            id: 4,
            room: paris,
            date: viernes,
            day: viernes,
            time: "2014-09-19T17:00:00",
            end_time: "2014-09-19T18:20:00",
            pretty_time: '17:00 hs.',
            title: "Práctica ortodoxa",
            description: "Práctica ortodoxa con énfasis en alto desempeño.",
            speakers: [joris]
        },
        {
            id: 5,
            room: olimpic,
            date: viernes,
            day: viernes,
            time: "2014-09-19T17:15:00",
            end_time: "2014-09-19T18:35:00",
            pretty_time: '17:15 hs.',
            title: "Ritmos y conciencia en la respiración",
            description: "",
            speakers: [vanessa]
        },
        {
            id: 6,
            room: '',
            date: viernes,
            day: viernes,
            time: "2014-09-19T19:00:00",
            end_time: "2014-09-20T20:00:00",
            pretty_time: '19:00 hs.',
            title: "Apertura",
            description: "",
            speakers: []
        },
        {
            id: 7,
            room: '',
            date: viernes,
            day: viernes,
            time: "2014-09-19T20:00:00",
            end_time: "2014-09-20T21:00:00",
            pretty_time: '20:00 hs.',
            title: "Lanzamiento",
            description: "",
            speakers: []
        },
        {
            id: 8,
            room: olimpic,
            date: sabado,
            day: sabado,
            time: "2014-09-20T10:15:00",
            end_time: "2014-09-21T11:35:00",
            pretty_time: '10:15 hs.',
            title: "Desafiando la gravedad",
            description: "Entrenamiento de estabilidad y foco.",
            speakers: [melina]
        },
        {
            id: 9,
            room: paris,
            date: sabado,
            day: sabado,
            time: "2014-09-20T10:00:00",
            end_time: "2014-09-20T11:20:00",
            pretty_time: '10:00 hs.',
            title: "Despertando la lucidez",
            description: "",
            speakers: [mariahelena]
        },
        {
            id: 10,
            room: olimpic,
            date: sabado,
            day: sabado,
            time: "2014-09-20T12:00:00",
            end_time: "2014-09-20T13:20:00",
            pretty_time: '12:00 hs.',
            title: "Buena cabeza",
            description: "",
            speakers: [rogerio]
        },
        {
            id: 11,
            room: paris,
            date: sabado,
            day: sabado,
            time: "2014-09-20T11:45:00",
            end_time: "2014-09-20T13:05:00",
            pretty_time: '11:45 hs.',
            title: "Alegría y ritmo",
            description: "",
            speakers: [edgardo]
        },
        {
            id: 12,
            room: paris,
            date: sabado,
            day: sabado,
            time: "2014-09-20T13:30:00",
            end_time: "2014-09-20T14:50:00",
            pretty_time: '13:30 hs.',
            title: "La magia de los cuerpos",
            description: "Práctica en dupla.",
            speakers: [nina]
        },
        {
            id: 13,
            room: olimpic,
            date: sabado,
            day: sabado,
            time: "2014-09-20T13:45:00",
            end_time: "2014-09-20T15:05:00",
            pretty_time: '13:45 hs.',
            title: "Creá tu mejor versión",
            description: "",
            speakers: [nilzo]
        },
        {
            id: 14,
            room: paris,
            date: sabado,
            day: sabado,
            time: "2014-09-20T15:15:00",
            end_time: "2014-09-20T16:35:00",
            pretty_time: '15:15 hs.',
            title: "Práctica ortodoxa",
            description: "",
            speakers: [charles]
        },
        {
            id: 15,
            room: olimpic,
            date: sabado,
            day: sabado,
            time: "2014-09-20T15:30:00",
            end_time: "2014-09-20T16:50:00",
            pretty_time: '15:30 hs.',
            title: "Creación de una coreografía",
            description: "",
            speakers: [yael]
        },
        {
            id: 16,
            room: olimpic,
            date: sabado,
            day: sabado,
            time: "2014-09-20T17:15:00",
            end_time: "2014-09-20T18:35:00",
            pretty_time: '17:15 hs.',
            title: "Ampliando la concentración",
            description: "",
            speakers: [vanessa]
        },
        {
            id: 17,
            room: paris,
            date: sabado,
            day: sabado,
            time: "2014-09-20T17:00:00",
            end_time: "2014-09-20T18:20:00",
            pretty_time: '17:00 hs.',
            title: "Trascendiendo los paradigmas",
            description: "",
            speakers: [joris]
        },
        {
            id: 18,
            room: 'Sede Palermo',
            date: sabado,
            day: sabado,
            time: "2014-09-20T22:00:00",
            end_time: "2014-09-20T06:00:00",
            pretty_time: '22:00 hs.',
            title: "Fiesta",
            description: "",
            speakers: []
        },
        {
            id: 19,
            room: paris,
            date: domingo,
            day: domingo,
            time: "2014-09-21T10:00:00",
            end_time: "2014-09-22T11:20:00",
            pretty_time: '10:00 hs.',
            title: "Buena alimentación",
            description: "",
            speakers: [rogerio]
        },
        {
            id: 20,
            room: olimpic,
            date: domingo,
            day: domingo,
            time: "2014-09-21T10:15:00",
            end_time: "2014-09-22T11:35:00",
            pretty_time: '10:15 hs.',
            title: "Respiración, acción y emoción",
            description: "Teórico y práctico, acerca de la importancia de este acto vital, la concientización de la respiración correcta, la canalización de la energía sutil y el dominio de las emociones y acciones.",
            speakers: [nina]
        },
        {
            id: 21,
            room: olimpic,
            date: domingo,
            day: domingo,
            time: "2014-09-21T12:00:00",
            end_time: "2014-09-21T13:20:00",
            pretty_time: '12:00 hs.',
            title: "La rutina del practicante",
            description: "",
            speakers: [nilzo]
        },
        {
            id: 22,
            room: paris,
            date: domingo,
            day: domingo,
            time: "2014-09-21T11:45:00",
            end_time: "2014-09-21T13:05:00",
            pretty_time: '11:45 hs.',
            title: "La danza de Shiva",
            description: "",
            speakers: [mariahelena]
        },
        {
            id: 23,
            room: paris,
            date: domingo,
            day: domingo,
            time: "2014-09-21T13:30:00",
            end_time: "2014-09-21T14:50:00",
            pretty_time: '13:30 hs.',
            title: "Autosuperación y perseverancia",
            description: "Entrenamiento intensivo de técnicas orgánicas.",
            speakers: [melina]
        },
        {
            id: 24,
            room: olimpic,
            date: domingo,
            day: domingo,
            time: "2014-09-21T13:45:00",
            end_time: "2014-09-21T15:05:00",
            pretty_time: '13:45 hs.',
            title: "Práctica ortodoxa",
            description: "",
            speakers: [edgardo]
        },
        {
            id: 25,
            room: olimpic,
            date: domingo,
            day: domingo,
            time: "2014-09-21T15:15:00",
            end_time: "2014-09-21T16:15:00",
            pretty_time: '15:15 hs.',
            title: "Sonidos de poder",
            description: "",
            speakers: [charles]
        },
        {
            id: 26,
            room: olimpic,
            date: domingo,
            day: domingo,
            time: "2014-09-21T17:00:00",
            end_time: "2014-09-21T20:00:00",
            pretty_time: '17:00 hs.',
            title: "Curso",
            description: "",
            speakers: [derose]
        },
        {
            id: 27,
            room: olimpic,
            date: domingo,
            day: domingo,
            time: "2014-09-21T20:00:00",
            end_time: "2014-09-21T21:00:00",
            pretty_time: '20:00 hs.',
            title: "Sat chakra",
            description: "",
            speakers: []
        },
        {
            id: 28,
            room: 'Sede Cerviño',
            date: domingo,
            day: domingo,
            time: "2014-09-21T22:00:00",
            end_time: "2014-09-22T02:00:00",
            pretty_time: '22:00 hs.',
            title: "Cine al aire libre",
            description: "",
            speakers: []
        },
        {
            id: 29,
            room: 'Sala Siranush',
            date: jueves,
            day: jueves,
            time: "2014-09-18T22:00:00",
            end_time: "2014-09-19T00:00:00",
            pretty_time: '22:00 hs.',
            title: "DeRose ArtCompany",
            description: "Armenia 1353, Palermo",
            speakers: []
        }
    ]
});