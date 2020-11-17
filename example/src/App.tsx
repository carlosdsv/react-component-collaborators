import React, { ChangeEventHandler, MouseEventHandler} from 'react';
import { useState } from 'react';
import { 
  AppDiv, 
  AppTitleDiv, 
  Button, 
  CardTypeButtonDiv, 
  CardTypeContainerDiv, 
   
  P, 
  ComponentDisplayDiv, 
  CustomizationDiv, 
  SizeInput, 
  TitleP,
  FlexRowDiv
} from './style/TypeCardStyle'
import { CollaboratorsList} from 'react-component-collaborators';
import { CardComplete } from 'react-component-collaborators';
import { CardMinimal } from 'react-component-collaborators';
import collaboratorsArray from './mock/collaboratorsArray';
import { cardStyleObjectI, listStyleObjectI } from './interfaces';
import { ComponentTitleP, ComponentDiv, ColorTextInput, ColorInput } from './style/ComponentContainerStyle';
import { CardDiv, CardSizeInput, Hr, LongInput } from './style/CardStyle';
import { Code, CodeDiv, CodeSnippetDiv, SnippetDiv } from './style/CodeSnippetTyle';

const borderImage = {
  width: '4px',
  style: 'solid',
  color: '#E8C3C9'
}
const borderCard = {
  width: '4px',
  style: 'solid',
  color: '#E8C3C9'
}

