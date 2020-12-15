import React, {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  SetStateAction
} from 'react'
import { cardStyleObjectI } from '../interfaces'
import { CardDiv, Hr, LongInput } from '../style/CardStyle'
import { ColorInput, ColorTextInput } from '../style/ComponentContainerStyle'
import { Button, FlexRowDiv, SizeInput, TitleP } from '../style/TypeCardStyle'

interface ITextPropertiesProps {
  setCardStyleObject: Dispatch<SetStateAction<cardStyleObjectI>>
  cardStyleObject: cardStyleObjectI
  cardComponent: string
}

const TextProperties: React.FC<ITextPropertiesProps> = ({
  setCardStyleObject,
  cardStyleObject,
  cardComponent
}) => {
  const handleTextAlign: MouseEventHandler<HTMLButtonElement> = (e) => {
    setCardStyleObject({ ...cardStyleObject, textAlign: e.currentTarget.value })
  }
  const handleTitleColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({
      ...cardStyleObject,
      titleColor: e.currentTarget.value
    })
  }
  const handleDescriptionColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({
      ...cardStyleObject,
      descriptionColor: e.currentTarget.value
    })
  }
  const handleFontSizeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({
      ...cardStyleObject,
      fontSizeTitle: e.currentTarget.value
    })
  }
  const handleMarginTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({
      ...cardStyleObject,
      marginTitle: e.currentTarget.value
    })
  }
  const handlePaddingTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({
      ...cardStyleObject,
      paddingTitle: e.currentTarget.value
    })
  }
  const handleFontSizeDescription: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setCardStyleObject({
      ...cardStyleObject,
      fontSizeDescription: e.currentTarget.value
    })
  }
  const handleMarginDescription: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({
      ...cardStyleObject,
      marginDescription: e.currentTarget.value
    })
  }
  const handlePaddingDescription: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setCardStyleObject({
      ...cardStyleObject,
      paddingDescription: e.currentTarget.value
    })
  }

  return (
    <CardDiv>
      <TitleP>Properties for the text:</TitleP>
      <FlexRowDiv>
        <p>Align</p>
        <Button type='button' value='left' onClick={handleTextAlign}>
          Left
        </Button>
        <Button type='button' value='center' onClick={handleTextAlign}>
          Center
        </Button>
        <Button type='button' value='right' onClick={handleTextAlign}>
          Right
        </Button>
      </FlexRowDiv>

      <div>
        <TitleP>Title:</TitleP>
        <FlexRowDiv>
          <p>Color:</p>
          <div>
            <ColorTextInput
              type='text'
              placeholder={cardStyleObject.titleColor}
              onChange={handleTitleColor}
            />
            <ColorInput
              type='color'
              value={cardStyleObject.titleColor}
              onChange={handleTitleColor}
            />
          </div>
          <FlexRowDiv>
            <p style={{ marginLeft: '0.5rem' }}>Font size</p>
            <SizeInput
              type='text'
              placeholder={cardStyleObject.fontSizeTitle}
              onChange={handleFontSizeTitle}
            />
          </FlexRowDiv>
        </FlexRowDiv>
      </div>

      <div>
        <p>Padding</p>
        <LongInput
          type='text'
          placeholder={cardStyleObject.marginTitle}
          onChange={handleMarginTitle}
        />
      </div>
      <div>
        <p>Margin</p>
        <LongInput
          type='text'
          placeholder={cardStyleObject.paddingTitle}
          onChange={handlePaddingTitle}
        />
      </div>

      {cardComponent === 'complete' ? (
        <div>
          <Hr />
          <TitleP>Description:</TitleP>
          <FlexRowDiv>
            <p>Color</p>
            <div>
              <ColorTextInput
                type='text'
                placeholder={cardStyleObject.descriptionColor}
                onChange={handleDescriptionColor}
              />
              <ColorInput
                type='color'
                value={cardStyleObject.descriptionColor}
                onChange={handleDescriptionColor}
              />
            </div>
            <p style={{ marginLeft: '0.5rem' }}>Font size</p>
            <SizeInput
              type='text'
              placeholder={cardStyleObject.fontSizeDescription}
              onChange={handleFontSizeDescription}
            />
          </FlexRowDiv>
          <p>Padding</p>
          <LongInput
            type='text'
            placeholder={cardStyleObject.marginDescription}
            onChange={handleMarginDescription}
          />
          <p>Margin</p>
          <LongInput
            type='text'
            placeholder={cardStyleObject.paddingDescription}
            onChange={handlePaddingDescription}
          />
        </div>
      ) : (
        <></>
      )}
    </CardDiv>
  )
}
export default TextProperties
