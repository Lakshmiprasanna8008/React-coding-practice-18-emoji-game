// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, score, isGameCompleted} = props
  return (
    <nav className="nav-container">
      <div className="title-with-score-container">
        <div className="logo-and-title-container">
          <img
            className="emoji-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {!isGameCompleted && (
          <div className="scores-container">
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
