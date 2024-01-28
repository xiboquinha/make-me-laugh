
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GameProvider } from './GameProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GameProvider>
    <App />
 </GameProvider>,
)
