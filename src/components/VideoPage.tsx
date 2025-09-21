import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { videos, players, teams } from '../data.ts';
import type { Player } from '../types.ts';

const VideoPageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
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

const H2Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
`;

const PlayerInfoSection = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid #e5e7eb;
`;

const PlayerDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const PlayerAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e5e7eb;
`;

const PlayerMeta = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1f2937;
    margin: 0 0 0.5rem 0;
  }
`;

const PlayerMetaText = styled.p`
  color: #6b7280;
  margin: 0.25rem 0;
  font-size: 0.875rem;
`;

const VideoThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #3b82f6;
  }
`;

const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(249, 115, 22, 0.9);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(249, 115, 22, 1);
    transform: translate(-50%, -50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const PlayIcon = styled.div`
  color: white;
  font-size: 1.5rem;
  margin-left: 3px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const VideoDuration = styled.div`
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const VideoInfo = styled.div`
  padding: 1rem;
`;

const VideoTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  color: #1f2937;
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
`;

const VideoMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const VideoDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

const VideoDurationText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

const CalendarIcon = styled.span`
  font-size: 0.75rem;
`;

const ClockIcon = styled.span`
  font-size: 0.75rem;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;

  h2 {
    color: #ef4444;
    margin-bottom: 1rem;
  }
`;

const VideoPage = () => {
  const { playerId } = useParams<{ playerId: string }>();
  const navigate = useNavigate();

  const player = players.find((p: Player) => p.id === playerId);
  const team = player ? teams.find(t => t.id === player.teamId) : null;
  const playerVideos = videos.filter(v => v.playerId === playerId);

  const handleBackClick = () => {
    if (player) {
      navigate(`/team/${player.teamId}`);
    } else {
      navigate('/');
    }
  };

  if (!player || !team) {
    return (
      <VideoPageContainer>
        <ErrorMessage>
          <H2Title>Player not found</H2Title>
          <BackButton onClick={handleBackClick}>
            ← Back to Teams
          </BackButton>
        </ErrorMessage>
      </VideoPageContainer>
    );
  }

  return (
    <VideoPageContainer>
      <PageHeader>
        <BackButton onClick={handleBackClick}>
          ← Back to {team.name}
        </BackButton>
        <PageTitle>{player.name} - Videos</PageTitle>
      </PageHeader>

      <PlayerInfoSection>
        <PlayerDetails>
          <PlayerAvatar src={player.profileImage} alt={player.name} />
          <PlayerMeta>
            <H2Title>{player.name}</H2Title>
            <PlayerMetaText>{player.position} • #{player.jerseyNumber}</PlayerMetaText>
            <PlayerMetaText>{player.height} cm • {player.birthYear} years</PlayerMetaText>
          </PlayerMeta>
        </PlayerDetails>
      </PlayerInfoSection>

      <VideosGrid>
        {playerVideos.map((video) => (
          <VideoCard key={video.id}>
            <VideoThumbnail>
              <VideoThumbnailImage src={video.thumbnail} alt={video.title} />
              <PlayButton>
                <PlayIcon>▶</PlayIcon>
              </PlayButton>
              <VideoDuration>{video.duration}</VideoDuration>
            </VideoThumbnail>
            <VideoInfo>
              <VideoTitle>{video.title}</VideoTitle>
              <VideoMeta>
                <VideoDate>
                  <CalendarIcon>📅</CalendarIcon>
                  {video.date}
                </VideoDate>
                <VideoDurationText>
                  <ClockIcon>🕐</ClockIcon>
                  {video.duration}
                </VideoDurationText>
              </VideoMeta>
            </VideoInfo>
          </VideoCard>
        ))}
      </VideosGrid>
    </VideoPageContainer>
  );
};

export default VideoPage;
