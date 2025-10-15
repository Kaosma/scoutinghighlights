import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { teams, players } from '../data.ts';
import type { Team } from '../types.ts';

const TeamPageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 2rem;
  text-align: center;
`;

const TeamsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled.div<{ colors: string[] }>`
  background: ${({ colors }) => {
    if (colors.length === 1) return colors[0];
    if (colors.length === 2) {
      return `linear-gradient(135deg, ${colors[0]} 0%, ${colors[0]} 50%, ${colors[1]} 50%, ${colors[1]} 100%)`;
    }
    // For 3+ colors, create more visible diagonal stripes
    const stripeWidth = 100 / colors.length;
    const stripes = colors.map((color, index) => {
      const start = index * stripeWidth;
      const end = (index + 1) * stripeWidth;
      // Add slight overlap to prevent gaps and make stripes more visible
      return `${color} ${Math.max(0, start - 1)}%, ${color} ${end + 1}%`;
    }).join(', ');
    return `linear-gradient(135deg, ${stripes})`;
  }};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #3b82f6;
  }
`;

const TeamCardContent = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  position: relative;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const TeamLogo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid #e5e7eb;
`;

const TeamInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
`;

const TeamName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
`;

const PlayerCountTag = styled.div`
  background: #374151;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  align-self: flex-start;
`;

const ArrowIcon = styled.div`
  font-size: 1.5rem;
  color: #6b7280;
  font-weight: bold;
  flex-shrink: 0;
`;

const TeamPage = () => {
  const navigate = useNavigate();

  const handleTeamClick = (teamId: string) => {
    navigate(`/team/${teamId}`);
  };

  const getPlayerCount = (teamId: string) => {
    return players.filter(player => player.teamId === teamId).length;
  };

  return (
    <TeamPageContainer>
      <PageTitle>Superettan</PageTitle>
      <TeamsGrid>
        {teams.map((team: Team) => (
          <TeamCard
            key={team.id}
            colors={team.colors}
            onClick={() => handleTeamClick(team.id)}
          >
            <TeamCardContent>
              <TeamLogo src={team.logo} alt={`${team.name} logo`} />
              <TeamInfo>
                <TeamName>{team.name}</TeamName>
                <PlayerCountTag>
                  {getPlayerCount(team.id)} player{getPlayerCount(team.id) !== 1 ? 's' : ''}
                </PlayerCountTag>
              </TeamInfo>
              <ArrowIcon>→</ArrowIcon>
            </TeamCardContent>
          </TeamCard>
        ))}
      </TeamsGrid>
    </TeamPageContainer>
  );
};

export default TeamPage;
