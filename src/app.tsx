import { ErrorBoundary, LocationProvider, Route, Router } from 'preact-iso';
import { useState } from 'preact/hooks';
import {
  GRID_SIZE,
  PLAYERS,
  THEME,
  type GridSize,
  type Players,
  type Theme,
} from './constants/gameSettings';
import Game from './pages/Game';
import StartGame from './pages/StartGame';

export type Settings = {
  theme: Theme;
  players: Players;
  gridSize: GridSize;
};

export function App() {
  const [selectedSettings, setSelectedSettings] = useState<Settings>({
    theme: THEME.NUMBERS,
    players: PLAYERS.ONE,
    gridSize: GRID_SIZE.SMALL,
  });

  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <StartGame
            path="/"
            selectedSettings={selectedSettings}
            setSelectedSettings={setSelectedSettings}
          />
          <Route
            path="/game"
            component={() => <Game selectedSettings={selectedSettings} />}
          />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
}
