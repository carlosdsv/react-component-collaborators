import * as React from 'react';
import styled from 'styled-components';
import { cardStyleObjectI, collaborator } from '../interfaces';
import {ContainerDivStyle, 
  TextDivStyle, 
  TitlePStyle,
  DescriptionPStyle,
  ImgDivStyle,
  ImgStyle} from '../StyleComponents/CardsStyle';

export interface ICardCompleteProps {
  collaboratorObj?: collaborator,
  cardStyleObject: cardStyleObjectI,
  imagePosition: string,
}

const CardComplete:React.FC<ICardCompleteProps> = ({collaboratorObj = {}, cardStyleObject, imagePosition}) => {

  const ContainerDiv = styled.div`
    ${ContainerDivStyle(
      cardStyleObject.cardWidth, 
      cardStyleObject.cardHeight, 
      cardStyleObject.borderCard, 
      cardStyleObject.cardBackgroundColor, 
      imagePosition)}
  `
  const TextDiv = styled.div`
    ${TextDivStyle()}
  `
  const TitleP = styled.p`
    ${TitlePStyle(
      cardStyleObject.textAlign, 
      cardStyleObject.titleColor,
      cardStyleObject.fontSizeTitle,
      cardStyleObject.paddingTitle,
      cardStyleObject.marginTitle)}
  `
  const DescriptionP = styled.p`
    ${DescriptionPStyle(
      cardStyleObject.textAlign, 
      cardStyleObject.descriptionColor,
      cardStyleObject.fontSizeDescription,
      cardStyleObject.paddingDescription,
      cardStyleObject.marginDescription)}
  `
  const ImgDiv = styled.div`
  ${ImgDivStyle(imagePosition)}
  `
  const Img = styled.img`
  ${ImgStyle(
    cardStyleObject.imageFormat, 
    cardStyleObject.borderImage, 
    cardStyleObject.imageWidth, 
    cardStyleObject.imageHeight)}
  `
  return (
    <ContainerDiv>
      <ImgDiv>
        <Img src={collaboratorObj.image} alt=''/>
      </ImgDiv>
      <TextDiv>
        <TitleP>{collaboratorObj.title}</TitleP>
        {collaboratorObj.description? <DescriptionP>{collaboratorObj.description}</DescriptionP> : null}
      </TextDiv>    
    </ContainerDiv>
  );
}

export default CardComplete;