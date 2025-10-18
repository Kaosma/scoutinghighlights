import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { players, teams } from '../data.ts';
import type { Player, Video } from '../types.ts';

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
const VideoPlayer = styled.video`
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
  background: #000;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #000;
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
const DownloadButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 768px) {
    padding: 0.375rem;
    font-size: 0.7rem;
  }
`;
const ErrorMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;

  h2 {
    color: #ef4444;
    margin-bottom: 1rem;
  }
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
    <PlayerAvatar
      src={player.profileImage}
      alt={player.name}
      onError={handleImageError}
      onLoad={handleImageLoad}
      style={{ display: imageLoading ? 'none' : 'block' }}
    />
  );
};

const VideoPage = () => {
  const { playerId } = useParams<{ playerId: string }>();
  const navigate = useNavigate();
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const player = players.find((p: Player) => p.id === playerId);
  const team = player ? teams.find(t => t.id === player.teamId) : null;
  const bucketUrl = 'https://pub-eb9c5999778c49ef994ffcbb5e3f3c04.r2.dev/';
  const videoUrl = `${bucketUrl}${team?.name.toLowerCase()}/number${player?.jerseyNumber}.mp4`;

  // Create a video object from the videoUrl and add it to playerVideos
  const playerVideos: Video[] = [];

  // Only add the video if we have valid team and player data, and jersey number is not 999
  if (team && player && player.jerseyNumber !== 999) {
    const generatedVideo = {
      id: `generated-${player.id}-${player.jerseyNumber}`,
      playerId: player.id,
      videoUrl: videoUrl
    };

    playerVideos.push(generatedVideo);
  }

  const handleBackClick = () => {
    if (player) {
      navigate(`/team/${player.teamId}`);
    } else {
      navigate('/');
    }
  };

  const handlePlayClick = (videoId: string) => {
    console.log(videoUrl);
    setPlayingVideoId(playingVideoId === videoId ? null : videoId);
  };

  const handleDownloadClick = (videoUrl: string, videoTitle: string) => {
    try {
      // For mobile devices, try to open in new tab first
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.open(videoUrl, '_blank');
        return;
      }

      // For desktop browsers, use download attribute
      const link = document.createElement('a');
      link.href = videoUrl;
      link.download = `${videoTitle}.mp4`;
      link.target = '_blank';

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(videoUrl, '_blank');
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
      </PageHeader>

      <PlayerInfoSection>
        <PlayerDetails>
          <PlayerImageComponent player={player} />
          <PlayerMeta>
            <H2Title>{player.name}</H2Title>
            <PlayerMetaText>{player.position} • #{player.jerseyNumber}</PlayerMetaText>
            <PlayerMetaText>{player.birthYear}</PlayerMetaText>
          </PlayerMeta>
        </PlayerDetails>
      </PlayerInfoSection>

      <VideosGrid>
        {playerVideos.map((video) => (
          <VideoCard key={video.id}>
            <VideoThumbnail>
              {playingVideoId === video.id && video.videoUrl ? (
                <VideoPlayer
                  src={video.videoUrl}
                  controls
                  autoPlay
                  onEnded={() => setPlayingVideoId(null)}
                />
              ) : (
                <>
                  <PlayButton onClick={() => handlePlayClick(video.id)}>
                    <PlayIcon>▶</PlayIcon>
                  </PlayButton>
                  {video.videoUrl && (
                    <DownloadButton
                      onClick={() => handleDownloadClick(video.videoUrl!, player.name)}
                      title="Download video"
                    >
                      Download
                    </DownloadButton>
                  )}
                </>
              )}
            </VideoThumbnail>
          </VideoCard>
        ))}
      </VideosGrid>
    </VideoPageContainer>
  );
};

export default VideoPage;