const App:React.FC = () => {
  // Card component
  const [cardComponent, setCardComponent] = useState<string>('complete');
  const [imagePosition, setImagePosition] = useState<string>('left');

  // List state
  const [listStyleObject, setListStyleObject] = useState<listStyleObjectI>({
    listWidth: '700px',
    listHeight: '400px', 
    direction: 'vertical',
    listBackgroundColor: '#FFF'
  });

  // Card state
  
  
  const [cardStyleObject, setCardStyleObject] = useState<cardStyleObjectI>({
    cardWidth: '300px', 
    cardHeight: '150px',
    cardBackgroundColor: '#7EE8FA',
    textAlign: 'center',
    imageFormat: 'circle',
    borderImage: borderImage,
    borderCard: borderCard,
    titleColor: '#000',
    descriptionColor: '#000',
    imageWidth: '100px',
    imageHeight: '100px',
    fontSizeTitle: '100%',
    paddingTitle: '0px 0px 20px 0px',
    marginTitle: '0px 0px 0px 0px',
    fontSizeDescription: '80%',
    paddingDescription: '0px 0px 0px 0px',
    marginDescription: '0px 0px 0px 0px'
  });

  // Code snippet
  const collaborarorsArraySnippet:string = `
  collaboratorsArray = [{
    image: 'mandatory url',
    title: 'mandatory title',
    description: 'optional description'
  }, {}, ...]
  `;

  const basicStructureSnippet:string = `
  <CollaboratorsList collaboratorsArray={collaboratorsArray} listStyleObject={listStyleObject}>
    ${cardComponent === 'complete'? '<CardComplete': '<CardMinimal'} cardStyleObject={cardStyleObject} imagePosition={imagePosition}/>
  </CollaboratorsList>
  `;

  const imagePositionSnippet:string = `
  const imagePosition = '${imagePosition}'
  `;

  const listStyleObjectSnippet:string = `
  const listStyleObject = {{
    listWidth: '${listStyleObject.listWidth}',
    listHeight: '${listStyleObject.listHeight}', 
    direction: '${listStyleObject.direction}',
    listBackgroundColor: '${listStyleObject.listBackgroundColor}'
  }
  `;

  const cardStyleObjectSnippet:string = `
  const cardStyleObject = {
    cardWidth: '${cardStyleObject.cardWidth}',
    cardHeight: '${cardStyleObject.cardHeight}',
    cardBackgroundColor: '${cardStyleObject.cardBackgroundColor}',
    textAlign: '${cardStyleObject.textAlign}',
    imageFormat: '${cardStyleObject.imageFormat}',
    borderImage: {
      width: '${cardStyleObject.borderImage.width}',
      style: '${cardStyleObject.borderImage.style}',
      color: '${cardStyleObject.borderImage.color}'
    },
    borderCard: {
      width: '${cardStyleObject.borderCard.width}',
      style: '${cardStyleObject.borderCard.style}',
      color: '${cardStyleObject.borderCard.color}'
    },
    titleColor: '${cardStyleObject.titleColor}',
    descriptionColor: '${cardStyleObject.descriptionColor}',
    imageWidth: '${cardStyleObject.imageWidth}',
    imageHeight: '${cardStyleObject.imageHeight}',
    fontSizeTitle: '${cardStyleObject.fontSizeTitle}',
    paddingTitle: '${cardStyleObject.paddingTitle}',
    marginTitle: '${cardStyleObject.marginTitle}',
    fontSizeDescription: '${cardStyleObject.fontSizeDescription}',
    paddingDescription: '${cardStyleObject.paddingDescription}',
    marginDescription: '${cardStyleObject.marginDescription}'
  }
  `;
  
  // Type of card functions
  const handleTypeOfCardComplete: MouseEventHandler<HTMLButtonElement> = () => {
    setCardComponent('complete')
  }
  const handleTypeOfCardMinimal: MouseEventHandler<HTMLButtonElement> = () => {
    setCardComponent('minimal')
  }
  const handleImagePosition: MouseEventHandler<HTMLButtonElement> = (e) => {
    setImagePosition(e.currentTarget.value)
  }

  // List functions
  const handleListWidth: ChangeEventHandler<HTMLInputElement> = (e) => {
    setListStyleObject({...listStyleObject, listWidth: e.target.value})
  }
  const handleListHeight: ChangeEventHandler<HTMLInputElement> = (e) => {
    setListStyleObject({...listStyleObject, listHeight: e.target.value})
  }
  const handleListBackgroundColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setListStyleObject({...listStyleObject, listBackgroundColor: e.target.value})
  }
  const handleDirection: MouseEventHandler<HTMLButtonElement> = (e) => {
    setListStyleObject({...listStyleObject, direction: e.currentTarget.value})
  }

  // Card functions
  const handleCardWidth: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({...cardStyleObject, cardWidth: e.target.value})
  }
  const handleCardHeight: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({...cardStyleObject, cardHeight: e.target.value})
  }
  const handleTextAlign: MouseEventHandler<HTMLButtonElement> = (e) => {
    setCardStyleObject({...cardStyleObject, textAlign: e.currentTarget.value})
  }
  const handleCardBackgroundColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({...cardStyleObject, cardBackgroundColor: e.target.value})
  }
  const handleImageFormat: MouseEventHandler<HTMLButtonElement> = (e) => {
    setCardStyleObject({...cardStyleObject, imageFormat: e.currentTarget.value})
  }
  const handleTitleColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({...cardStyleObject, titleColor: e.currentTarget.value})
  }
  const handleDescriptionColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({...cardStyleObject, descriptionColor: e.currentTarget.value})
  }
  const handleImageWidth: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({...cardStyleObject, imageWidth: e.currentTarget.value})
  }
  const handleImageHeight: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({...cardStyleObject, imageHeight: e.currentTarget.value})
  }
  const handleFontSizeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({...cardStyleObject, fontSizeTitle: e.currentTarget.value})
  }
  const handleMarginTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({...cardStyleObject, marginTitle: e.currentTarget.value})
  }
  const handlePaddingTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({...cardStyleObject, paddingTitle: e.currentTarget.value})
  }
  const handleFontSizeDescription: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({...cardStyleObject, fontSizeDescription: e.currentTarget.value})
  }
  const handleMarginDescription: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({...cardStyleObject, marginDescription: e.currentTarget.value})
  }
  const handlePaddingDescription: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCardStyleObject({...cardStyleObject, paddingDescription: e.currentTarget.value})
  }


  const handleBorderCardWidth: ChangeEventHandler<HTMLInputElement> = (e) => {
    borderCard.width= e.currentTarget.value;
    setCardStyleObject({...cardStyleObject, borderCard})
  }
  const handleBorderCardStyle: MouseEventHandler<HTMLButtonElement> = (e) => {
    borderCard.style= e.currentTarget.value;
    setCardStyleObject({...cardStyleObject, borderCard})
  }
  const handleBorderCardColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    borderCard.color=  e.currentTarget.value;
    setCardStyleObject({...cardStyleObject, borderCard})
  }

  const handleBorderImageWidth: ChangeEventHandler<HTMLInputElement> = (e) => {
    borderImage.width = e.currentTarget.value;
    setCardStyleObject({...cardStyleObject, borderImage})
  }
  const handleBorderImageStyle: MouseEventHandler<HTMLButtonElement> = (e) => {
    borderImage.style = e.currentTarget.value;
    setCardStyleObject({...cardStyleObject, borderImage})
  }
  const handleBorderImageColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    borderImage.color = e.currentTarget.value;
    setCardStyleObject({...cardStyleObject, borderImage})
  }

  return (
    <AppDiv>
      <AppTitleDiv>
        <h1>React Customizable Collaborators Component</h1>
      </AppTitleDiv>
      <ComponentDisplayDiv>
        <CollaboratorsList collaboratorsArray={collaboratorsArray} listStyleObject={listStyleObject}>
          {cardComponent === 'complete' ? <CardComplete cardStyleObject={cardStyleObject} imagePosition={imagePosition}/>: 
          cardComponent === 'minimal' ? <CardMinimal cardStyleObject={cardStyleObject} imagePosition={imagePosition}/>:
          <CardComplete cardStyleObject={cardStyleObject} imagePosition={imagePosition}/>}
        </CollaboratorsList>
      </ComponentDisplayDiv>

      <CustomizationDiv>
        <ComponentDiv>
          <CardTypeContainerDiv>
            <TitleP>Type of Card:</TitleP>
            <CardTypeButtonDiv>
              <Button type="button" onClick={handleTypeOfCardComplete}>Complete</Button>
              <Button type="button" onClick={handleTypeOfCardMinimal}>Minimal</Button>  
            </CardTypeButtonDiv>
          </CardTypeContainerDiv>
          <CardTypeContainerDiv>
            <TitleP>Image position:</TitleP>
            <CardTypeButtonDiv>
              <Button type="button" value='left' onClick={handleImagePosition}>Left</Button>
              <Button type="button" value='right'onClick={handleImagePosition}>Right</Button> 
            </CardTypeButtonDiv>
            <CardTypeButtonDiv>
              <Button type="button" value='top' onClick={handleImagePosition}>Top</Button>
              <Button type="button" value='bottom' onClick={handleImagePosition}>Bottom</Button>
            </CardTypeButtonDiv>
          </CardTypeContainerDiv>
        </ComponentDiv>

        <ComponentDiv>
          <ComponentTitleP>Properties for the container:</ComponentTitleP>
          <FlexRowDiv>
            <P>Width </P>
            <CardSizeInput placeholder={listStyleObject.listWidth} onChange={handleListWidth}/>
            <P>Height</P>
            <CardSizeInput type="text" placeholder={listStyleObject.listHeight} onChange={handleListHeight}/>
          </FlexRowDiv>
          <div>
            <P>Display direction</P>
            <Button type="button" value='vertical' onClick={handleDirection}>Vertical</Button>
            <Button type="button" value='horizontal' onClick={handleDirection}>Horizontal</Button>
            <Button type="button" value='none' onClick={handleDirection}>None</Button>
          </div>
          <div>
            <P>Background color:</P>
            <div>
              <ColorTextInput type='text' placeholder={listStyleObject.listBackgroundColor} onChange={handleListBackgroundColor}/>
              <ColorInput type='color' value={listStyleObject.listBackgroundColor} placeholder={listStyleObject.listBackgroundColor} onChange={handleListBackgroundColor}/>
            </div>
          </div>
        </ComponentDiv>

        <CardDiv>
          <TitleP>Properties for the card:</TitleP>
          <div>
            <FlexRowDiv>
              <P>Width</P>
              <CardSizeInput type="text" placeholder={cardStyleObject.cardWidth} onChange={handleCardWidth}/>
              <P>Height</P>
              <CardSizeInput type="text" placeholder={cardStyleObject.cardHeight} onChange={handleCardHeight}/>
            </FlexRowDiv>
            <FlexRowDiv>
              <P>Background color:</P>
              <div>
                <ColorTextInput type='text' placeholder={cardStyleObject.cardBackgroundColor} onChange={handleCardBackgroundColor}/>
                <ColorInput type='color' value={cardStyleObject.cardBackgroundColor} onChange={handleCardBackgroundColor}/>
              </div>
            </FlexRowDiv>
            <P>Card border:</P>
            <FlexRowDiv>
              <P>Width</P>
              <SizeInput type="text" placeholder={cardStyleObject.borderCard.width} onChange={handleBorderCardWidth}/>
              <P>Color</P>
              <div>
                <ColorTextInput type="text" placeholder={cardStyleObject.borderCard.color} onChange={handleBorderCardColor}/>
                <ColorInput type='color' value={cardStyleObject.borderCard.color} onChange={handleBorderCardColor}/>
              </div>
            </FlexRowDiv>
              <FlexRowDiv>
                <P>Style</P>
                <Button type="button" value='none' onClick={handleBorderCardStyle}>None</Button>
                <Button type="button" value='solid' onClick={handleBorderCardStyle}>Solid</Button>
                <Button type="button" value='dashed' onClick={handleBorderCardStyle}>Dashed</Button>
                <Button type="button" value='double' onClick={handleBorderCardStyle}>Double</Button>
              </FlexRowDiv>
          </div>
          <Hr/>
          <TitleP>Properties for the image:</TitleP>
          <div>
            <FlexRowDiv>
              <P>Format:</P>
              <Button type="button" value='circle' onClick={handleImageFormat}>circle</Button>
              <Button type="button" value='square' onClick={handleImageFormat}>Square</Button>
            </FlexRowDiv>
              <FlexRowDiv>
                <P>Width</P>
                <CardSizeInput type="text" placeholder={cardStyleObject.imageWidth} onChange={handleImageWidth}/>
                <P>Height</P>
                <CardSizeInput type="text" placeholder={cardStyleObject.imageHeight} onChange={handleImageHeight}/>
              </FlexRowDiv>
                <P>Border</P>
              <FlexRowDiv>
                <P>Width</P>
                <SizeInput type="text" placeholder={cardStyleObject.borderImage.width} onChange={handleBorderImageWidth}/>
                  <P>Color</P>
                <div>
                  <ColorTextInput type="text" placeholder={cardStyleObject.borderImage.color} onChange={handleBorderImageColor}/>
                  <ColorInput type='color' value={cardStyleObject.borderImage.color} onChange={handleBorderImageColor}/>
                </div>
              </FlexRowDiv>
              <FlexRowDiv>
                <P>Style</P>
                <Button type="button" value='none' onClick={handleBorderImageStyle}>None</Button>
                <Button type="button" value='solid' onClick={handleBorderImageStyle}>Solid</Button>
                <Button type="button" value='dashed' onClick={handleBorderImageStyle}>Dashed</Button>
                <Button type="button" value='double' onClick={handleBorderImageStyle}>Double</Button>
              </FlexRowDiv>
          </div>
        </CardDiv>

        <CardDiv>
          <TitleP>Properties for the text:</TitleP>
          <FlexRowDiv>
            <P>Align</P>
            <Button type="button" value='left' onClick={handleTextAlign}>Left</Button>
            <Button type="button" value='center' onClick={handleTextAlign}>Center</Button>
            <Button type="button" value='right' onClick={handleTextAlign}>Right</Button>
          </FlexRowDiv>

          <div>
            <TitleP>Title:</TitleP>
            <FlexRowDiv>
              <P>Color:</P>
              <div>
                <ColorTextInput type='text' placeholder={cardStyleObject.titleColor} onChange={handleTitleColor}/>
                <ColorInput type='color' value={cardStyleObject.titleColor} onChange={handleTitleColor}/>
              </div>
            <FlexRowDiv>
              <P>Font size</P>
              <SizeInput type="text" placeholder={cardStyleObject.fontSizeTitle} onChange={handleFontSizeTitle}/>
            </FlexRowDiv>
            </FlexRowDiv>
          </div>

          <div>
            <P>Padding</P>
            <LongInput type="text" placeholder={cardStyleObject.marginTitle} onChange={handleMarginTitle}/>
          </div>
          <div>
            <P>Margin</P>
            <LongInput type="text" placeholder={cardStyleObject.paddingTitle} onChange={handlePaddingTitle}/>
          </div>

          {cardComponent === 'complete' ? (
            <div>
              <Hr/>
              <TitleP>Description:</TitleP>
              <FlexRowDiv>
                <P>Color</P>
                <div>
                  <ColorTextInput type='text' placeholder={cardStyleObject.descriptionColor} onChange={handleDescriptionColor}/>
                  <ColorInput type='color' value={cardStyleObject.descriptionColor} onChange={handleDescriptionColor}/>
                </div>
                <P>Font size</P>
                <SizeInput type="text" placeholder={cardStyleObject.fontSizeDescription} onChange={handleFontSizeDescription}/>
              </FlexRowDiv>
                <P>Padding</P>
                <LongInput type="text" placeholder={cardStyleObject.marginDescription} onChange={handleMarginDescription}/>
                <P>Margin</P>
                <LongInput type="text" placeholder={cardStyleObject.paddingDescription} onChange={handlePaddingDescription}/>
          </div>
          ): <></>}
        </CardDiv>
      </CustomizationDiv>

      <CodeSnippetDiv>
        <SnippetDiv>
          <p>In order for this component to work, your collaborators array should look like this:</p>
        </SnippetDiv>
        <CodeDiv>
          <pre>
            <Code>{collaborarorsArraySnippet}</Code>
          </pre>
        </CodeDiv>
        <SnippetDiv>
          <p>Once you are happy with the result, just copy and paste the following variables with the styles:</p>
        </SnippetDiv>
        <CodeDiv>
          <pre>
            <Code>{imagePositionSnippet}</Code>
          </pre>
          <pre>
            <Code>{listStyleObjectSnippet}</Code>
          </pre>
          <pre>
            <Code>{cardStyleObjectSnippet}</Code>
          </pre>
        </CodeDiv>
        <SnippetDiv>
          <p>Finally your component should look like this:</p>
        </SnippetDiv>
        <CodeDiv>
          <pre>
            <Code>{basicStructureSnippet}</Code>
          </pre>
        </CodeDiv>
      </CodeSnippetDiv>
    </AppDiv>
  )
}

export default App