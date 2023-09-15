import { Game } from '../Game'
import { Header } from '../Header'

export function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  )
}
