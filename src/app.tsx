import { ErrorBoundary, LocationProvider, Route, Router } from 'preact-iso';
import Game from './pages/Game';
import StartGame from './pages/StartGame';

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Route path="/" component={StartGame} />
          <Route path="/game" component={Game} />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
}
