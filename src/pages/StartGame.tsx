import { useLocation } from 'preact-iso';
import Button from '../components/Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '../constants/buttonStyle';
import {
  GRID_SIZE,
  PLAYERS,
  SETTINGS_KEYS,
  THEME,
  type GridSize,
  type Players,
  type Theme,
} from '../constants/gameSettings';

type Settings = {
  theme: Theme;
  players: Players;
  gridSize: GridSize;
};

function StartGame({
  selectedSettings,
  setSelectedSettings,
}: {
  path?: string;
  selectedSettings: Settings;
  setSelectedSettings: (
    value: Settings | ((prev: Settings) => Settings),
  ) => void;
}) {
  const { route } = useLocation();

  const handleSettingChange = <K extends keyof Settings>(
    setting: K,
    value: Settings[K],
  ) => {
    setSelectedSettings((prev) => ({
      ...prev,
      [setting]: value,
    }));
  };

  const handleStartGame = () => {
    route('/game');
  };

  return (
    <div className="pt-600 md:pt-1000">
      <h1 className="text-preset text-preset-5 lg:text-preset-4 text-center pb-1000 text-white">
        memory
      </h1>
      <section className="bg-grey-50 px-300 py-400 md:p-600 rounded-3xl flex flex-col gap-400 mx-400 lg:mx-[25%]">
        <section>
          <h2 className="text-preset text-preset-11 md:text-preset-8 text-blue-400 pb-200">
            Select Theme
          </h2>
          <div className="flex gap-100 md:gap-400">
            <Button
              onClick={() =>
                handleSettingChange(SETTINGS_KEYS.THEME, THEME.NUMBERS)
              }
              variant={BUTTON_VARIANTS.selection}
              isSelected={selectedSettings.theme === THEME.NUMBERS}
            >
              Numbers
            </Button>
            <Button
              onClick={() =>
                handleSettingChange(SETTINGS_KEYS.THEME, THEME.ICONS)
              }
              variant={BUTTON_VARIANTS.selection}
              isSelected={selectedSettings.theme === THEME.ICONS}
            >
              Icons
            </Button>
          </div>
        </section>
        <section>
          <h2 className="text-preset text-preset-11 md:text-preset-8 text-blue-400 pb-200">
            Numbers of Players
          </h2>
          <div>
            <div className="flex gap-100 md:gap-300">
              <Button
                variant={BUTTON_VARIANTS.selection}
                onClick={() =>
                  handleSettingChange(SETTINGS_KEYS.PLAYERS, PLAYERS.ONE)
                }
                isSelected={selectedSettings.players === PLAYERS.ONE}
              >
                1
              </Button>
              <Button
                variant={BUTTON_VARIANTS.selection}
                onClick={() =>
                  handleSettingChange(SETTINGS_KEYS.PLAYERS, PLAYERS.TWO)
                }
                isSelected={selectedSettings.players === PLAYERS.TWO}
              >
                2
              </Button>
              <Button
                variant={BUTTON_VARIANTS.selection}
                onClick={() =>
                  handleSettingChange(SETTINGS_KEYS.PLAYERS, PLAYERS.THREE)
                }
                isSelected={selectedSettings.players === PLAYERS.THREE}
              >
                3
              </Button>
              <Button
                variant={BUTTON_VARIANTS.selection}
                onClick={() =>
                  handleSettingChange(SETTINGS_KEYS.PLAYERS, PLAYERS.FOUR)
                }
                isSelected={selectedSettings.players === PLAYERS.FOUR}
              >
                4
              </Button>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-preset text-preset-11 md:text-preset-8 text-blue-400 pb-200">
            Grid Size
          </h2>
          <div className="flex gap-100 md:gap-400">
            <Button
              variant={BUTTON_VARIANTS.selection}
              onClick={() =>
                handleSettingChange(SETTINGS_KEYS.GRID_SIZE, GRID_SIZE.SMALL)
              }
              isSelected={selectedSettings.gridSize === GRID_SIZE.SMALL}
            >
              4x4
            </Button>
            <Button
              variant={BUTTON_VARIANTS.selection}
              onClick={() =>
                handleSettingChange(SETTINGS_KEYS.GRID_SIZE, GRID_SIZE.LARGE)
              }
              isSelected={selectedSettings.gridSize === GRID_SIZE.LARGE}
            >
              6x6
            </Button>
          </div>
        </section>

        <Button
          variant={BUTTON_VARIANTS.primary}
          size={BUTTON_SIZES.big}
          onClick={handleStartGame}
        >
          Start Game
        </Button>
      </section>
    </div>
  );
}

export default StartGame;
