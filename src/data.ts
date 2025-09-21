import type { Team, Player, Video } from "./types";

export const teams: Team[] = [
  {
    id: '1',
    name: 'Djurgården',
    playerCount: 12,
    colors: ['#1E40AF', '#FCD34D'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '2',
    name: 'Huddinge',
    playerCount: 18,
    colors: ['#000000', '#FFFFFF'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '3',
    name: 'Alvik',
    playerCount: 15,
    colors: ['#10B981', '#FCD34D'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '4',
    name: 'Eskilstuna',
    playerCount: 16,
    colors: ['#fff', '#1E40AF'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '5',
    name: 'Trelleborg Pirates',
    playerCount: 11,
    colors: ['#DC2626', '#FFFFFF'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '6',
    name: 'IK Eos',
    playerCount: 13,
    colors: ['green', '#FFFFFF'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '7',
    name: 'Fryshuset',
    playerCount: 13,
    colors: ['#000000', '#0EA5E9'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '8',
    name: 'AIK',
    playerCount: 15,
    colors: ['#000000', '#FCD34D'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '9',
    name: 'Aros',
    playerCount: 18,
    colors: ['#fff', '#000'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '10',
    name: 'Sollentuna',
    playerCount: 13,
    colors: ['#0EA5E9', '#FFFFFF'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '11',
    name: 'Malbas',
    playerCount: 13,
    colors: ['#F97316', '#FFFFFF'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '12',
    name: 'Ockelbo',
    playerCount: 11,
    colors: ['#F97316', '#000000'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '13',
    name: 'Wetterbygden',
    playerCount: 15,
    colors: ['#1E40AF', '#F97316'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  },
  {
    id: '14',
    name: 'Blackeberg',
    playerCount: 16,
    colors: ['#DC2626', '#FFFFFF'],
    logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
  }
];

export const videos: Video[] = [
  {
    id: '1',
    title: 'Best Plays vs Aros Basket',
    duration: '3:45',
    date: '2024-03-15',
    playerId: '1',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225&fit=crop'
  },
  {
    id: '2',
    title: 'Clutch Three-Pointers',
    duration: '2:30',
    date: '2024-03-10',
    playerId: '1',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225&fit=crop'
  },
  {
    id: '3',
    title: 'Fast Break Highlights',
    duration: '2:15',
    date: '2024-03-20',
    playerId: '1',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225&fit=crop'
  },
  {
    id: '4',
    title: 'Defensive Highlights',
    duration: '4:12',
    date: '2024-03-08',
    playerId: '2',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225&fit=crop'
  },
  {
    id: '5',
    title: 'Shooting Clinic',
    duration: '3:30',
    date: '2024-03-18',
    playerId: '2',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225&fit=crop'
  },
  {
    id: '6',
    title: 'Dunk Compilation',
    duration: '3:20',
    date: '2024-03-12',
    playerId: '3',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225&fit=crop'
  },
  {
    id: '7',
    title: 'Block Party',
    duration: '2:55',
    date: '2024-03-14',
    playerId: '3',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225&fit=crop'
  },
  {
    id: '8',
    title: 'Game-Winning Shot',
    duration: '1:45',
    date: '2024-03-16',
    playerId: '3',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225&fit=crop'
  },
  {
    id: '9',
    title: 'Rebound Masterclass',
    duration: '4:00',
    date: '2024-03-22',
    playerId: '3',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225&fit=crop'
  },
  {
    id: '10',
    title: 'Post Moves vs AIK',
    duration: '3:15',
    date: '2024-03-17',
    playerId: '8',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225&fit=crop'
  },
  {
    id: '11',
    title: 'Alley-Oop Finishes',
    duration: '2:40',
    date: '2024-03-19',
    playerId: '8',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225&fit=crop'
  },
  {
    id: '12',
    title: 'Defensive Stops',
    duration: '3:50',
    date: '2024-03-21',
    playerId: '8',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225&fit=crop'
  },
  {
    id: '13',
    title: 'Free Throw Mastery',
    duration: '1:30',
    date: '2024-03-23',
    playerId: '8',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225&fit=crop'
  },
  {
    id: '14',
    title: 'Championship Performance',
    duration: '5:20',
    date: '2024-03-25',
    playerId: '8',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225&fit=crop'
  }
];

export const players: Player[] = [
  {
    id: '1',
    name: 'Andreas Von Uthmann',
    position: 'Guard',
    jerseyNumber: 14,
    birthYear: 1996,
    height: 190,
    teamId: '1',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '2',
    name: 'Axel Grytberg',
    position: 'Forward',
    jerseyNumber: 0,
    birthYear: 2007,
    height: 195,
    teamId: '1',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '3',
    name: 'Dante Jones',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2006,
    height: 185,
    teamId: '1',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '4',
    name: 'Hampus Åhlin',
    position: 'Forward',
    jerseyNumber: 12,
    birthYear: 1995,
    height: 200,
    teamId: '1',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '5',
    name: 'Hannes Brasch',
    position: 'Guard',
    jerseyNumber: 9,
    birthYear: 2004,
    height: 188,
    teamId: '1',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '6',
    name: 'Johan Rafstedt',
    position: 'Guard',
    jerseyNumber: 4,
    birthYear: 1999,
    height: 185,
    teamId: '1',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '7',
    name: 'Lucas Lindh',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 1998,
    height: 182,
    teamId: '1',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '8',
    name: 'Niklas Herring',
    position: 'Forward',
    jerseyNumber: 8,
    birthYear: 1999,
    height: 195,
    teamId: '1',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '9',
    name: 'Noel Smeds',
    position: 'Forward',
    jerseyNumber: 0,
    birthYear: 2003,
    height: 198,
    teamId: '1',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '10',
    name: 'Pars Esef Erenköy',
    position: 'Guard',
    jerseyNumber: 8,
    birthYear: 1998,
    height: 190,
    teamId: '1',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '11',
    name: 'Samuel Pernyér',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2004,
    height: 185,
    teamId: '1',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '12',
    name: 'Theo Kermoury',
    position: 'Forward',
    jerseyNumber: 8,
    birthYear: 2006,
    height: 195,
    teamId: '1',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },

  {
    id: '13',
    name: 'Aleksandar Cigoja',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2006,
    height: 185,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '14',
    name: 'Ali Kheniab',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2005,
    height: 180,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '15',
    name: 'Amund Brataas Morin',
    position: 'Guard',
    jerseyNumber: 6,
    birthYear: 2000,
    height: 190,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '16',
    name: 'Can Yöneyman',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2005,
    height: 185,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '17',
    name: 'Dawid Lasek',
    position: 'Guard',
    jerseyNumber: 2,
    birthYear: 2004,
    height: 188,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '18',
    name: 'Eskil Brataas Morin',
    position: 'Guard',
    jerseyNumber: 8,
    birthYear: 2004,
    height: 192,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '19',
    name: 'Glenn Ali',
    position: 'Guard',
    jerseyNumber: 22,
    birthYear: 1998,
    height: 195,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '20',
    name: 'Gustav Årstrand',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2006,
    height: 180,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '21',
    name: 'Hampus Åkerberg Åkerman',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2001,
    height: 185,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '22',
    name: 'Kevin Obenjo',
    position: 'Guard',
    jerseyNumber: 15,
    birthYear: 2007,
    height: 182,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '23',
    name: 'Linus Berglund',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2007,
    height: 178,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '24',
    name: 'Mak Bajic',
    position: 'Guard',
    jerseyNumber: 17,
    birthYear: 1997,
    height: 190,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '25',
    name: 'Nassim Mrabty',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 1999,
    height: 188,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '26',
    name: 'Oliwer Larsson',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2003,
    height: 185,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '27',
    name: 'Ramin Mardani',
    position: 'Guard',
    jerseyNumber: 9,
    birthYear: 2006,
    height: 180,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '28',
    name: 'Sami Johansson Van Maars',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2007,
    height: 175,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '29',
    name: 'Simon Ali',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2004,
    height: 185,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '30',
    name: 'Victor Johnson-Saka',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2004,
    height: 190,
    teamId: '2',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },

  // Alviks BBK (teamId: '3') - 15 players
  {
    id: '31',
    name: 'Adam Lindahl',
    position: 'Guard',
    jerseyNumber: 15,
    birthYear: 2004,
    height: 185,
    teamId: '3',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '32',
    name: 'Alexander Folin',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2004,
    height: 190,
    teamId: '3',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '33',
    name: 'Boris Ottosson Vidlund',
    position: 'Guard',
    jerseyNumber: 12,
    birthYear: 2004,
    height: 188,
    teamId: '3',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '34',
    name: 'David Wissmar',
    position: 'Guard',
    jerseyNumber: 22,
    birthYear: 2004,
    height: 195,
    teamId: '3',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '35',
    name: 'Dexter Liljeholm',
    position: 'Guard',
    jerseyNumber: 11,
    birthYear: 2004,
    height: 182,
    teamId: '3',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '36',
    name: 'Eskil Levin',
    position: 'Guard',
    jerseyNumber: 6,
    birthYear: 2004,
    height: 180,
    teamId: '3',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '37',
    name: 'Joel Barenthein',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2004,
    height: 185,
    teamId: '3',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '38',
    name: 'Leo Ryott',
    position: 'Guard',
    jerseyNumber: 13,
    birthYear: 2004,
    height: 190,
    teamId: '3',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '39',
    name: 'Ludvig Prytz',
    position: 'Guard',
    jerseyNumber: 5,
    birthYear: 2004,
    height: 188,
    teamId: '3',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '40',
    name: 'Mikael Axelsson',
    position: 'Guard',
    jerseyNumber: 12,
    birthYear: 2004,
    height: 185,
    teamId: '3',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '41',
    name: 'Noah Ranégie',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2004,
    height: 192,
    teamId: '3',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '42',
    name: 'Pontus Nilsson',
    position: 'Guard',
    jerseyNumber: 12,
    birthYear: 2004,
    height: 190,
    teamId: '3',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '43',
    name: 'Samir Ahmed',
    position: 'Guard',
    jerseyNumber: 10,
    birthYear: 2004,
    height: 185,
    teamId: '3',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '44',
    name: 'Walter Sand Musanovic',
    position: 'Guard',
    jerseyNumber: 7,
    birthYear: 2004,
    height: 188,
    teamId: '3',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '45',
    name: 'Wiggo Wiberg Lloclla',
    position: 'Guard',
    jerseyNumber: 7,
    birthYear: 2004,
    height: 190,
    teamId: '3',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },

  // Eskilstuna Basketbollklubb (teamId: '4') - 16 players
  {
    id: '46',
    name: 'Adam Karahmetovic',
    position: 'Guard',
    jerseyNumber: 24,
    birthYear: 1998,
    height: 185,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '47',
    name: 'Aken Muorwel',
    position: 'Guard',
    jerseyNumber: 8,
    birthYear: 1999,
    height: 190,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '48',
    name: 'Albin Sandeberg',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 1999,
    height: 188,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '49',
    name: 'Alvar Brådd',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2007,
    height: 180,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '50',
    name: 'Benjamin Cehic',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2007,
    height: 185,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '51',
    name: 'Davids Eduards Alvateris',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2004,
    height: 190,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '52',
    name: 'Einar Brådd',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2000,
    height: 195,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '53',
    name: 'Elisha Ninkingira',
    position: 'Guard',
    jerseyNumber: 7,
    birthYear: 2004,
    height: 188,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '54',
    name: 'Hampus Andersson',
    position: 'Guard',
    jerseyNumber: 4,
    birthYear: 2001,
    height: 192,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '55',
    name: 'John Cooper',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2006,
    height: 185,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '56',
    name: 'Kevin Lieu',
    position: 'Guard',
    jerseyNumber: 14,
    birthYear: 2000,
    height: 190,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '57',
    name: 'Muorwell Muorwel',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2002,
    height: 195,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '58',
    name: 'Philip Georgson',
    position: 'Guard',
    jerseyNumber: 90,
    birthYear: 2003,
    height: 188,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '59',
    name: 'Sigge Wingemark',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2007,
    height: 180,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '60',
    name: 'Simon Findén',
    position: 'Guard',
    jerseyNumber: 99,
    birthYear: 2000,
    height: 190,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '61',
    name: 'William Hamzehnejad',
    position: 'Guard',
    jerseyNumber: 5,
    birthYear: 2001,
    height: 185,
    teamId: '4',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },

  // Trelleborg Pirates (teamId: '5') - 11 players
  {
    id: '62',
    name: 'Adam Boijertz',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2008,
    height: 180,
    teamId: '5',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '63',
    name: 'Anton Nysten',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2008,
    height: 185,
    teamId: '5',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '64',
    name: 'Elias Lilja Hadir',
    position: 'Forward',
    jerseyNumber: 0,
    birthYear: 2006,
    height: 190,
    teamId: '5',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '65',
    name: 'Hugo Okehie',
    position: 'Forward',
    jerseyNumber: 0,
    birthYear: 2005,
    height: 195,
    teamId: '5',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '66',
    name: 'Karl Drammeh',
    position: 'Center',
    jerseyNumber: 0,
    birthYear: 1999,
    height: 200,
    teamId: '5',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '67',
    name: 'Melvin Pasic',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2007,
    height: 180,
    teamId: '5',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '68',
    name: 'Mikai Klintman',
    position: 'Forward',
    jerseyNumber: 0,
    birthYear: 2004,
    height: 195,
    teamId: '5',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '69',
    name: 'Nikolai Zinkernagel',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2007,
    height: 185,
    teamId: '5',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '70',
    name: 'Noah Boyewa',
    position: 'Forward',
    jerseyNumber: 0,
    birthYear: 2007,
    height: 190,
    teamId: '5',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '71',
    name: 'Teodor Nyström',
    position: 'Center',
    jerseyNumber: 0,
    birthYear: 1999,
    height: 205,
    teamId: '5',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '72',
    name: 'William Svenonius',
    position: 'Forward',
    jerseyNumber: 0,
    birthYear: 2001,
    height: 195,
    teamId: '5',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },

  // Idrottsklubben Eos (teamId: '6') - 13 players
  {
    id: '73',
    name: 'Ahmad Okdeh',
    position: 'Guard',
    jerseyNumber: 14,
    birthYear: 2003,
    height: 185,
    teamId: '6',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '74',
    name: 'Felix Wollberg',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2004,
    height: 180,
    teamId: '6',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '75',
    name: 'Filip Forsgren',
    position: 'Guard',
    jerseyNumber: 2,
    birthYear: 2003,
    height: 185,
    teamId: '6',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '76',
    name: 'Gabriel Stenberg',
    position: 'Guard',
    jerseyNumber: 14,
    birthYear: 2006,
    height: 180,
    teamId: '6',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '77',
    name: 'Hannes Mejare Berntsson',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2002,
    height: 190,
    teamId: '6',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '78',
    name: 'Hoggar Ali',
    position: 'Guard',
    jerseyNumber: 9,
    birthYear: 2003,
    height: 185,
    teamId: '6',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '79',
    name: 'Jakob Skelander Ekberg',
    position: 'Guard',
    jerseyNumber: 13,
    birthYear: 2005,
    height: 180,
    teamId: '6',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '80',
    name: 'Kembo Nilsson',
    position: 'Guard',
    jerseyNumber: 3,
    birthYear: 2005,
    height: 185,
    teamId: '6',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '81',
    name: 'Marc Benson',
    position: 'Guard',
    jerseyNumber: 19,
    birthYear: 2001,
    height: 190,
    teamId: '6',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '82',
    name: 'Nils Kihlström',
    position: 'Guard',
    jerseyNumber: 1,
    birthYear: 2004,
    height: 185,
    teamId: '6',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '83',
    name: 'Noah Nilén',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2005,
    height: 180,
    teamId: '6',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '84',
    name: 'Philippe Auvray',
    position: 'Guard',
    jerseyNumber: 21,
    birthYear: 2003,
    height: 185,
    teamId: '6',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '85',
    name: 'Ruben Sternheden',
    position: 'Guard',
    jerseyNumber: 7,
    birthYear: 2007,
    height: 175,
    teamId: '6',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },

  // Fryshuset Basket (teamId: '7') - 13 players
  {
    id: '86',
    name: 'Elias Englund Ghebreab',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2009,
    height: 180,
    teamId: '7',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '87',
    name: 'Frank Nasasa Karlsson',
    position: 'Guard',
    jerseyNumber: 27,
    birthYear: 2009,
    height: 185,
    teamId: '7',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '88',
    name: 'Jerome Holm Keita',
    position: 'Forward',
    jerseyNumber: 0,
    birthYear: 2008,
    height: 190,
    teamId: '7',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '89',
    name: 'Joakim Calixte Rosengren',
    position: 'Guard',
    jerseyNumber: 5,
    birthYear: 2006,
    height: 188,
    teamId: '7',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '90',
    name: 'Kebba Jawla',
    position: 'Forward',
    jerseyNumber: 0,
    birthYear: 2008,
    height: 192,
    teamId: '7',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '91',
    name: 'Leo Chatziathanasiou Letl',
    position: 'Guard',
    jerseyNumber: 5,
    birthYear: 2002,
    height: 183,
    teamId: '7',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '92',
    name: 'Leonard Halling Ibo',
    position: 'Center',
    jerseyNumber: 10,
    birthYear: 1993,
    height: 205,
    teamId: '7',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '93',
    name: 'Linus Victorin Verkruyssen',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2008,
    height: 187,
    teamId: '7',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '94',
    name: 'Micheal Odinks',
    position: 'Forward',
    jerseyNumber: 0,
    birthYear: 2009,
    height: 193,
    teamId: '7',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '95',
    name: 'Pedro Lelo Hök',
    position: 'Guard',
    jerseyNumber: 34,
    birthYear: 2004,
    height: 180,
    teamId: '7',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '96',
    name: 'Rodrigas Jucevicius',
    position: 'Forward',
    jerseyNumber: 0,
    birthYear: 2008,
    height: 198,
    teamId: '7',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '97',
    name: 'Samoro Njie Unger',
    position: 'Center',
    jerseyNumber: 0,
    birthYear: 1995,
    height: 200,
    teamId: '7',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '98',
    name: 'Winston Ilori',
    position: 'Guard',
    jerseyNumber: 9,
    birthYear: 2008,
    height: 185,
    teamId: '7',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },

  // AIK Basket (teamId: '8') - 15 players
  {
    id: '99',
    name: 'Aleksandar Petrovic',
    position: 'Center',
    jerseyNumber: 0,
    birthYear: 1993,
    height: 210,
    teamId: '8',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '100',
    name: 'Biyan Toprak',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2006,
    height: 185,
    teamId: '8',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '101',
    name: 'Colin Mc Inerney',
    position: 'Forward',
    jerseyNumber: 10,
    birthYear: 2004,
    height: 195,
    teamId: '8',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '102',
    name: 'Dante Myrthil',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2004,
    height: 180,
    teamId: '8',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '103',
    name: 'David Häggqvist Jallow',
    position: 'Forward',
    jerseyNumber: 0,
    birthYear: 1993,
    height: 190,
    teamId: '8',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '104',
    name: 'Elias Nilsson',
    position: 'Center',
    jerseyNumber: 4,
    birthYear: 2003,
    height: 200,
    teamId: '8',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '105',
    name: 'Elliot Lidberg',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2004,
    height: 178,
    teamId: '8',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '106',
    name: 'Isak Simsek',
    position: 'Forward',
    jerseyNumber: 9,
    birthYear: 2006,
    height: 188,
    teamId: '8',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '107',
    name: 'Ludvig Lindby',
    position: 'Guard',
    jerseyNumber: 7,
    birthYear: 2006,
    height: 182,
    teamId: '8',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '108',
    name: 'Oliver Ehrnvall',
    position: 'Forward',
    jerseyNumber: 11,
    birthYear: 1996,
    height: 193,
    teamId: '8',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '109',
    name: 'Olle Welander',
    position: 'Center',
    jerseyNumber: 11,
    birthYear: 2000,
    height: 202,
    teamId: '8',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '110',
    name: 'Pascal Dahlgren',
    position: 'Guard',
    jerseyNumber: 22,
    birthYear: 2006,
    height: 183,
    teamId: '8',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '111',
    name: 'Remus Jacobsson',
    position: 'Forward',
    jerseyNumber: 0,
    birthYear: 2009,
    height: 191,
    teamId: '8',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '112',
    name: 'Senay Teklit',
    position: 'Guard',
    jerseyNumber: 18,
    birthYear: 2006,
    height: 186,
    teamId: '8',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '113',
    name: 'Valter Lumpus',
    position: 'Forward',
    jerseyNumber: 6,
    birthYear: 2002,
    height: 194,
    teamId: '8',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },

  // Sollentuna Basket (teamId: '10') - 13 players
  {
    id: '114',
    name: 'David Johansson',
    position: 'Guard',
    jerseyNumber: 15,
    birthYear: 2000,
    height: 185,
    teamId: '10',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '115',
    name: 'Felix Jolly Holstad',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2000,
    height: 180,
    teamId: '10',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '116',
    name: 'Hugo Lovmar',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2003,
    height: 185,
    teamId: '10',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '117',
    name: 'Laban Westman',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2003,
    height: 190,
    teamId: '10',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '118',
    name: 'Lukas Gyllensten',
    position: 'Guard',
    jerseyNumber: 6,
    birthYear: 2007,
    height: 180,
    teamId: '10',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '119',
    name: 'Malte Colliander',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2006,
    height: 185,
    teamId: '10',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '120',
    name: 'Melker Björk',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2007,
    height: 180,
    teamId: '10',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '121',
    name: 'Noah Kelly',
    position: 'Guard',
    jerseyNumber: 12,
    birthYear: 1997,
    height: 190,
    teamId: '10',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '122',
    name: 'Oscar Jernberg',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 1994,
    height: 195,
    teamId: '10',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '123',
    name: 'Sarunas Pabreza',
    position: 'Guard',
    jerseyNumber: 5,
    birthYear: 2003,
    height: 190,
    teamId: '10',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '124',
    name: 'Sebastian Karsäter Sterner',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2006,
    height: 185,
    teamId: '10',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '125',
    name: 'Simon Granado Lindqvist',
    position: 'Guard',
    jerseyNumber: 13,
    birthYear: 1997,
    height: 195,
    teamId: '10',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '126',
    name: 'Tom Nilsson',
    position: 'Guard',
    jerseyNumber: 20,
    birthYear: 2004,
    height: 190,
    teamId: '10',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },

  // Malbas BBK (teamId: '11') - 12 players
  {
    id: '127',
    name: 'Atle Mellquist',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2003,
    height: 185,
    teamId: '11',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '128',
    name: 'Carl Birgemo',
    position: 'Guard',
    jerseyNumber: 19,
    birthYear: 2002,
    height: 190,
    teamId: '11',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '129',
    name: 'Gustav Seehausen',
    position: 'Guard',
    jerseyNumber: 7,
    birthYear: 2002,
    height: 185,
    teamId: '11',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '130',
    name: 'Jesper Hagberg',
    position: 'Guard',
    jerseyNumber: 3,
    birthYear: 2002,
    height: 180,
    teamId: '11',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '131',
    name: 'Kasper Hagberg',
    position: 'Guard',
    jerseyNumber: 13,
    birthYear: 1998,
    height: 190,
    teamId: '11',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '132',
    name: 'Mikkel Bach',
    position: 'Guard',
    jerseyNumber: 10,
    birthYear: 2001,
    height: 185,
    teamId: '11',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '133',
    name: 'Noah Scego Hansen',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2007,
    height: 180,
    teamId: '11',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '134',
    name: 'Sebastian Sjöberg',
    position: 'Guard',
    jerseyNumber: 32,
    birthYear: 2000,
    height: 190,
    teamId: '11',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '135',
    name: 'Sixten Smedjeback',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2007,
    height: 185,
    teamId: '11',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '136',
    name: 'Tage Axelsson Mattsson',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2005,
    height: 190,
    teamId: '11',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '137',
    name: 'Valter Lindstedt',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2008,
    height: 180,
    teamId: '11',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '138',
    name: 'Vidar Pihlsgård',
    position: 'Guard',
    jerseyNumber: 8,
    birthYear: 2006,
    height: 185,
    teamId: '11',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },

  // Ockelbo Basketklubb (teamId: '12') - 11 players
  {
    id: '139',
    name: 'Alfred Sahlberg',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2005,
    height: 180,
    teamId: '12',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '140',
    name: 'Edvin Stark',
    position: 'Guard',
    jerseyNumber: 4,
    birthYear: 1999,
    height: 185,
    teamId: '12',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '141',
    name: 'Filip Persson',
    position: 'Guard',
    jerseyNumber: 21,
    birthYear: 2003,
    height: 190,
    teamId: '12',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '142',
    name: 'Gustaf Sahlberg',
    position: 'Guard',
    jerseyNumber: 15,
    birthYear: 2007,
    height: 180,
    teamId: '12',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '143',
    name: 'Kevin Wallin',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2003,
    height: 185,
    teamId: '12',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '144',
    name: 'Lojong Andarea Ladu',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 1999,
    height: 190,
    teamId: '12',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '145',
    name: 'Teodor Manfredsson',
    position: 'Guard',
    jerseyNumber: 7,
    birthYear: 2003,
    height: 185,
    teamId: '12',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '146',
    name: 'Tim Nord',
    position: 'Guard',
    jerseyNumber: 2,
    birthYear: 2002,
    height: 190,
    teamId: '12',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '147',
    name: 'Valter Östblom',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2008,
    height: 175,
    teamId: '12',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '148',
    name: 'Younas Mael',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2008,
    height: 180,
    teamId: '12',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '149',
    name: 'Younes Stali',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 2007,
    height: 185,
    teamId: '12',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },

  // Wetterbygden Stars (teamId: '13') - 15 players
  {
    id: '150',
    name: 'Albin Häll Eriksson',
    position: 'Guard',
    jerseyNumber: 0,
    birthYear: 1996,
    height: 185,
    teamId: '13',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '151',
    name: 'Alex Drazic',
    position: 'Guard',
    jerseyNumber: 5,
    birthYear: 2009,
    height: 180,
    teamId: '13',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '152',
    name: 'Alexander Jonsson',
    position: 'Guard',
    jerseyNumber: 2,
    birthYear: 2007,
    height: 185,
    teamId: '13',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '153',
    name: 'Bashiir Hirsi',
    position: 'Forward',
    jerseyNumber: 22,
    birthYear: 2008,
    height: 190,
    teamId: '13',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '154',
    name: 'Boldizsar Marton',
    position: 'Guard',
    jerseyNumber: 1,
    birthYear: 2005,
    height: 185,
    teamId: '13',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '155',
    name: 'Erik Nilsson',
    position: 'Guard',
    jerseyNumber: 35,
    birthYear: 1998,
    height: 190,
    teamId: '13',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '156',
    name: 'Flavio Marcos Gomes',
    position: 'Forward',
    jerseyNumber: 11,
    birthYear: 1988,
    height: 195,
    teamId: '13',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '157',
    name: 'Gabriel Persson',
    position: 'Guard',
    jerseyNumber: 3,
    birthYear: 2005,
    height: 185,
    teamId: '13',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '158',
    name: 'Hampus Ramstedt',
    position: 'Forward',
    jerseyNumber: 7,
    birthYear: 1999,
    height: 195,
    teamId: '13',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '159',
    name: 'Kevin Jaworski',
    position: 'Forward',
    jerseyNumber: 21,
    birthYear: 2007,
    height: 190,
    teamId: '13',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '160',
    name: 'Ludvig Friberg',
    position: 'Forward',
    jerseyNumber: 34,
    birthYear: 2000,
    height: 195,
    teamId: '13',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '161',
    name: 'Nemanja Kutic',
    position: 'Center',
    jerseyNumber: 34,
    birthYear: 2002,
    height: 200,
    teamId: '13',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '162',
    name: 'Nils Mattsson',
    position: 'Forward',
    jerseyNumber: 12,
    birthYear: 2007,
    height: 190,
    teamId: '13',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '163',
    name: 'Noah Lindén',
    position: 'Forward',
    jerseyNumber: 9,
    birthYear: 2004,
    height: 195,
    teamId: '13',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '164',
    name: 'Vilgot Lönnberg',
    position: 'Forward',
    jerseyNumber: 23,
    birthYear: 2009,
    height: 185,
    teamId: '13',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },

  // KFUM Blackebergs Idrottsklubb (teamId: '14') - 16 players
  {
    id: '165',
    name: 'Andree Peterson',
    position: 'Guard',
    jerseyNumber: 14,
    birthYear: 2002,
    height: 185,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '166',
    name: 'Anton Sundquist',
    position: 'Forward',
    jerseyNumber: 18,
    birthYear: 2008,
    height: 190,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '167',
    name: 'Aran Salih',
    position: 'Guard',
    jerseyNumber: 9,
    birthYear: 2008,
    height: 185,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '168',
    name: 'Arvid Linzander',
    position: 'Forward',
    jerseyNumber: 4,
    birthYear: 2008,
    height: 195,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '169',
    name: 'David Petersson',
    position: 'Center',
    jerseyNumber: 21,
    birthYear: 2004,
    height: 200,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '170',
    name: 'Edvin Thorén',
    position: 'Guard',
    jerseyNumber: 22,
    birthYear: 2008,
    height: 182,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '171',
    name: 'Elias Weibring',
    position: 'Forward',
    jerseyNumber: 16,
    birthYear: 2008,
    height: 188,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '172',
    name: 'Hosse Tesfay',
    position: 'Guard',
    jerseyNumber: 25,
    birthYear: 2004,
    height: 186,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '173',
    name: 'Hossein Abdi',
    position: 'Forward',
    jerseyNumber: 5,
    birthYear: 2006,
    height: 192,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '174',
    name: 'Isak Detthoff',
    position: 'Center',
    jerseyNumber: 24,
    birthYear: 2006,
    height: 203,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '175',
    name: 'Jedidjah Chris Ndizeye',
    position: 'Guard',
    jerseyNumber: 6,
    birthYear: 2006,
    height: 184,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '176',
    name: 'Oscar Cederblad',
    position: 'Forward',
    jerseyNumber: 10,
    birthYear: 2006,
    height: 191,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '177',
    name: 'Per Pfeiffer',
    position: 'Guard',
    jerseyNumber: 13,
    birthYear: 2006,
    height: 187,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '178',
    name: 'Sam Runnqvist',
    position: 'Forward',
    jerseyNumber: 12,
    birthYear: 2008,
    height: 194,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '179',
    name: 'Tage Henning',
    position: 'Center',
    jerseyNumber: 7,
    birthYear: 2006,
    height: 201,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '180',
    name: 'Wilmer Christensen',
    position: 'Guard',
    jerseyNumber: 1,
    birthYear: 2006,
    height: 189,
    teamId: '14',
    videoCount: 0,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  }
];
