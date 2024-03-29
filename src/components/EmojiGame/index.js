/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {isGameCompleted: false, topScore: 0, addingEmojisArray: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojisDisplay = () => {
    const shuffledEmojisList = this.shuffledEmojisList()
    return (
      <ul className="emojisList-container">
        {shuffledEmojisList.map(each => (
          <EmojiCard emojiList={each} key={each.id} clicking={this.clicking} />
        ))}
      </ul>
    )
  }

  clicking = id => {
    const {addingEmojisArray} = this.state
    const {emojisList} = this.props
    const listLength = addingEmojisArray.length
    if (addingEmojisArray.includes(id)) {
      this.finishGameAndSetTopScore(listLength)
    } else {
      if (listLength === 11) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        addingEmojisArray: [...prevState.addingEmojisArray, id],
      }))
    }
  }

  finishGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (newScore > topScore) {
      newTopScore = newScore
    }
    this.setState({topScore: newTopScore, isGameCompleted: true})
  }

  winOrLose = () => {
    const {addingEmojisArray} = this.state
    const {emojisList} = this.props
    const isWon = addingEmojisArray.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        score={addingEmojisArray.length}
        onPlayAgain={this.resetGame}
      />
    )
  }

  resetGame = () => {
    this.setState({addingEmojisArray: [], isGameCompleted: false})
  }

  render() {
     const {emojisList} = this.props
    const {isGameCompleted, topScore, addingEmojisArray} = this.state
    const isWon = addingEmojisArray.length === emojisList.length

    return (
      <div className="whole-container">
        <NavBar topScore={topScore} score={addingEmojisArray.length} isWon={isWon}/>
        <div className="game-container">
          {isGameCompleted ? this.winOrLose() : this.emojisDisplay()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
