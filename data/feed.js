var sala1 = "Sala 1";
var sala2 = "Sala 2";
var sala3 = "Sala 3";

var viernes = "Sexta-feira, 06/13/2014";
var sabado  = "Sábado, 06/14/2014";
var domingo = "Domingo, 06/15/2014";


var derose = {
    id: 1,
    order: '01',
    icon: null,
    first_name: "",
    last_name: "DeRose",
    photo: "resources/images/derose.jpg",
    position: "",
    name: "Precetor DeRose",
    affiliation: "",
    url: "http://www.metododerose.org/blogdoderose",
    bio: "",
    twitter: "@blogdoderose"
};

var edgardo = {
    id: 2,
    order: '02',
    icon: null,
    first_name: 'Edgardo',
    last_name: 'Caramella',
    photo: "resources/images/edi.jpg",
    position: "Presidente da Federação do Método DeROSE da Argentina.",
    name: "Mestre Edgardo Caramella",
    affiliation: "",
    url: "http://www.blogdeedgardo.com.ar",
    bio: "",
    twitter: ""
};

var charles = {
    id: 3,
    order: '03',
    icon: null,
    first_name: 'Charles',
    last_name: 'Maciel',
    photo: "resources/images/charles.jpg",
    position: "Diretor do Office - São Paulo - BR.",
    name: "Prof. Charles Maciel",
    affiliation: "",
    url: "http://www.metododerose.org",
    bio: "",
    twitter: ""
};

var fernanda = {
    id: 4,
    order: '04',
    icon: null,
    first_name: 'Fernanda',
    last_name: 'Neis',
    photo: "resources/images/fe.jpg",
    position: "Vice-Presidente do Diretório Central do Método DeROSE",
    name: "Profᵃ. Fernanda Neis",
    affiliation: "",
    url: "http://metododerosejardins.wordpress.com/",
    bio: "",
    twitter: ""
};

var nina = {
    id: 5,
    order: '05',
    icon: null,
    first_name: 'Nina',
    last_name: 'de Holanda',
    photo: "resources/images/nina.jpg",
    position: "Presidente da Federação do Método DeROSE - São Paulo - BR",
    name: "Profᵃ Nina de Holanda",
    affiliation: "",
    url: "http://unidademoema.blogspot.com/",
    bio: "",
    twitter: ""
};

var joris = {
    id: 6,
    order: '06',
    icon: null,
    first_name: 'Joris',
    last_name: 'Marengo',
    photo: "resources/images/joris.jpg",
    position: "Presidente da Federação do Método DeROSE de Santa Catarina - BR",
    name: "Prof. Joris Marengo",
    affiliation: "",
    url: "",
    bio: "",
    twitter: ""
};

var antonio = {
    id: 7,
    order: '07',
    icon: null,
    first_name: 'António',
    last_name: 'Pereira',
    photo: "resources/images/antonio.jpg",
    position: "Conselheiro Emérito do Conselho de Notáveis do Método DeROSE",
    name: "Prof. António Pereira",
    affiliation: "",
    url: "",
    bio: "",
    twitter: ""
};

var luis = {
    id: 8,
    order: '08',
    icon: null,
    first_name: 'Luís',
    last_name: 'Lopes',
    photo: "resources/images/luis.jpg",
    position: "Presidente da Federação do Método DeROSE de Portugal",
    name: "Prof. Luís Lopes",
    affiliation: "",
    url: "",
    bio: "",
    twitter: ""
};

var rosangela = {
    id: 9,
    order: '09',
    icon: null,
    first_name: 'Rosângela',
    last_name: 'de Castro',
    photo: "resources/images/ro.jpg",
    position: "Presidente de la Associação dos Profissionais do Método DeROSE de Saquarema - Rio de Janeiro - BR",
    name: "Profᵃ Rosângela de Castro",
    affiliation: "",
    url: "",
    bio: "",
    twitter: ""
};

var gustavo = {
    id: 10,
    order: '10',
    icon: null,
    first_name: 'Gustavo',
    last_name: 'Cardoso',
    photo: "resources/images/gustavo.jpg",
    position: "Presidente da Federação do Método DeROSE - Inglaterra",
    name: "Prof. Gustavo Cardoso",
    affiliation: "",
    url: "",
    bio: "",
    twitter: ""
};

