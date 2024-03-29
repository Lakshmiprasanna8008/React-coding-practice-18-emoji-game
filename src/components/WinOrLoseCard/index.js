// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, isWon, onPlayAgain} = props
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const status = isWon ? 'You Won' : 'You Lose'
  const label = isWon ? 'Best Score' : 'Score'
  return (
    <div className="winOrLoseContainer">
      <div className="details">
        <h1 className="status">{status}</h1>
        <p className="score-label">{label}</p>
        <p className="score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img className="winOrLoseImage" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
