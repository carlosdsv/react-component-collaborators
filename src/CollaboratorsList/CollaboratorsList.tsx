import * as React from 'react'
import styled from 'styled-components'
import { collaborator, listStyleObjectI } from '../interfaces'
import { ListContainerDivStyle } from '../StyleComponents/ListStyle'

interface ICollaboratorsListProps {
  collaboratorsArray: collaborator[]
  listStyleObject: listStyleObjectI
  children: JSX.Element
}

const CollaboratorsList: React.FC<ICollaboratorsListProps> = ({
  listStyleObject,
  collaboratorsArray,
  children
}) => {
  const ListContainerDiv = styled.div`
    ${ListContainerDivStyle(
      listStyleObject.listWidth,
      listStyleObject.listHeight,
      listStyleObject.direction,
      listStyleObject.listBackgroundColor
    )}
  `
  return (
    <ListContainerDiv>
      {collaboratorsArray.map((collaboratorObj: collaborator) =>
        React.cloneElement(children, { collaboratorObj: collaboratorObj })
      )}
    </ListContainerDiv>
  )
}

export default CollaboratorsList
