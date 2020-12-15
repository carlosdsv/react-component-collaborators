import styled from 'styled-components'

export const AppDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #ecf0f5;
  p {
    color: #000;
    margin: 0.5rem 0rem;
  }
`
export const AppTitleDiv = styled.div`
  width: 100vw;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ComponentDisplayDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CustomizationDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0px;
`
export const CardTypeDiv = styled.div`
  width: 20%;
  height: 250px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-betwin;
  padding: 1% 1%;
  margin-left: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #6fbdfa;
`
export const CardTypeContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitleP = styled.p`
  color: #000;
  font-weight: bolder;
`
export const CardTypeButtonDiv = styled.p`
  display: flex;
  flex-direction: row;
`
export const Button = styled.button`
  height: 25px;
  width: 80px;
  align-text: center;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #666666;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
`
export const SizeInput = styled.input`
  height: 25px;
  width: 50px;
  margin-left: 10px;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #666666;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
`
export const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`
