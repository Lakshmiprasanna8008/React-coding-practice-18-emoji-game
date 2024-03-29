// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiList, clicking} = props
  const {id, emojiUrl, emojiName} = emojiList
  const onClicking = () => {
    clicking(id)
  }

  return (
    <li className="emoji">
      <button
        type="button"
        data-testid="emoji"
        className="button"
        onClick={onClicking}
      >
        <img className="image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
