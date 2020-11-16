export interface collaborator {
  image: string;
  title: string;
  description?: string
};

export interface listStyleObjectI {
  listWidth: string;
  listHeight: string;
  direction: string;
  listBackgroundColor: string
};

export interface borderI {
  width: string;
  style: string;
  color: string
} 

export interface cardStyleObjectI {
  cardWidth: string;
  cardHeight: string;
  cardBackgroundColor: string;
  borderCard: borderI;
  textAlign: string;
  titleColor: string;
  descriptionColor: string
  imageFormat: string;
  borderImage: borderI;
  imageWidth: string,
  imageHeight: string,
  fontSizeTitle: string,
  paddingTitle: string,
  marginTitle: string,
  fontSizeDescription: string,
  paddingDescription: string,
  marginDescription: string
};