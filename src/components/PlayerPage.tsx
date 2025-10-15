import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { players, teams } from '../data.ts';
import type { Player } from '../types.ts';

const PlayerPageContainer = styled.div<{ colors: string[] }>`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
  }

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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(2px);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const BackButton = styled.button`
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  color: #374151;
  transition: all 0.2s ease;

  &:hover {
    background: #e5e7eb;
    border-color: #9ca3af;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
`;

const PlayersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PlayerCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #3b82f6;
  }
`;

const PlayerCardContent = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PlayerImage = styled.div`
  flex-shrink: 0;
`;

const PlayerProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e5e7eb;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const PlayerInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const PlayerName = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
  line-height: 1.2;
`;

const PlayerPosition = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

const PlayerDetails = styled.p`
  display: flex;
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  justify-content: space-between;
  width: 100%;
`;

const PlayIcon = styled.span`
  color: #3e3e3e;
  font-size: 2rem;
  margin-left: 5rem;
`;

const JerseyNumber = styled.div`
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  position: absolute;
  top: 1rem;
  right: 1rem;

  @media (max-width: 768px) {
    top: 0.75rem;
    right: 0.75rem;
  }
`;

const ProfilePlaceholder = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f3f4f6;
  border: 2px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 2rem;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

const ErrorTitle = styled.h2`
  color: #ef4444;
  margin-bottom: 1rem;
`;

const PlayerImageComponent = ({ player }: { player: Player }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const hasValidImage = player.profileImage && player.profileImage.trim() !== '';

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  if (!hasValidImage || imageError) {
    return <ProfilePlaceholder>👤</ProfilePlaceholder>;
  }

  return (
    <PlayerProfileImage
      src={player.profileImage}
      alt={player.name}
      onError={handleImageError}
      onLoad={handleImageLoad}
      style={{ display: imageLoading ? 'none' : 'block' }}
    />
  );
};

const PlayerPage = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const navigate = useNavigate();

  const team = teams.find(t => t.id === teamId);
  const teamPlayers = players.filter((p: Player) => p.teamId === teamId);

  const handlePlayerClick = (playerId: string) => {
    navigate(`/player/${playerId}`);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  const displayJerseyNumber = (jerseyNumber: number) => {
    if (jerseyNumber === 999) {
      return '-';
    }
    return '#' + jerseyNumber;
  };

  if (!team) {
    return (
      <PlayerPageContainer colors={[]}>
        <ErrorMessage>
          <ErrorTitle>Team not found</ErrorTitle>
          <BackButton onClick={handleBackClick}>
            ← Back to Teams
          </BackButton>
        </ErrorMessage>
      </PlayerPageContainer>
    );
  }

  return (
    <PlayerPageContainer colors={team.colors}>
      <PageHeader>
        <BackButton onClick={handleBackClick}>
          ← Back to Teams
        </BackButton>
        <PageTitle>{team.name} Players</PageTitle>
      </PageHeader>

      <PlayersGrid>
        {teamPlayers.map((player: Player) => (
          <PlayerCard
            key={player.id}
            onClick={() => handlePlayerClick(player.id)}
          >
            <PlayerCardContent>
              <PlayerImage>
                <PlayerImageComponent player={player} />
              </PlayerImage>
              <PlayerInfo>
                <PlayerName>{player.name}</PlayerName>
                <PlayerPosition>{player.position}</PlayerPosition>
                <PlayerDetails>
                  {player.birthYear} <PlayIcon>▶</PlayIcon>
                </PlayerDetails>
              </PlayerInfo>
              <JerseyNumber>
                {displayJerseyNumber(player.jerseyNumber)}
              </JerseyNumber>
            </PlayerCardContent>
          </PlayerCard>
        ))}
      </PlayersGrid>
    </PlayerPageContainer>
  );
};

export default PlayerPage;
