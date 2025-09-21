import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import TeamPage from './components/TeamPage.tsx';
import PlayerPage from './components/PlayerPage.tsx';
import VideoPage from './components/VideoPage.tsx';
import LoginPage from './components/LoginPage.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import { AuthProvider } from './contexts/AuthContext';

const AppContainer = styled.div`
  /* Add any app-level styles here if needed */
`;

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContainer>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={
              <ProtectedRoute>
                <TeamPage />
              </ProtectedRoute>
            } />
            <Route path="/team/:teamId" element={
              <ProtectedRoute>
                <PlayerPage />
              </ProtectedRoute>
            } />
            <Route path="/player/:playerId" element={
              <ProtectedRoute>
                <VideoPage />
              </ProtectedRoute>
            } />
          </Routes>
        </AppContainer>
      </Router>
    </AuthProvider>
  );
}

export default App;
