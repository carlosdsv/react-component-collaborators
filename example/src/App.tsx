import { CollaboratorsList } from 'react-component-collaborators'
import { CardComplete } from 'react-component-collaborators'
import { CardMinimal } from 'react-component-collaborators'

import React from 'react'
import { useState } from 'react'
import {
  AppDiv,
  AppTitleDiv,
  ComponentDisplayDiv,
  CustomizationDiv
} from './style/TypeCardStyle'
import collaboratorsArray from './mock/collaboratorsArray'
import { cardStyleObjectI, listStyleObjectI } from './interfaces'
import {
  Code,
  CodeDiv,
  CodeSnippetDiv,
  SnippetDiv
} from './style/CodeSnippetTyle'
import TypeOfCard from './components/TypeOfCard'
import ContainerProperties from './components/ContainerProperties'
import CardProperties from './components/CardProperties'
import TextProperties from './components/TextProperties'
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

const App: React.FC = () => {
  // Card component
  const [cardComponent, setCardComponent] = useState<string>('complete')
  const [imagePosition, setImagePosition] = useState<string>('left')

  // List state
  const [listStyleObject, setListStyleObject] = useState<listStyleObjectI>({
    listWidth: '700px',
    listHeight: '400px',
    direction: 'vertical',
    listBackgroundColor: '#FFF'
  })

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
  })

  // Code snippet
  const collaborarorsArraySnippet: string = `
  collaboratorsArray = [{
    image: 'mandatory url',
    title: 'mandatory title',
    description: 'optional description'
  }, {}, ...];
  `
  const basicStructureSnippet: string = `
  <CollaboratorsList collaboratorsArray={collaboratorsArray} listStyleObject={listStyleObject}>
    ${
      cardComponent === 'complete' ? '<CardComplete' : '<CardMinimal'
    } cardStyleObject={cardStyleObject} imagePosition={imagePosition}/>
  </CollaboratorsList>
  `
  const imagePositionSnippet: string = `
  const imagePosition = '${imagePosition}';
  `
  const listStyleObjectSnippet: string = `
  const listStyleObject = {
    listWidth: '${listStyleObject.listWidth}',
    listHeight: '${listStyleObject.listHeight}', 
    direction: '${listStyleObject.direction}',
    listBackgroundColor: '${listStyleObject.listBackgroundColor}'
  };
  `

  const cardStyleObjectSnippet: string = `
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
  };
  `

  return (
    <AppDiv>
      <AppTitleDiv>
        <h1>React Customizable Collaborators Component</h1>
      </AppTitleDiv>
      <ComponentDisplayDiv>
        <CollaboratorsList
          collaboratorsArray={collaboratorsArray}
          listStyleObject={listStyleObject}
        >
          {cardComponent === 'complete' ? (
            <CardComplete
              cardStyleObject={cardStyleObject}
              imagePosition={imagePosition}
            />
          ) : cardComponent === 'minimal' ? (
            <CardMinimal
              cardStyleObject={cardStyleObject}
              imagePosition={imagePosition}
            />
          ) : (
            <CardComplete
              cardStyleObject={cardStyleObject}
              imagePosition={imagePosition}
            />
          )}
        </CollaboratorsList>
      </ComponentDisplayDiv>
      <CustomizationDiv>
        <TypeOfCard
          setCardComponent={setCardComponent}
          setImagePosition={setImagePosition}
        />

        <ContainerProperties
          setListStyleObject={setListStyleObject}
          listStyleObject={listStyleObject}
        />

        <CardProperties
          cardStyleObject={cardStyleObject}
          setCardStyleObject={setCardStyleObject}
          borderCard={borderCard}
          borderImage={borderImage}
        />

        <TextProperties
          setCardStyleObject={setCardStyleObject}
          cardStyleObject={cardStyleObject}
          cardComponent={cardComponent}
        />
      </CustomizationDiv>
      <CodeSnippetDiv>
        <SnippetDiv>
          <p>
            In order for this component to work, your collaborators array should
            look like this:
          </p>
        </SnippetDiv>
        <CodeDiv>
          <pre>
            <Code>{collaborarorsArraySnippet}</Code>
          </pre>
        </CodeDiv>
        <SnippetDiv>
          <p>
            Once you are happy with the result, just copy and paste the
            following variables with the styles:
          </p>
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
        <SnippetDiv>
          <p>I hope you find this component useful!</p>
        </SnippetDiv>
      </CodeSnippetDiv>
    </AppDiv>
  )
}

export default App
