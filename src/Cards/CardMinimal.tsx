import * as React from 'react'
import styled from 'styled-components'
import { cardStyleObjectI, collaborator } from '../interfaces'
import {
  ContainerDivStyle,
  TextDivStyle,
  TitlePStyle,
  ImgDivStyle,
  ImgStyle
} from '../StyleComponents/CardsStyle'

export interface ICardMinimalProps {
  collaboratorObj?: collaborator
  cardStyleObject: cardStyleObjectI
  imagePosition: string
}

const CardMinimal: React.FC<ICardMinimalProps> = ({
  collaboratorObj = {
    image:
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=639&q=80',
    title: 'Daenerys Targaryen',
    description: 'Learning to haul'
  },
  cardStyleObject,
  imagePosition
}) => {
  const ContainerDiv = styled.div`
    ${ContainerDivStyle(
      cardStyleObject.cardWidth,
      cardStyleObject.cardHeight,
      cardStyleObject.borderCard,
      cardStyleObject.cardBackgroundColor,
      imagePosition
    )}
  `
  const ImgDiv = styled.div`
    ${ImgDivStyle(imagePosition)}
  `
  const Img = styled.img`
    ${ImgStyle(
      cardStyleObject.imageFormat,
      cardStyleObject.borderImage,
      cardStyleObject.imageWidth,
      cardStyleObject.imageHeight
    )}
  `
  const TextDiv = styled.div`
    ${TextDivStyle()}
  `
  const TitleP = styled.p`
    ${TitlePStyle(cardStyleObject.textAlign, cardStyleObject.titleColor)}
  `
  return (
    <ContainerDiv>
      <ImgDiv>
        <Img src={collaboratorObj.image} alt='' />
      </ImgDiv>
      <TextDiv>
        <TitleP>{collaboratorObj.title}</TitleP>
        {/* <DescriptionP>{collaboratorObj.description}</DescriptionP> */}
      </TextDiv>
    </ContainerDiv>
  )
}

export default CardMinimal
