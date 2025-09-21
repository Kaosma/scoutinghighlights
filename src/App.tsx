import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamPage from './components/TeamPage.tsx';
import PlayerPage from './components/PlayerPage.tsx';
import VideoPage from './components/VideoPage.tsx';
import LoginPage from './components/LoginPage.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
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
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