var bruno = {
    id: 11,
    order: '11',
    icon: null,
    first_name: 'Bruno',
    last_name: 'Amaral',
    photo: "resources/images/bruno.jpg",
    position: "Presidente da Associação dos Profissionais do Método DeROSE de Telheiras - Lisboa - PT",
    name: "Prof. Bruno Amaral",
    affiliation: "",
    url: "",
    bio: "",
    twitter: ""
};

var edu = {
    id: 12,
    order: '12',
    icon: null,
    first_name: 'Eduardo',
    last_name: 'Cirilo',
    photo: "resources/images/edu.jpg",
    position: "Presidente da Associação dos Profissionais do Método DeROSE das Antas - Porto - PT",
    name: "Prof. Eduardo Cirilo",
    affiliation: "",
    url: "",
    bio: "",
    twitter: ""
};

Ext.data.JsonP.feedCb({
    "proposals": [
        {
            id: 1,
            room: "Pousada de Viseu",
            date: viernes,
            day: viernes,
            time: "2014-06-13T12:00:00",
            end_time: "2014-06-13T14:00:00",
            pretty_time: '12:00 hs.',
            title: "Check-in",
            description: "",
            speakers: []
        },
        {
            id: 2,
            room: "Claustro",
            date: viernes,
            day: viernes,
            time: "2014-06-13T14:15:00",
            end_time: "2014-06-13T15:00:00",
            pretty_time: '14:15 hs.',
            title: "Concerto de Abertura: Mantra Projekt",
            description: "",
            speakers: []
        },
        {
            id: 3,
            room: sala1,
            date: viernes,
            day: viernes,
            time: "2014-06-13T15:15:00",
            end_time: "2014-06-13T16:30:00",
            pretty_time: '15:15 hs.',
            title: "Flexibilidade passiva e flexibilidade ativa",
            description: "",
            speakers: [bruno]
        },
        {
            id: 4,
            room: sala2,
            date: viernes,
            day: viernes,
            time: "2014-06-13T15:15:00",
            end_time: "2014-06-13T16:30:00",
            pretty_time: '15:15 hs.',
            title: "Prática de ásana em dupla",
            description: "",
            speakers: [fernanda]
        },
        {
            id: 5,
            room: sala3,
            date: viernes,
            day: viernes,
            time: "2014-06-13T15:15:00",
            end_time: "2014-06-13T16:30:00",
            pretty_time: '15:15 hs.',
            title: "Gestão do tempo",
            description: "",
            speakers: [edu]
        },

        {
            id: 6,
            room: sala1,
            date: viernes,
            day: viernes,
            time: "2014-06-13T16:45:00",
            end_time: "2014-06-13T18:15:00",
            pretty_time: '16:45 hs.',
            title: "Mantra - força & poder",
            description: "",
            speakers: [rosangela]
        },
        {
            id: 7,
            room: sala2,
            date: viernes,
            day: viernes,
            time: "2014-06-13T16:45:00",
            end_time: "2014-06-13T18:15:00",
            pretty_time: '16:45 hs.',
            title: "Técnicas de respiração para reenergizar",
            description: "",
            speakers: [gustavo]
        },
        {
            id: 8,
            room: sala3,
            date: viernes,
            day: viernes,
            time: "2014-06-13T16:45:00",
            end_time: "2014-06-13T18:15:00",
            pretty_time: '16:45 hs.',
            title: "Códigos éticos aplicados na vida",
            description: "",
            speakers: [nina]
        },


        {
            id: 9,
            room: sala1,
            date: viernes,
            day: viernes,
            time: "2014-06-13T18:30:00",
            end_time: "2014-06-13T20:00:00",
            pretty_time: '18:30 hs.',
            title: "Aperfeiçoamento na prática ortodoxa",
            description: "Para Formadores de formadores do Método DeROSE",
            speakers: [edgardo]
        },
        {
            id: 10,
            room: sala2,
            date: viernes,
            day: viernes,
            time: "2014-06-13T18:30:00",
            end_time: "2014-06-13T20:00:00",
            pretty_time: '18:30 hs.',
            title: "O poder das escolhas",
            description: "",
            speakers: [joris]
        },

        
        {
            id: 11,
            room: "",
            date: viernes,
            day: viernes,
            time: "2014-06-13T20:00:00",
            end_time: "2014-06-13T21:00:00",
            pretty_time: '20:00 hs.',
            title: "Intervalo",
            description: "",
            speakers: []
        },

        
        {
            id: 12,
            room: "Claustro",
            date: viernes,
            day: viernes,
            time: "2014-06-13T21:00:00",
            end_time: "2014-06-13T22:30:00",
            pretty_time: '21:00 hs.',
            title: "Jantar",
            description: "",
            speakers: []
        },

        
        {
            id: 13,
            room: "Claustro",
            date: viernes,
            day: viernes,
            time: "2014-06-13T22:30:00",
            end_time: "2014-06-13T24:00:00",
            pretty_time: '22:30 hs.',
            title: "Concertos",
            description: "<ul><li><b>Grutera</b> - <i>O passado volta sempre</i> - Novo disco</li><li><b>Peter Lopes</b> - Acoustic & electronic sounds</li><li>Conversa com rumo II - <i>Liderança Humanizante</i> - Precetor DeRose e o Jornalista António Mateus</li><li><b>Lançamento do livro</b> - Precetor DeRose</li></ul>",
            speakers: []
        },


        {
            id: 14,
            room: sala1,
            date: sabado,
            day: sabado,
            time: "2014-06-14T10:00:00",
            end_time: "2014-06-14T11:30:00",
            pretty_time: '10:00 hs.',
            title: "Desenvolvimento dos centros energéticos",
            description: "",
            speakers: [rosangela]
        },
        {
            id: 15,
            room: sala2,
            date: sabado,
            day: sabado,
            time: "2014-06-14T10:00:00",
            end_time: "2014-06-14T11:30:00",
            pretty_time: '10:00 hs.',
            title: "Como aumentar a força muscular",
            description: "",
            speakers: [gustavo]
        },


        {
            id: 16,
            room: sala1,
            date: sabado,
            day: sabado,
            time: "2014-06-14T11:45:00",
            end_time: "2014-06-14T13:15:00",
            pretty_time: '11:45 hs.',
            title: "Liderança com Método",
            description: "",
            speakers: [edgardo]
        },
        {
            id: 17,
            room: sala2,
            date: sabado,
            day: sabado,
            time: "2014-06-14T11:45:00",
            end_time: "2014-06-14T13:15:00",
            pretty_time: '11:45 hs.',
            title: "Meridianos & energía",
            description: "",
            speakers: [luis]
        },

        {
            id: 18,
            room: sala1,
            date: sabado,
            day: sabado,
            time: "2014-06-14T13:30:00",
            end_time: "2014-06-14T15:00:00",
            pretty_time: '13:30 hs.',
            title: "Mantra com percussão",
            description: "",
            speakers: [charles]
        },


        {
            id: 19,
            room: sala1,
            date: sabado,
            day: sabado,
            time: "2014-06-14T15:15:00",
            end_time: "2014-06-14T16:45:00",
            pretty_time: '15:15 hs.',
            title: "Shaktí e shakta",
            description: "",
            speakers: [nina]
        },
        {
            id: 20,
            room: sala2,
            date: sabado,
            day: sabado,
            time: "2014-06-14T15:15:00",
            end_time: "2014-06-14T16:45:00",
            pretty_time: '15:15 hs.',
            title: "Liberdade! Liberdade!",
            description: "",
            speakers: [joris]
        },
        {
            id: 21,
            room: sala3,
            date: sabado,
            day: sabado,
            time: "2014-06-14T15:15:00",
            end_time: "2014-06-14T16:45:00",
            pretty_time: '15:15 hs.',
            title: "Descontração consciente",
            description: "",
            speakers: [antonio]
        },


        {
            id: 22,
            room: sala1,
            date: sabado,
            day: sabado,
            time: "2014-06-14T17:00:00",
            end_time: "2014-06-14T20:00:00",
            pretty_time: '17:00 hs.',
            title: "Método DeROSE e as boas relações humanas",
            description: "",
            speakers: [derose]
        },


        {
            id: 23,
            room: "",
            date: sabado,
            day: sabado,
            time: "2014-06-14T20:00:00",
            end_time: "2014-06-14T21:00:00",
            pretty_time: '20:00 hs.',
            title: "Intervalo",
            description: "",
            speakers: []
        },


        {
            id: 24,
            room: "Claustro",
            date: sabado,
            day: sabado,
            time: "2014-06-14T21:00:00",
            end_time: "2014-06-14T22:30:00",
            pretty_time: '21:00 hs.',
            title: "Jantar",
            description: "",
            speakers: []
        },


        {
            id: 25,
            room: "Claustro",
            date: sabado,
            day: sabado,
            time: "2014-06-14T22:30:00",
            end_time: "2014-06-14T24:00:00",
            pretty_time: '22:30 hs.',
            title: "Coreografias",
            description: "<ul><li>Solos de coreografias</li><li>Talk Box - Banda Cover</li></ul>",
            speakers: []
        },
        {
            id: 26,
            room: sala1,
            date: sabado,
            day: sabado,
            time: "2014-06-14T22:30:00",
            end_time: "2014-06-14T24:00:00",
            pretty_time: '22:30 hs.',
            title: "DeROSE Party - Dj D'Jesuz",
            description: "",
            speakers: []
        },



        {
            id: 27,
            room: sala1,
            date: domingo,
            day: domingo,
            time: "2014-06-15T09:00:00",
            end_time: "2014-06-15T10:30:00",
            pretty_time: '09:00 hs.',
            title: "Coreografia, o corpo em movimento",
            description: "",
            speakers: [bruno]
        },        


        {
            id: 28,
            room: sala1,
            date: domingo,
            day: domingo,
            time: "2014-06-15T10:45:00",
            end_time: "2014-06-15T12:15:00",
            pretty_time: '10:45 hs.',
            title: "Como mudar hábitos",
            description: "",
            speakers: [luis]
        },
        {
            id: 29,
            room: sala2,
            date: domingo,
            day: domingo,
            time: "2014-06-15T10:45:00",
            end_time: "2014-06-15T12:15:00",
            pretty_time: '10:45 hs.',
            title: "Limpeza e purificação: a renovação interna",
            description: "",
            speakers: [antonio]
        },        
        {
            id: 30,
            room: sala3,
            date: domingo,
            day: domingo,
            time: "2014-06-15T10:45:00",
            end_time: "2014-06-15T12:15:00",
            pretty_time: '10:45 hs.',
            title: "Administração do stress",
            description: "",
            speakers: [edu]
        },        


        {
            id: 31,
            room: sala1,
            date: domingo,
            day: domingo,
            time: "2014-06-15T12:30:00",
            end_time: "2014-06-15T14:00:00",
            pretty_time: '12:30 hs.',
            title: "Respiração, ação e emoção",
            description: "",
            speakers: [nina]
        },
        {
            id: 32,
            room: sala2,
            date: domingo,
            day: domingo,
            time: "2014-06-15T12:30:00",
            end_time: "2014-06-15T14:00:00",
            pretty_time: '12:30 hs.',
            title: "Como obter sucesso na profissão",
            description: "",
            speakers: [fernanda]
        },  


        {
            id: 33,
            room: sala1,
            date: domingo,
            day: domingo,
            time: "2014-06-15T14:15:00",
            end_time: "2014-06-15T15:45:00",
            pretty_time: '14:15 hs.',
            title: "Sistema de boa alimentação",
            description: "",
            speakers: [rosangela]
        },
        {
            id: 34,
            room: "Salão Nobre",
            date: domingo,
            day: domingo,
            time: "2014-06-15T14:15:00",
            end_time: "2014-06-15T15:45:00",
            pretty_time: '14:15 hs.',
            title: "Conversa com o Precetor DeRose e supervisionados",
            description: "Para Formadores de formadores do Método DeROSE",
            speakers: [derose]
        },


        {
            id: 35,
            room: sala1,
            date: domingo,
            day: domingo,
            time: "2014-06-15T16:00:00",
            end_time: "2014-06-15T17:15:00",
            pretty_time: '16:00 hs.',
            title: "Concentração e meditação, ferramentas para a ação",
            description: "",
            speakers: [edgardo]
        },
        {
            id: 36,
            room: sala2,
            date: domingo,
            day: domingo,
            time: "2014-06-15T16:00:00",
            end_time: "2014-06-15T17:15:00",
            pretty_time: '16:00 hs.',
            title: "A nova humanidade",
            description: "",
            speakers: [joris]
        },
        {
            id: 37,
            room: sala3,
            date: domingo,
            day: domingo,
            time: "2014-06-15T16:00:00",
            end_time: "2014-06-15T17:15:00",
            pretty_time: '16:00 hs.',
            title: "Pújá - a prática da gratidão",
            description: "",
            speakers: [charles]
        },


        {
            id: 38,
            room: sala1,
            date: domingo,
            day: domingo,
            time: "2014-06-15T17:30:00",
            end_time: "2014-06-15T18:00:00",
            pretty_time: '17:30 hs.',
            title: "Sat chakra de encerramento",
            description: "",
            speakers: [derose]
        }
    ]
});