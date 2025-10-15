import type { Team, Player } from "./types";

export const teams: Team[] = [
  {
    id: '1',
    name: 'Djurgården',
    colors: ['#1E40AF', '#FCD34D'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '2',
    name: 'Huddinge',
    colors: ['#000000', '#FFFFFF'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '3',
    name: 'Alvik',
    colors: ['#10B981', '#FCD34D'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '4',
    name: 'Eskilstuna',
    colors: ['#fff', '#1E40AF'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '5',
    name: 'Trelleborg',
    colors: ['#DC2626', '#FFFFFF'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '6',
    name: 'Eos',
    colors: ['green', '#FFFFFF'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '7',
    name: 'Fryshuset',
    colors: ['#000000', '#0EA5E9'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '8',
    name: 'AIK',
    colors: ['#000000', '#FCD34D'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '9',
    name: 'Aros',
    colors: ['#fff', '#000'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '10',
    name: 'Sollentuna',
    colors: ['#0EA5E9', '#FFFFFF'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '11',
    name: 'Malbas',
    colors: ['#F97316', '#FFFFFF'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '12',
    name: 'Ockelbo',
    colors: ['#F97316', '#000000'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '13',
    name: 'Wetterbygden',
    colors: ['#1E40AF', '#F97316'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '14',
    name: 'Blackeberg',
    colors: ['#DC2626', '#FFFFFF'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  }
];

export const players: Player[] = [
  // Djurgården
  {
    id: '1',
    name: 'Andreas Von Uthmann',
    position: 'Guard',
    jerseyNumber: 14,
    birthYear: 1996,
    teamId: '1',
    profileImage: ''
  },
  {
    id: '2',
    name: 'Axel Grytberg',
    position: 'Forward',
    jerseyNumber: 13,
    birthYear: 2007,
    teamId: '1',
    profileImage: ''
  },
  {
    id: '3',
    name: 'Dante Jones',
    position: 'Guard',
    jerseyNumber: 5,
    birthYear: 2006,
    teamId: '1',
    profileImage: ''
  },
  {
    id: '4',
    name: 'Hampus Åhlin',
    position: 'Forward',
    jerseyNumber: 12,
    birthYear: 1995,
    teamId: '1',
    profileImage: ''
  },
  {
    id: '5',
    name: 'Hannes Brasch',
    position: 'Guard',
    jerseyNumber: 9,
    birthYear: 2004,
    teamId: '1',
    profileImage: ''
  },
  {
    id: '6',
    name: 'Johan Rafstedt',
    position: 'Guard',
    jerseyNumber: 4,
    birthYear: 1999,
    teamId: '1',
    profileImage: ''
  },
  {
    id: '7',
    name: 'Lucas Lindh',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 1998,
    teamId: '1',
    profileImage: ''
  },
  {
    id: '8',
    name: 'Niklas Herring',
    position: 'Forward',
    jerseyNumber: 6,
    birthYear: 1999,
    teamId: '1',
    profileImage: ''
  },
  {
    id: '9',
    name: 'Noel Smeds',
    position: 'Forward',
    jerseyNumber: 999,
    birthYear: 2003,
    teamId: '1',
    profileImage: ''
  },
  {
    id: '10',
    name: 'Pars Esef Erenköy',
    position: 'Guard',
    jerseyNumber: 11,
    birthYear: 1998,
    teamId: '1',
    profileImage: ''
  },
  {
    id: '11',
    name: 'Samuel Pernyér',
    position: 'Guard',
    jerseyNumber: 7,
    birthYear: 2004,
    teamId: '1',
    profileImage: ''
  },
  {
    id: '12',
    name: 'Theo Kermoury',
    position: 'Forward',
    jerseyNumber: 8,
    birthYear: 2006,
    teamId: '1',
    profileImage: ''
  },
  // Huddinge
  {
    id: '13',
    name: 'Aleksandar Cigoja',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2006,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '14',
    name: 'Ali Kheniab',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2005,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '15',
    name: 'Amund Brataas Morin',
    position: 'Guard',
    jerseyNumber: 6,
    birthYear: 2000,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '16',
    name: 'Can Yöneyman',
    position: 'Guard',
    jerseyNumber: 4,
    birthYear: 2005,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '17',
    name: 'Dawid Lasek',
    position: 'Forward',
    jerseyNumber: 2,
    birthYear: 2004,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '18',
    name: 'Eskil Brataas Morin',
    position: 'Guard',
    jerseyNumber: 8,
    birthYear: 2004,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '19',
    name: 'Glenn Ali',
    position: 'Forward',
    jerseyNumber: 22,
    birthYear: 1998,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '20',
    name: 'Gustav Årstrand',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2006,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '21',
    name: 'Hampus Åkerberg Åkerman',
    position: 'Center',
    jerseyNumber: 999,
    birthYear: 2001,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '22',
    name: 'Kevin Obenjo',
    position: 'Guard',
    jerseyNumber: 9,
    birthYear: 2007,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '23',
    name: 'Linus Berglund',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2007,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '24',
    name: 'Mak Bajic',
    position: 'Forward',
    jerseyNumber: 17,
    birthYear: 1997,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '25',
    name: 'Nassim Mrabty',
    position: 'Forward',
    jerseyNumber: 15,
    birthYear: 1999,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '26',
    name: 'Oliwer Larsson',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2003,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '27',
    name: 'Ramin Mardani',
    position: 'Forward',
    jerseyNumber: 999,
    birthYear: 2006,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '28',
    name: 'Sami Johansson Van Maars',
    position: 'Guard',
    jerseyNumber: 5,
    birthYear: 2007,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '29',
    name: 'Simon Ali',
    position: 'Guard',
    jerseyNumber: 23,
    birthYear: 2004,
    teamId: '2',
    profileImage: ''
  },
  {
    id: '30',
    name: 'Victor Johnson-Saka',
    position: 'Guard',
    jerseyNumber: 12,
    birthYear: 2004,
    teamId: '2',
    profileImage: ''
  },

  // Alvik
  {
    id: '31',
    name: 'Adam Lindahl',
    position: 'Guard',
    jerseyNumber: 15,
    birthYear: 2007,
    teamId: '3',
    profileImage: ''
  },
  {
    id: '32',
    name: 'Alexander Folin',
    position: 'Guard',
    jerseyNumber: 14,
    birthYear: 2008,
    teamId: '3',
    profileImage: ''
  },
  {
    id: '33',
    name: 'Boris Ottosson Vidlund',
    position: 'Forward',
    jerseyNumber: 12,
    birthYear: 2005,
    teamId: '3',
    profileImage: ''
  },
  {
    id: '34',
    name: 'David Wissmar',
    position: 'Center',
    jerseyNumber: 22,
    birthYear: 2002,
    teamId: '3',
    profileImage: ''
  },
  {
    id: '35',
    name: 'Dexter Liljeholm',
    position: 'Guard',
    jerseyNumber: 11,
    birthYear: 2007,
    teamId: '3',
    profileImage: ''
  },
  {
    id: '36',
    name: 'Eskil Levin',
    position: 'Guard',
    jerseyNumber: 6,
    birthYear: 2002,
    teamId: '3',
    profileImage: ''
  },
  {
    id: '37',
    name: 'Joel Barenthein',
    position: 'Forward',
    jerseyNumber: 0,
    birthYear: 2006,
    teamId: '3',
    profileImage: ''
  },
  {
    id: '38',
    name: 'Leo Ryott',
    position: 'Wing',
    jerseyNumber: 13,
    birthYear: 2006,
    teamId: '3',
    profileImage: ''
  },
  {
    id: '39',
    name: 'Ludvig Prytz',
    position: 'Wing',
    jerseyNumber: 5,
    birthYear: 2007,
    teamId: '3',
    profileImage: ''
  },
  {
    id: '40',
    name: 'Mikael Axelsson',
    position: 'Center',
    jerseyNumber: 31,
    birthYear: 1994,
    teamId: '3',
    profileImage: ''
  },
  {
    id: '41',
    name: 'Noah Ranégie',
    position: 'Center',
    jerseyNumber: 16,
    birthYear: 2007,
    teamId: '3',
    profileImage: ''
  },
  {
    id: '42',
    name: 'Pontus Nilsson',
    position: 'Guard',
    jerseyNumber: 3,
    birthYear: 2005,
    teamId: '3',
    profileImage: ''
  },
  {
    id: '43',
    name: 'Samir Ahmed',
    position: 'Guard',
    jerseyNumber: 10,
    birthYear: 2005,
    teamId: '3',
    profileImage: ''
  },
  {
    id: '44',
    name: 'Walter Sand Musanovic',
    position: 'Guard',
    jerseyNumber: 7,
    birthYear: 2007,
    teamId: '3',
    profileImage: ''
  },
  {
    id: '45',
    name: 'Wiggo Wiberg Lloclla',
    position: 'Forward',
    jerseyNumber: 8,
    birthYear: 2000,
    teamId: '3',
    profileImage: ''
  },

  // Eskilstuna
  {
    id: '46',
    name: 'Adam Karahmetovic',
    position: 'Guard',
    jerseyNumber: 47,
    birthYear: 1998,
    teamId: '4',
    profileImage: ''
  },
  {
    id: '47',
    name: 'Aken Muorwel',
    position: 'Guard',
    jerseyNumber: 14,
    birthYear: 1999,
    teamId: '4',
    profileImage: ''
  },
  {
    id: '48',
    name: 'Albin Sandeberg',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 1999,
    teamId: '4',
    profileImage: ''
  },
  {
    id: '49',
    name: 'Alvar Brådd',
    position: 'Guard',
    jerseyNumber: 15,
    birthYear: 2007,
    teamId: '4',
    profileImage: ''
  },
  {
    id: '50',
    name: 'Benjamin Cehic',
    position: 'Guard',
    jerseyNumber: 10,
    birthYear: 2007,
    teamId: '4',
    profileImage: ''
  },
  {
    id: '51',
    name: 'Davids Eduards Alvateris',
    position: 'Guard',
    jerseyNumber: 8,
    birthYear: 2004,
    teamId: '4',
    profileImage: ''
  },
  {
    id: '52',
    name: 'Einar Brådd',
    position: 'Forward',
    jerseyNumber: 24,
    birthYear: 2000,
    teamId: '4',
    profileImage: ''
  },
  {
    id: '53',
    name: 'Elisha Ninkingira',
    position: 'Guard',
    jerseyNumber: 7,
    birthYear: 2004,
    teamId: '4',
    profileImage: ''
  },
  {
    id: '54',
    name: 'Hampus Andersson',
    position: 'Guard',
    jerseyNumber: 4,
    birthYear: 2001,
    teamId: '4',
    profileImage: ''
  },
  {
    id: '55',
    name: 'John Cooper',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2006,
    teamId: '4',
    profileImage: ''
  },
  {
    id: '56',
    name: 'Kevin Lieu',
    position: 'Guard',
    jerseyNumber: 14,
    birthYear: 2000,
    teamId: '4',
    profileImage: ''
  },
  {
    id: '57',
    name: 'Muorwell Muorwel',
    position: 'Center',
    jerseyNumber: 6,
    birthYear: 2002,
    teamId: '4',
    profileImage: ''
  },
  {
    id: '58',
    name: 'Philip Georgson',
    position: 'Wing',
    jerseyNumber: 3,
    birthYear: 2003,
    teamId: '4',
    profileImage: ''
  },
  {
    id: '59',
    name: 'Sigge Wingemark',
    position: 'Guard',
    jerseyNumber: 11,
    birthYear: 2007,
    teamId: '4',
    profileImage: ''
  },
  {
    id: '60',
    name: 'Simon Findén',
    position: 'Guard',
    jerseyNumber: 9,
    birthYear: 2000,
    teamId: '4',
    profileImage: ''
  },
  {
    id: '61',
    name: 'William Hamzehnejad',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2001,
    teamId: '4',
    profileImage: ''
  },

  // Trelleborg
  {
    id: '62',
    name: 'Adam Boijertz',
    position: 'Guard',
    jerseyNumber: 27,
    birthYear: 2008,
    teamId: '5',
    profileImage: ''
  },
  {
    id: '63',
    name: 'Anton Nysten',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2008,
    teamId: '5',
    profileImage: ''
  },
  {
    id: '64',
    name: 'Elias Lilja Hadir',
    position: 'Forward',
    jerseyNumber: 5,
    birthYear: 2006,
    teamId: '5',
    profileImage: ''
  },
  {
    id: '65',
    name: 'Hugo Okehie',
    position: 'Guard',
    jerseyNumber: 8,
    birthYear: 2005,
    teamId: '5',
    profileImage: ''
  },
  {
    id: '66',
    name: 'Karl Drammeh',
    position: 'Center',
    jerseyNumber: 12,
    birthYear: 1999,
    teamId: '5',
    profileImage: ''
  },
  {
    id: '67',
    name: 'Melvin Pasic',
    position: 'Guard',
    jerseyNumber: 15,
    birthYear: 2007,
    teamId: '5',
    profileImage: ''
  },
  {
    id: '68',
    name: 'Mikai Klintman',
    position: 'Guard',
    jerseyNumber: 3,
    birthYear: 2004,
    teamId: '5',
    profileImage: ''
  },
  {
    id: '69',
    name: 'Nikolai Zinkernagel',
    position: 'Guard',
    jerseyNumber: 19,
    birthYear: 2007,
    teamId: '5',
    profileImage: ''
  },
  {
    id: '70',
    name: 'Noah Boyewa',
    position: 'Forward',
    jerseyNumber: 2,
    birthYear: 2007,
    teamId: '5',
    profileImage: ''
  },
  {
    id: '71',
    name: 'Teodor Nyström',
    position: 'Center',
    jerseyNumber: 6,
    birthYear: 1999,
    teamId: '5',
    profileImage: ''
  },
  {
    id: '72',
    name: 'William Svenonius',
    position: 'Forward',
    jerseyNumber: 999,
    birthYear: 2001,
    teamId: '5',
    profileImage: ''
  },

  // IK Eos
  {
    id: '73',
    name: 'Ahmad Okdeh',
    position: 'Center',
    jerseyNumber: 8,
    birthYear: 2003,
    teamId: '6',
    profileImage: ''
  },
  {
    id: '74',
    name: 'Felix Wollberg',
    position: 'Guard',
    jerseyNumber: 2,
    birthYear: 2004,
    teamId: '6',
    profileImage: ''
  },
  {
    id: '75',
    name: 'Filip Forsgren',
    position: 'Guard',
    jerseyNumber: 21,
    birthYear: 2003,
    teamId: '6',
    profileImage: ''
  },
  {
    id: '76',
    name: 'Gabriel Stenberg',
    position: 'Guard',
    jerseyNumber: 14,
    birthYear: 2006,
    teamId: '6',
    profileImage: ''
  },
  {
    id: '77',
    name: 'Hannes Mejare Berntsson',
    position: 'Guard',
    jerseyNumber: 4,
    birthYear: 2002,
    teamId: '6',
    profileImage: ''
  },
  {
    id: '78',
    name: 'Hoggar Ali',
    position: 'Forward',
    jerseyNumber: 9,
    birthYear: 2003,
    teamId: '6',
    profileImage: ''
  },
  {
    id: '79',
    name: 'Jakob Skelander Ekberg',
    position: 'Forward',
    jerseyNumber: 13,
    birthYear: 2005,
    teamId: '6',
    profileImage: ''
  },
  {
    id: '80',
    name: 'Kembo Nilsson',
    position: 'Wing',
    jerseyNumber: 3,
    birthYear: 2005,
    teamId: '6',
    profileImage: ''
  },
  {
    id: '81',
    name: 'Marc Benson',
    position: 'Center',
    jerseyNumber: 19,
    birthYear: 2001,
    teamId: '6',
    profileImage: ''
  },
  {
    id: '82',
    name: 'Nils Kihlström',
    position: 'Forward',
    jerseyNumber: 1,
    birthYear: 2004,
    teamId: '6',
    profileImage: ''
  },
  {
    id: '83',
    name: 'Noah Nilén',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2005,
    teamId: '6',
    profileImage: ''
  },
  {
    id: '84',
    name: 'Philippe Auvray',
    position: 'Forward',
    jerseyNumber: 50,
    birthYear: 2003,
    teamId: '6',
    profileImage: ''
  },
  {
    id: '85',
    name: 'Ruben Sternheden',
    position: 'Guard',
    jerseyNumber: 7,
    birthYear: 2007,
    teamId: '6',
    profileImage: ''
  },

  // Fryshuset
  {
    id: '86',
    name: 'Elias Englund Ghebreab',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2009,
    teamId: '7',
    profileImage: ''
  },
  {
    id: '87',
    name: 'Frank Nasasa Karlsson',
    position: 'Guard',
    jerseyNumber: 27,
    birthYear: 2009,
    teamId: '7',
    profileImage: ''
  },
  {
    id: '88',
    name: 'Jerome Holm Keita',
    position: 'Forward',
    jerseyNumber: 999,
    birthYear: 2008,
    teamId: '7',
    profileImage: ''
  },
  {
    id: '89',
    name: 'Joakim Calixte Rosengren',
    position: 'Guard',
    jerseyNumber: 5,
    birthYear: 2006,
    teamId: '7',
    profileImage: ''
  },
  {
    id: '90',
    name: 'Kebba Jawla',
    position: 'Forward',
    jerseyNumber: 999,
    birthYear: 2008,
    teamId: '7',
    profileImage: ''
  },
  {
    id: '91',
    name: 'Leo Chatziathanasiou Letl',
    position: 'Guard',
    jerseyNumber: 5,
    birthYear: 2002,
    teamId: '7',
    profileImage: ''
  },
  {
    id: '92',
    name: 'Leonard Halling Ibo',
    position: 'Center',
    jerseyNumber: 10,
    birthYear: 1993,
    teamId: '7',
    profileImage: ''
  },
  {
    id: '93',
    name: 'Linus Victorin Verkruyssen',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2008,
    teamId: '7',
    profileImage: ''
  },
  {
    id: '94',
    name: 'Micheal Odinks',
    position: 'Forward',
    jerseyNumber: 10,
    birthYear: 2009,
    teamId: '7',
    profileImage: ''
  },
  {
    id: '95',
    name: 'Pedro Lelo Hök',
    position: 'Guard',
    jerseyNumber: 34,
    birthYear: 2004,
    teamId: '7',
    profileImage: ''
  },
  {
    id: '96',
    name: 'Rodrigas Jucevicius',
    position: 'Forward',
    jerseyNumber: 13,
    birthYear: 2008,
    teamId: '7',
    profileImage: ''
  },
  {
    id: '97',
    name: 'Samoro Njie Unger',
    position: 'Center',
    jerseyNumber: 11,
    birthYear: 1995,
    teamId: '7',
    profileImage: ''
  },
  {
    id: '98',
    name: 'Winston Ilori',
    position: 'Guard',
    jerseyNumber: 9,
    birthYear: 2008,
    teamId: '7',
    profileImage: ''
  },

  // AIK
  {
    id: '99',
    name: 'Aleksandar Petrovic',
    position: 'Center',
    jerseyNumber: 999,
    birthYear: 1993,
    teamId: '8',
    profileImage: ''
  },
  {
    id: '100',
    name: 'Biyan Toprak',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2006,
    teamId: '8',
    profileImage: ''
  },
  {
    id: '101',
    name: 'Colin Mc Inerney',
    position: 'Forward',
    jerseyNumber: 10,
    birthYear: 2004,
    teamId: '8',
    profileImage: ''
  },
  {
    id: '102',
    name: 'Dante Myrthil',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2004,
    teamId: '8',
    profileImage: ''
  },
  {
    id: '103',
    name: 'David Häggqvist Jallow',
    position: 'Forward',
    jerseyNumber: 999,
    birthYear: 1993,
    teamId: '8',
    profileImage: ''
  },
  {
    id: '104',
    name: 'Elias Nilsson',
    position: 'Center',
    jerseyNumber: 4,
    birthYear: 2003,
    teamId: '8',
    profileImage: ''
  },
  {
    id: '105',
    name: 'Elliot Lidberg',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2004,
    teamId: '8',
    profileImage: ''
  },
  {
    id: '106',
    name: 'Isak Simsek',
    position: 'Forward',
    jerseyNumber: 9,
    birthYear: 2006,
    teamId: '8',
    profileImage: ''
  },
  {
    id: '107',
    name: 'Ludvig Lindby',
    position: 'Guard',
    jerseyNumber: 7,
    birthYear: 2006,
    teamId: '8',
    profileImage: ''
  },
  {
    id: '108',
    name: 'Oliver Ehrnvall',
    position: 'Forward',
    jerseyNumber: 11,
    birthYear: 1996,
    teamId: '8',
    profileImage: ''
  },
  {
    id: '109',
    name: 'Olle Welander',
    position: 'Center',
    jerseyNumber: 11,
    birthYear: 2000,
    teamId: '8',
    profileImage: ''
  },
  {
    id: '110',
    name: 'Pascal Dahlgren',
    position: 'Guard',
    jerseyNumber: 22,
    birthYear: 2006,
    teamId: '8',
    profileImage: ''
  },
  {
    id: '111',
    name: 'Remus Jacobsson',
    position: 'Forward',
    jerseyNumber: 999,
    birthYear: 2009,
    teamId: '8',
    profileImage: ''
  },
  {
    id: '112',
    name: 'Senay Teklit',
    position: 'Guard',
    jerseyNumber: 18,
    birthYear: 2006,
    teamId: '8',
    profileImage: ''
  },
  {
    id: '113',
    name: 'Valter Lumpus',
    position: 'Forward',
    jerseyNumber: 6,
    birthYear: 2002,
    teamId: '8',
    profileImage: ''
  },

  // Sollentuna
  {
    id: '114',
    name: 'David Johansson',
    position: 'Center',
    jerseyNumber: 15,
    birthYear: 2000,
    teamId: '10',
    profileImage: ''
  },
  {
    id: '115',
    name: 'Felix Jolly Holstad',
    position: 'Forward',
    jerseyNumber: 999,
    birthYear: 2000,
    teamId: '10',
    profileImage: ''
  },
  {
    id: '116',
    name: 'Hugo Lovmar',
    position: 'Guard',
    jerseyNumber: 4,
    birthYear: 2003,
    teamId: '10',
    profileImage: ''
  },
  {
    id: '117',
    name: 'Laban Westman',
    position: 'Guard',
    jerseyNumber: 9,
    birthYear: 2003,
    teamId: '10',
    profileImage: ''
  },
  {
    id: '118',
    name: 'Lukas Gyllensten',
    position: 'Guard',
    jerseyNumber: 7,
    birthYear: 2007,
    teamId: '10',
    profileImage: ''
  },
  {
    id: '119',
    name: 'Malte Colliander',
    position: 'Guard',
    jerseyNumber: 11,
    birthYear: 2006,
    teamId: '10',
    profileImage: ''
  },
  {
    id: '120',
    name: 'Melker Björk',
    position: 'Forward',
    jerseyNumber: 24,
    birthYear: 2007,
    teamId: '10',
    profileImage: ''
  },
  {
    id: '121',
    name: 'Noah Kelly',
    position: 'Center',
    jerseyNumber: 10,
    birthYear: 1997,
    teamId: '10',
    profileImage: ''
  },
  {
    id: '122',
    name: 'Oscar Jernberg',
    position: 'Wing',
    jerseyNumber: 12,
    birthYear: 1994,
    teamId: '10',
    profileImage: ''
  },
  {
    id: '123',
    name: 'Sarunas Pabreza',
    position: 'Guard',
    jerseyNumber: 1,
    birthYear: 2003,
    teamId: '10',
    profileImage: ''
  },
  {
    id: '124',
    name: 'Sebastian Karsäter Sterner',
    position: 'Guard',
    jerseyNumber: 5,
    birthYear: 2006,
    teamId: '10',
    profileImage: ''
  },
  {
    id: '125',
    name: 'Simon Granado Lindqvist',
    position: 'Forward',
    jerseyNumber: 46,
    birthYear: 1997,
    teamId: '10',
    profileImage: ''
  },
  {
    id: '126',
    name: 'Tom Nilsson',
    position: 'Wing',
    jerseyNumber: 999,
    birthYear: 2004,
    teamId: '10',
    profileImage: ''
  },

  // Malbas
  {
    id: '127',
    name: 'Atle Mellquist',
    position: 'Center',
    jerseyNumber: 14,
    birthYear: 2003,
    teamId: '11',
    profileImage: ''
  },
  {
    id: '128',
    name: 'Carl Birgemo',
    position: 'Forward',
    jerseyNumber: 19,
    birthYear: 2002,
    teamId: '11',
    profileImage: ''
  },
  {
    id: '129',
    name: 'Gustav Seehausen',
    position: 'Guard',
    jerseyNumber: 77,
    birthYear: 2002,
    teamId: '11',
    profileImage: ''
  },
  {
    id: '130',
    name: 'Jesper Hagberg',
    position: 'Guard',
    jerseyNumber: 3,
    birthYear: 2002,
    teamId: '11',
    profileImage: ''
  },
  {
    id: '131',
    name: 'Kasper Hagberg',
    position: 'Guard',
    jerseyNumber: 13,
    birthYear: 1998,
    teamId: '11',
    profileImage: ''
  },
  {
    id: '132',
    name: 'Mikkel Bach',
    position: 'Guard',
    jerseyNumber: 10,
    birthYear: 2001,
    teamId: '11',
    profileImage: ''
  },
  {
    id: '133',
    name: 'Noah Scego Hansen',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2007,
    teamId: '11',
    profileImage: ''
  },
  {
    id: '134',
    name: 'Sebastian Sjöberg',
    position: 'Guard',
    jerseyNumber: 32,
    birthYear: 2000,
    teamId: '11',
    profileImage: ''
  },
  {
    id: '135',
    name: 'Sixten Smedjeback',
    position: 'Wing',
    jerseyNumber: 15,
    birthYear: 2007,
    teamId: '11',
    profileImage: ''
  },
  {
    id: '136',
    name: 'Tage Axelsson Mattsson',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2005,
    teamId: '11',
    profileImage: ''
  },
  {
    id: '137',
    name: 'Valter Lindstedt',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2008,
    teamId: '11',
    profileImage: ''
  },
  {
    id: '138',
    name: 'Vidar Pihlsgård',
    position: 'Center',
    jerseyNumber: 8,
    birthYear: 2006,
    teamId: '11',
    profileImage: ''
  },
  {
    id: '139',
    name: 'Oliver Stefanovic',
    position: 'Guard',
    jerseyNumber: 1,
    birthYear: 2005,
    teamId: '11',
    profileImage: ''
  },

  // Ockelbo
  {
    id: '140',
    name: 'Alfred Sahlberg',
    position: 'Wing',
    jerseyNumber: 11,
    birthYear: 2005,
    teamId: '12',
    profileImage: ''
  },
  {
    id: '141',
    name: 'Edvin Stark',
    position: 'Guard',
    jerseyNumber: 4,
    birthYear: 1999,
    teamId: '12',
    profileImage: ''
  },
  {
    id: '142',
    name: 'Filip Persson',
    position: 'Forward',
    jerseyNumber: 21,
    birthYear: 2003,
    teamId: '12',
    profileImage: ''
  },
  {
    id: '143',
    name: 'Gustaf Sahlberg',
    position: 'Guard',
    jerseyNumber: 15,
    birthYear: 2007,
    teamId: '12',
    profileImage: ''
  },
  {
    id: '144',
    name: 'Kevin Wallin',
    position: 'Guard',
    jerseyNumber: 3,
    birthYear: 2003,
    teamId: '12',
    profileImage: ''
  },
  {
    id: '145',
    name: 'Lojong Andarea Ladu',
    position: 'Center',
    jerseyNumber: 47,
    birthYear: 1999,
    teamId: '12',
    profileImage: ''
  },
  {
    id: '146',
    name: 'Teodor Manfredsson',
    position: 'Wing',
    jerseyNumber: 17,
    birthYear: 2003,
    teamId: '12',
    profileImage: ''
  },
  {
    id: '147',
    name: 'Tim Nord',
    position: 'Guard',
    jerseyNumber: 2,
    birthYear: 2002,
    teamId: '12',
    profileImage: ''
  },
  {
    id: '148',
    name: 'Valter Östblom',
    position: 'Guard',
    jerseyNumber: 12,
    birthYear: 2008,
    teamId: '12',
    profileImage: ''
  },
  {
    id: '149',
    name: 'Younas Mael',
    position: 'Guard',
    jerseyNumber: 10,
    birthYear: 2008,
    teamId: '10',
    profileImage: ''
  },
  {
    id: '150',
    name: 'Younes Stali',
    position: 'Guard',
    jerseyNumber: 88,
    birthYear: 2007,
    teamId: '12',
    profileImage: ''
  },

  // Wetterbygden
  {
    id: '152',
    name: 'Alex Drazic',
    position: 'Guard',
    jerseyNumber: 5,
    birthYear: 2009,
    teamId: '13',
    profileImage: ''
  },
  {
    id: '153',
    name: 'Alexander Jonsson',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2007,
    teamId: '13',
    profileImage: ''
  },
  {
    id: '154',
    name: 'Bashiir Hirsi',
    position: 'Forward',
    jerseyNumber: 22,
    birthYear: 2008,
    teamId: '13',
    profileImage: ''
  },
  {
    id: '155',
    name: 'Boldizsar Marton',
    position: 'Guard',
    jerseyNumber: 1,
    birthYear: 2005,
    teamId: '13',
    profileImage: ''
  },
  {
    id: '156',
    name: 'Erik Nilsson',
    position: 'Guard',
    jerseyNumber: 35,
    birthYear: 1998,
    teamId: '13',
    profileImage: ''
  },
  {
    id: '157',
    name: 'Flavio Marcos Gomes',
    position: 'Forward',
    jerseyNumber: 11,
    birthYear: 1988,
    teamId: '13',
    profileImage: ''
  },
  {
    id: '158',
    name: 'Gabriel Persson',
    position: 'Guard',
    jerseyNumber: 3,
    birthYear: 2005,
    teamId: '13',
    profileImage: ''
  },
  {
    id: '159',
    name: 'Hampus Ramstedt',
    position: 'Forward',
    jerseyNumber: 7,
    birthYear: 1999,
    teamId: '13',
    profileImage: ''
  },
  {
    id: '160',
    name: 'Kevin Jaworski',
    position: 'Forward',
    jerseyNumber: 999,
    birthYear: 2007,
    teamId: '13',
    profileImage: ''
  },
  {
    id: '161',
    name: 'Ludvig Friberg',
    position: 'Forward',
    jerseyNumber: 999,
    birthYear: 2000,
    teamId: '13',
    profileImage: ''
  },
  {
    id: '162',
    name: 'Nemanja Kutic',
    position: 'Center',
    jerseyNumber: 34,
    birthYear: 2002,
    teamId: '13',
    profileImage: ''
  },
  {
    id: '163',
    name: 'Nils Mattsson',
    position: 'Forward',
    jerseyNumber: 12,
    birthYear: 2007,
    teamId: '13',
    profileImage: ''
  },
  {
    id: '164',
    name: 'Noah Lindén',
    position: 'Forward',
    jerseyNumber: 9,
    birthYear: 2004,
    teamId: '13',
    profileImage: ''
  },
  {
    id: '165',
    name: 'Vilgot Lönnberg',
    position: 'Forward',
    jerseyNumber: 23,
    birthYear: 2009,
    teamId: '13',
    profileImage: ''
  },

  // Blackeberg
  {
    id: '166',
    name: 'Andree Peterson',
    position: 'Guard',
    jerseyNumber: 14,
    birthYear: 2002,
    teamId: '14',
    profileImage: ''
  },
  {
    id: '167',
    name: 'Anton Sundquist',
    position: 'Forward',
    jerseyNumber: 999,
    birthYear: 2008,
    teamId: '14',
    profileImage: ''
  },
  {
    id: '168',
    name: 'Aran Salih',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2008,
    teamId: '14',
    profileImage: ''
  },
  {
    id: '169',
    name: 'Arvid Linzander',
    position: 'Guard',
    jerseyNumber: 4,
    birthYear: 2008,
    teamId: '14',
    profileImage: ''
  },
  {
    id: '170',
    name: 'David Petersson',
    position: 'Center',
    jerseyNumber: 21,
    birthYear: 2004,
    teamId: '14',
    profileImage: ''
  },
  {
    id: '171',
    name: 'Edvin Thorén',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2008,
    teamId: '14',
    profileImage: ''
  },
  {
    id: '172',
    name: 'Elias Weibring',
    position: 'Forward',
    jerseyNumber: 16,
    birthYear: 2008,
    teamId: '14',
    profileImage: ''
  },
  {
    id: '173',
    name: 'Hosse Tesfay',
    position: 'Guard',
    jerseyNumber: 25,
    birthYear: 2004,
    teamId: '14',
    profileImage: ''
  },
  {
    id: '174',
    name: 'Hossein Abdi',
    position: 'Forward',
    jerseyNumber: 5,
    birthYear: 2006,
    teamId: '14',
    profileImage: ''
  },
  {
    id: '175',
    name: 'Isak Detthoff',
    position: 'Center',
    jerseyNumber: 24,
    birthYear: 2006,
    teamId: '14',
    profileImage: ''
  },
  {
    id: '176',
    name: 'Jedidjah Chris Ndizeye',
    position: 'Guard',
    jerseyNumber: 6,
    birthYear: 2006,
    teamId: '14',
    profileImage: ''
  },
  {
    id: '177',
    name: 'Oscar Cederblad',
    position: 'Forward',
    jerseyNumber: 10,
    birthYear: 2006,
    teamId: '14',
    profileImage: ''
  },
  {
    id: '178',
    name: 'Per Pfeiffer',
    position: 'Guard',
    jerseyNumber: 999,
    birthYear: 2006,
    teamId: '14',
    profileImage: ''
  },
  {
    id: '179',
    name: 'Sam Runnqvist',
    position: 'Forward',
    jerseyNumber: 12,
    birthYear: 2008,
    teamId: '14',
    profileImage: ''
  },
  {
    id: '180',
    name: 'Tage Henning',
    position: 'Center',
    jerseyNumber: 7,
    birthYear: 2006,
    teamId: '14',
    profileImage: ''
  },
  {
    id: '181',
    name: 'Wilmer Christensen',
    position: 'Guard',
    jerseyNumber: 1,
    birthYear: 2006,
    teamId: '14',
    profileImage: ''
  }
];
