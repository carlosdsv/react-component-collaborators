import React, { ChangeEventHandler, MouseEventHandler} from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { CollaboratorsList} from 'react-component-collaborators';
import { CardComplete } from 'react-component-collaborators';
import { CardMinimal } from 'react-component-collaborators';
import collaboratorsArray from './mock/collaboratorsArray';
import { borderI, cardStyleObjectI, listStyleObjectI } from './interfaces';

const AppStyle = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`;
const CustomizationDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`;
const SizeInput = styled.input`
height: 20px;
width: 25%
`;

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
  const [borderImage, setBorderImage] = useState<borderI>({
    width: '4px',
    style: 'solid',
    color: '#E8C3C9'
  });
  const [borderCard, setBorderCard] = useState<borderI>({
    width: '4px',
    style: 'solid',
    color: '#E8C3C9'
  });
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
  [{
    image: 'mandatory url',
    title: 'mandatory title',
    description: 'optional description'
  }, {}, ...]
  `;
  const basicStructureSnippet:string = `
  <CollaboratorsList collaboratorsArray=[collaboratorsArray] listStyleObject={listStyleObject}>
    ${cardComponent === 'complete'? '<CardComplete': '<CardMinimal'} cardStyleObject={cardStyleObject} imagePosition={imagePosition}/>
  </CollaboratorsList>
  `;
  const codeSnippet:string = `
  <CollaboratorsList
    collaboratorsArray= Insert your array here!
    listStyleObject={{
      listWidth: ${listStyleObject.listWidth},
      listHeight: ${listStyleObject.listHeight}, 
      direction: ${listStyleObject.direction},
      listBackgroundColor: ${listStyleObject.listBackgroundColor}
    }}>
    ${cardComponent === 'complete'? '<CardComplete': '<CardMinimal'}
    imagePosition=${imagePosition}
    cardStyleObject={
      cardWidth: ${cardStyleObject.cardWidth},
      cardHeight: ${cardStyleObject.cardHeight},
      cardBackgroundColor: ${cardStyleObject.cardBackgroundColor},
      textAlign: ${cardStyleObject.textAlign},
      imageFormat: ${cardStyleObject.imageFormat},
      borderImage: {
        width: ${cardStyleObject.borderImage.width},
        style: ${cardStyleObject.borderImage.style},
        color: ${cardStyleObject.borderImage.color}
      },
      borderCard: {
        width: ${cardStyleObject.borderCard.width},
        style: ${cardStyleObject.borderCard.style},
        color: ${cardStyleObject.borderCard.color}
      },
      titleColor: ${cardStyleObject.titleColor},
      descriptionColor: ${cardStyleObject.descriptionColor},
      imageWidth: ${cardStyleObject.imageWidth},
      imageHeight: ${cardStyleObject.imageHeight},
      fontSizeTitle: ${cardStyleObject.fontSizeTitle},
      paddingTitle: ${cardStyleObject.paddingTitle},
      marginTitle: ${cardStyleObject.marginTitle},
      fontSizeDescription: ${cardStyleObject.fontSizeDescription},
      paddingDescription: ${cardStyleObject.paddingDescription},
      marginDescription: ${cardStyleObject.marginDescription}
    } />}
  </CollaboratorsList>
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
    setBorderCard({...borderCard, width: e.currentTarget.value})
    setCardStyleObject({...cardStyleObject, borderCard})
  }
  const handleBorderCardStyle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setBorderCard({...borderCard, style: e.currentTarget.value})
    setCardStyleObject({...cardStyleObject, borderCard})
  }
  const handleBorderCardColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setBorderCard({...borderCard, color: e.currentTarget.value})
    setCardStyleObject({...cardStyleObject, borderCard})
  }
  const handleBorderImageWidth: ChangeEventHandler<HTMLInputElement> = (e) => {
    setBorderImage({...borderImage, width: e.currentTarget.value})
    setCardStyleObject({...cardStyleObject, borderImage})
  }
  const handleBorderImageStyle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setBorderImage({...borderImage, style: e.currentTarget.value})
    setCardStyleObject({...cardStyleObject, borderImage})
  }
  const handleBorderImageColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setBorderImage({...borderImage, color: e.currentTarget.value})
    setCardStyleObject({...cardStyleObject, borderImage})
  }

  return (
    <div>
    <h1>React Customizable Collaborators Component</h1>
    <AppStyle>
      <CollaboratorsList collaboratorsArray={collaboratorsArray} listStyleObject={listStyleObject}>
        {cardComponent === 'complete' ? <CardComplete cardStyleObject={cardStyleObject} imagePosition={imagePosition}/>: 
        cardComponent === 'minimal' ? <CardMinimal cardStyleObject={cardStyleObject} imagePosition={imagePosition}/>:
        <CardComplete cardStyleObject={cardStyleObject} imagePosition={imagePosition}/>}
      </CollaboratorsList>
    </AppStyle>
    <div>
      <p>Type of Card:</p>
      <button type="button" onClick={handleTypeOfCardComplete}>Complete</button>
      <button type="button" onClick={handleTypeOfCardMinimal}>Minimal</button>
      <p>Image position:</p>
      <button type="button" value='left' onClick={handleImagePosition}>Left</button>
      <button type="button" value='right'onClick={handleImagePosition}>Right</button>
      <button type="button" value='top' onClick={handleImagePosition}>Top</button>
      <button type="button" value='bottom' onClick={handleImagePosition}>Bottom</button>
      <CustomizationDiv>
        <div>
          <p>Properties for the container:</p>
          <div>
            <p >Width</p>
            <SizeInput placeholder={listStyleObject.listWidth} onChange={handleListWidth}/>
          </div>
          <div>
            <p>Height</p>
            <SizeInput type="text" placeholder={listStyleObject.listHeight} onChange={handleListHeight}/>
          </div>
          <div>
            <p>Display direction</p>
            <button type="button" value='vertical' onClick={handleDirection}>Vertical</button>
            <button type="button" value='horizontal' onClick={handleDirection}>Horizontal</button>
            <button type="button" value='none' onClick={handleDirection}>None</button>
          </div>
          <div>
            <p>Background color:</p>
            <input type='text' placeholder={listStyleObject.listBackgroundColor} onChange={handleListBackgroundColor}/>
            <input type='color' value={listStyleObject.listBackgroundColor} placeholder={listStyleObject.listBackgroundColor} onChange={handleListBackgroundColor}/>
          </div>
        </div>

        <div>

          <p>Properties for the card:</p>
          <div>
            <p>Width</p>
            <SizeInput type="text" placeholder={cardStyleObject.cardWidth} onChange={handleCardWidth}/>
          </div>
          <div>
            <p>Height</p>
            <SizeInput type="text" placeholder={cardStyleObject.cardHeight} onChange={handleCardHeight}/>
          </div>
          <div>
            <p>Text align</p>
            <button type="button" value='left' onClick={handleTextAlign}>Left</button>
            <button type="button" value='center' onClick={handleTextAlign}>Center</button>
            <button type="button" value='right' onClick={handleTextAlign}>Right</button>
          </div>
          <div>
            <p>Background color:</p>
            <input type='text' placeholder={cardStyleObject.cardBackgroundColor} onChange={handleCardBackgroundColor}/>
            <input type='color' value={cardStyleObject.cardBackgroundColor} onChange={handleCardBackgroundColor}/>
          </div>
          <div>
            <p>Image format:</p>
            <button type="button" value='circle' onClick={handleImageFormat}>circle</button>
            <button type="button" value='square' onClick={handleImageFormat}>Square</button>
          </div>
          <div>
            <p>Title color:</p>
            <input type='text' placeholder={cardStyleObject.titleColor} onChange={handleTitleColor}/>
            <input type='color' value={cardStyleObject.titleColor} onChange={handleTitleColor}/>
          </div>
          {cardComponent === 'complete' ? (
            <div>
              <p>Description color:</p>
              <input type='text' placeholder={cardStyleObject.descriptionColor} onChange={handleDescriptionColor}/>
              <input type='color' value={cardStyleObject.descriptionColor} onChange={handleDescriptionColor}/>
            </div>
          ): <></>}
          <div>
            <p>Image width</p>
            <SizeInput type="text" placeholder={cardStyleObject.imageWidth} onChange={handleImageWidth}/>
          </div>
          <div>
            <p>Image height</p>
            <SizeInput type="text" placeholder={cardStyleObject.imageHeight} onChange={handleImageHeight}/>
          </div>
          <div>
            <p>Title font size</p>
            <SizeInput type="text" placeholder={cardStyleObject.fontSizeTitle} onChange={handleFontSizeTitle}/>
          </div>
          <div>
            <p>Title padding</p>
            <input type="text" placeholder={cardStyleObject.marginTitle} onChange={handleMarginTitle}/>
          </div>
          <div>
            <p>Title margin</p>
            <input type="text" placeholder={cardStyleObject.paddingTitle} onChange={handlePaddingTitle}/>
          </div>
          <div>
            <p>Description font size</p>
            <SizeInput type="text" placeholder={cardStyleObject.fontSizeDescription} onChange={handleFontSizeDescription}/>
          </div>
          <div>
            <p>Description padding</p>
            <input type="text" placeholder={cardStyleObject.marginDescription} onChange={handleMarginDescription}/>
          </div>
          <div>
            <p>Description margin</p>
            <input type="text" placeholder={cardStyleObject.paddingDescription} onChange={handlePaddingDescription}/>
          </div>
          <div>
            <p>Card border width</p>
            <SizeInput type="text" placeholder={cardStyleObject.borderCard.width} onChange={handleBorderCardWidth}/>
          </div>
          <div>
            <p>Card border style</p>
            <input type="text" placeholder={cardStyleObject.borderCard.style} onChange={handleBorderCardStyle}/>
          </div>
          <div>
            <p>Card border color</p>
            <input type="text" placeholder={cardStyleObject.borderCard.color} onChange={handleBorderCardColor}/>
            <input type='color' value={cardStyleObject.borderCard.color} onChange={handleBorderCardColor}/>
          </div>
          <div>
            <p>Image border width</p>
            <SizeInput type="text" placeholder={cardStyleObject.borderImage.width} onChange={handleBorderImageWidth}/>
          </div>
          <div>
            <p>Image border style</p>
            <input type="text" placeholder={cardStyleObject.borderImage.style} onChange={handleBorderImageStyle}/>
          </div>
          <div>
            <p>Image border color</p>
            <input type="text" placeholder={cardStyleObject.borderImage.color} onChange={handleBorderImageColor}/>
            <input type='color' value={cardStyleObject.borderImage.color} onChange={handleBorderImageColor}/>
          </div>
        </div>
      </CustomizationDiv>
      {/* Code snippet */}
      <div>
        <p>Basic structure</p>
        <pre>
          <code>{basicStructureSnippet}</code>
        </pre>
        <p>Array structure</p>
        <pre>
          <code>{collaborarorsArraySnippet}</code>
        </pre>
        <p>Code snippet</p>
        <pre>
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
    </div>
  )
}
  
export default App
