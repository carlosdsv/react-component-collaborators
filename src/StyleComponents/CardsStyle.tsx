import { borderI } from "../interfaces";

export const ContainerDivStyle = (
  cardWidth: string = '300px', 
  cardHeight: string = '150px',
  borderCard: borderI,
  cardBackgroundColor: string = '#7EE8FA',
  imagePosition: string):string => {
  return `
  width: ${cardWidth};
  height: ${cardHeight};
  background-color: ${cardBackgroundColor};
  display: flex;
  flex-direction: ${
    imagePosition === 'left'? 'row': 
    imagePosition === 'right'? 'row-reverse':
    imagePosition === 'top'? 'column': 
    imagePosition === 'bottom'? 'column-reverse': 
    'row'};
  align-items: center;
  justify-content: space-around;
  margin: 20px;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 5px;
  border: ${borderCard.width} ${borderCard.style} ${borderCard.color};
  `
};

export const TextDivStyle = ():string => {
  return `
  width: 65%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
  `
};

export const TitlePStyle = (
  textAlign: string = 'left', 
  titleColor: string = '#000',
  fontSizeTitle: string = '100%',
  paddingTitle: string = '0px',
  marginTitle: string = '0px'):string => {
  return `
  color: ${titleColor};
  font-weight: bolder;
  text-align: ${textAlign};
  font-size: ${fontSizeTitle};
  padding: ${paddingTitle};
  margin: ${marginTitle};
  `
};

export const DescriptionPStyle = (
  textAlign: string = 'left', 
  descriptionColor: string = '#000',
  fontSizeDescription: string = '80%',
  paddingDescription: string = '0px',
  marginDescription: string = '0px'
  ):string => {
  return `
  color: ${descriptionColor};
  text-align: ${textAlign};
  font-size: ${fontSizeDescription};
  padding: ${paddingDescription};
  margin: ${marginDescription};
  `
};

export const ImgDivStyle = (imagePosition: string):string => {
  return `
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 35%;
  height: 85%;
  margin: ${
    (imagePosition === 'left' || imagePosition === 'right')? '10px': 
    (imagePosition === 'top' || imagePosition === 'bottom')? '0px': 
    '10px'};
  `
};

export const ImgStyle = (
  imageFormat: string = 'circle',
  borderImage: borderI,
  imageWidth: string = '100px',
  imageHeight: string = '100px'):string => {
  return `
  width: ${imageWidth};
  height: ${imageHeight};
  object-fit: cover;
  border-radius: ${imageFormat === 'circle' ? '50%' : imageFormat === 'square' ? '0%' : '50%'};
  border: ${borderImage.width} ${borderImage.style} ${borderImage.color};
  `
};