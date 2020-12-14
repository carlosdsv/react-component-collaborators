import React, {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  SetStateAction
} from 'react'
import { listStyleObjectI } from '../interfaces'
import { CardSizeInput } from '../style/CardStyle'
import {
  ColorInput,
  ColorTextInput,
  ComponentDiv
} from '../style/ComponentContainerStyle'
import { Button, FlexRowDiv, P, TitleP } from '../style/TypeCardStyle'

interface IContainerPropertiesProps {
  setListStyleObject: Dispatch<SetStateAction<listStyleObjectI>>
  listStyleObject: listStyleObjectI
}

const ContainerProperties: React.FC<IContainerPropertiesProps> = ({
  setListStyleObject,
  listStyleObject
}) => {
  // List functions
  const handleListWidth: ChangeEventHandler<HTMLInputElement> = (e) => {
    setListStyleObject({ ...listStyleObject, listWidth: e.target.value })
  }
  const handleListHeight: ChangeEventHandler<HTMLInputElement> = (e) => {
    setListStyleObject({ ...listStyleObject, listHeight: e.target.value })
  }
  const handleListBackgroundColor: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setListStyleObject({
      ...listStyleObject,
      listBackgroundColor: e.target.value
    })
  }
  const handleDirection: MouseEventHandler<HTMLButtonElement> = (e) => {
    setListStyleObject({ ...listStyleObject, direction: e.currentTarget.value })
  }

  return (
    <ComponentDiv>
      <TitleP>Properties for the container:</TitleP>
      <FlexRowDiv>
        <P>Width </P>
        <CardSizeInput
          placeholder={listStyleObject.listWidth}
          onChange={handleListWidth}
        />
        <P>Height</P>
        <CardSizeInput
          type='text'
          placeholder={listStyleObject.listHeight}
          onChange={handleListHeight}
        />
      </FlexRowDiv>
      <div>
        <P>Display direction</P>
        <Button type='button' value='vertical' onClick={handleDirection}>
          Vertical
        </Button>
        <Button type='button' value='horizontal' onClick={handleDirection}>
          Horizontal
        </Button>
        <Button type='button' value='none' onClick={handleDirection}>
          None
        </Button>
      </div>
      <div>
        <P>Background color:</P>
        <div>
          <ColorTextInput
            type='text'
            placeholder={listStyleObject.listBackgroundColor}
            onChange={handleListBackgroundColor}
          />
          <ColorInput
            type='color'
            value={listStyleObject.listBackgroundColor}
            placeholder={listStyleObject.listBackgroundColor}
            onChange={handleListBackgroundColor}
          />
        </div>
      </div>
    </ComponentDiv>
  )
}

export default ContainerProperties
