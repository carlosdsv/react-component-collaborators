import React, {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  SetStateAction
} from 'react'
import { borderI, cardStyleObjectI } from '../interfaces'
import { CardDiv, CardSizeInput, Hr } from '../style/CardStyle'
import { ColorInput, ColorTextInput } from '../style/ComponentContainerStyle'
import {
  Button,
  FlexRowDiv,
  P,
  SizeInput,
  TitleP
} from '../style/TypeCardStyle'
interface ICardPropertiesProps {
  cardStyleObject: cardStyleObjectI
  setCardStyleObject: Dispatch<SetStateAction<cardStyleObjectI>>
  borderCard: borderI
  borderImage: borderI
}

const CardProperties: React.FC<ICardPropertiesProps> = ({
  cardStyleObject,
  setCardStyleObject,
  borderCard,
  borderImage
}) => {
  // Card functions
  const handleCardWidth: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({ ...cardStyleObject, cardWidth: e.target.value })
  }
  const handleCardHeight: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({ ...cardStyleObject, cardHeight: e.target.value })
  }
  const handleCardBackgroundColor: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setCardStyleObject({
      ...cardStyleObject,
      cardBackgroundColor: e.target.value
    })
  }
  const handleImageFormat: MouseEventHandler<HTMLButtonElement> = (e) => {
    setCardStyleObject({
      ...cardStyleObject,
      imageFormat: e.currentTarget.value
    })
  }
  const handleImageWidth: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({
      ...cardStyleObject,
      imageWidth: e.currentTarget.value
    })
  }
  const handleImageHeight: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({
      ...cardStyleObject,
      imageHeight: e.currentTarget.value
    })
  }
  const handleBorderCardWidth: ChangeEventHandler<HTMLInputElement> = (e) => {
    borderCard.width = e.currentTarget.value
    setCardStyleObject({ ...cardStyleObject, borderCard })
  }
  const handleBorderCardStyle: MouseEventHandler<HTMLButtonElement> = (e) => {
    borderCard.style = e.currentTarget.value
    setCardStyleObject({ ...cardStyleObject, borderCard })
  }
  const handleBorderCardColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    borderCard.color = e.currentTarget.value
    setCardStyleObject({ ...cardStyleObject, borderCard })
  }
  const handleBorderImageWidth: ChangeEventHandler<HTMLInputElement> = (e) => {
    borderImage.width = e.currentTarget.value
    setCardStyleObject({ ...cardStyleObject, borderImage })
  }
  const handleBorderImageStyle: MouseEventHandler<HTMLButtonElement> = (e) => {
    borderImage.style = e.currentTarget.value
    setCardStyleObject({ ...cardStyleObject, borderImage })
  }
  const handleBorderImageColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    borderImage.color = e.currentTarget.value
    setCardStyleObject({ ...cardStyleObject, borderImage })
  }
  return (
    <CardDiv>
      <TitleP>Properties for the card:</TitleP>
      <div>
        <FlexRowDiv>
          <P>Width</P>
          <CardSizeInput
            type='text'
            placeholder={cardStyleObject.cardWidth}
            onChange={handleCardWidth}
          />
          <P>Height</P>
          <CardSizeInput
            type='text'
            placeholder={cardStyleObject.cardHeight}
            onChange={handleCardHeight}
          />
        </FlexRowDiv>
        <FlexRowDiv>
          <P>Background color:</P>
          <div>
            <ColorTextInput
              type='text'
              placeholder={cardStyleObject.cardBackgroundColor}
              onChange={handleCardBackgroundColor}
            />
            <ColorInput
              type='color'
              value={cardStyleObject.cardBackgroundColor}
              onChange={handleCardBackgroundColor}
            />
          </div>
        </FlexRowDiv>
        <P>Card border:</P>
        <FlexRowDiv>
          <P>Width</P>
          <SizeInput
            type='text'
            placeholder={cardStyleObject.borderCard.width}
            onChange={handleBorderCardWidth}
          />
          <P>Color</P>
          <div>
            <ColorTextInput
              type='text'
              placeholder={cardStyleObject.borderCard.color}
              onChange={handleBorderCardColor}
            />
            <ColorInput
              type='color'
              value={cardStyleObject.borderCard.color}
              onChange={handleBorderCardColor}
            />
          </div>
        </FlexRowDiv>
        <FlexRowDiv>
          <P>Style</P>
          <Button type='button' value='none' onClick={handleBorderCardStyle}>
            None
          </Button>
          <Button type='button' value='solid' onClick={handleBorderCardStyle}>
            Solid
          </Button>
          <Button type='button' value='dashed' onClick={handleBorderCardStyle}>
            Dashed
          </Button>
          <Button type='button' value='double' onClick={handleBorderCardStyle}>
            Double
          </Button>
        </FlexRowDiv>
      </div>
      <Hr />
      <TitleP>Properties for the image:</TitleP>
      <div>
        <FlexRowDiv>
          <P>Format:</P>
          <Button type='button' value='circle' onClick={handleImageFormat}>
            circle
          </Button>
          <Button type='button' value='square' onClick={handleImageFormat}>
            Square
          </Button>
        </FlexRowDiv>
        <FlexRowDiv>
          <P>Width</P>
          <CardSizeInput
            type='text'
            placeholder={cardStyleObject.imageWidth}
            onChange={handleImageWidth}
          />
          <P>Height</P>
          <CardSizeInput
            type='text'
            placeholder={cardStyleObject.imageHeight}
            onChange={handleImageHeight}
          />
        </FlexRowDiv>
        <P>Border</P>
        <FlexRowDiv>
          <P>Width</P>
          <SizeInput
            type='text'
            placeholder={cardStyleObject.borderImage.width}
            onChange={handleBorderImageWidth}
          />
          <P>Color</P>
          <div>
            <ColorTextInput
              type='text'
              placeholder={cardStyleObject.borderImage.color}
              onChange={handleBorderImageColor}
            />
            <ColorInput
              type='color'
              value={cardStyleObject.borderImage.color}
              onChange={handleBorderImageColor}
            />
          </div>
        </FlexRowDiv>
        <FlexRowDiv>
          <P>Style</P>
          <Button type='button' value='none' onClick={handleBorderImageStyle}>
            None
          </Button>
          <Button type='button' value='solid' onClick={handleBorderImageStyle}>
            Solid
          </Button>
          <Button type='button' value='dashed' onClick={handleBorderImageStyle}>
            Dashed
          </Button>
          <Button type='button' value='double' onClick={handleBorderImageStyle}>
            Double
          </Button>
        </FlexRowDiv>
      </div>
    </CardDiv>
  )
}
export default CardProperties
