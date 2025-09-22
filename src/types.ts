export interface Team {
  id: string;
  name: string;
  playerCount: number;
  colors: string[];
  logo: string;
}

export interface Player {
  id: string;
  name: string;
  position: string;
  jerseyNumber: number;
  birthYear: number;
  teamId: string;
  videoCount: number;
  profileImage: string;
}

export interface Video {
  id: string;
  playerId: string;
  videoUrl?: string;
}
