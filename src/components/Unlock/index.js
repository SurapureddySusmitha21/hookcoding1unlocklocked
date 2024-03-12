// Write your code here
import {useState} from 'react'

import {
  BackGround,
  LockImage,
  DeviceParagraph,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [isTrue, setIsTrue] = useState(true)
  const getTheState = () => {
    setIsTrue(PrevState => !PrevState)
  }
  const ImageUrl = isTrue
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const imageAlt = isTrue ? 'lock' : 'unlock'

  const ButtonText = isTrue ? 'Unlock' : 'Lock'

  const ParagraphText = isTrue ? 'Locked' : 'Unlocked'

  return (
    <BackGround>
      <LockImage src={ImageUrl} alt={imageAlt} />
      <DeviceParagraph>Your device is {ParagraphText}</DeviceParagraph>
      <LockButton onClick={getTheState}>{ButtonText}</LockButton>
    </BackGround>
  )
}
export default Unlock
