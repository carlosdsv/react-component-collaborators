import React, { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import { ComponentDiv } from '../style/ComponentContainerStyle'
import {
  Button,
  CardTypeButtonDiv,
  CardTypeContainerDiv,
  TitleP
} from '../style/TypeCardStyle'

interface ITypeOfCardProps {
  setCardComponent: Dispatch<SetStateAction<string>>
  setImagePosition: Dispatch<SetStateAction<string>>
}

const TypeOfCard: React.FC<ITypeOfCardProps> = ({
  setCardComponent,
  setImagePosition
}) => {
  const handleTypeOfCardComplete: MouseEventHandler<HTMLButtonElement> = () => {
    setCardComponent('complete')
  }
  const handleTypeOfCardMinimal: MouseEventHandler<HTMLButtonElement> = () => {
    setCardComponent('minimal')
  }
  const handleImagePosition: MouseEventHandler<HTMLButtonElement> = (e) => {
    setImagePosition(e.currentTarget.value)
  }
  return (
    <ComponentDiv>
      <CardTypeContainerDiv>
        <TitleP>Type of Card:</TitleP>
        <CardTypeButtonDiv>
          <Button type='button' onClick={handleTypeOfCardComplete}>
            Complete
          </Button>
          <Button type='button' onClick={handleTypeOfCardMinimal}>
            Minimal
          </Button>
        </CardTypeButtonDiv>
      </CardTypeContainerDiv>
      <CardTypeContainerDiv>
        <TitleP>Image position:</TitleP>
        <CardTypeButtonDiv>
          <Button type='button' value='left' onClick={handleImagePosition}>
            Left
          </Button>
          <Button type='button' value='right' onClick={handleImagePosition}>
            Right
          </Button>
        </CardTypeButtonDiv>
        <CardTypeButtonDiv>
          <Button type='button' value='top' onClick={handleImagePosition}>
            Top
          </Button>
          <Button type='button' value='bottom' onClick={handleImagePosition}>
            Bottom
          </Button>
        </CardTypeButtonDiv>
      </CardTypeContainerDiv>
    </ComponentDiv>
  )
}
export default TypeOfCard
