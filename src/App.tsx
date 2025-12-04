import { useState } from 'react'
import SettingsModal, { type GameSettings } from './components/SettingsModal'
import PlayerGrid from './components/PlayerGrid'
import { getRandomWord, getRandomFrontText } from './data/words'
import './App.css'

const DEFAULT_SETTINGS: GameSettings = {
  numPlayers: 6,
  numImposters: 2,
  categories: ['animals', 'foods', 'jobs'],
  hintEnabled: true
}

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [settings, setSettings] = useState<GameSettings>(DEFAULT_SETTINGS)


  const handleSaveSettings = (newSettings: GameSettings) => {
    setSettings(newSettings)
    console.log('Settings saved:', newSettings)
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="app-title">
          <span>Imposter Word Game</span>
        </h1>
        <button
          type="button"
          className="app-settings-btn"
          onClick={() => setIsSettingsOpen(true)}
        >
          <span>Game Settings</span>
        </button>
      </header>

      <main className="app-main">
        <PlayerGrid settings={settings} />
      </main>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onSave={handleSaveSettings}
      />
    </div>
  )
}

export default App
