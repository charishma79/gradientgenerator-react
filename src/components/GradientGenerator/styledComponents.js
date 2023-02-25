import styled from 'styled-components'

// import GradientGenerator from '.'

// Style your elements here
export const GradientContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-image: linear-gradient(${props => props.bgColor});
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainHeading = styled.h1`
  color: #ededed;
  font-family: Roboto;
  font-size: 30px;
  font-weight: 600;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`

export const ChooseParagraph = styled.p`
  color: #ededed;
  font-family: Roboto;
  font-size: 17px;
`
export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

export const Input = styled.input`
  height: 45px;
  width: 110px;
  margin-right: 45px;
  border: none;
  outline: none;
  background-color: transparent;
`

export const GenerateButton = styled.button`
  height: 40px;
  padding: 10px;
  width: 130px;
  background-color: #00c9b7;
  border: none;
  cursor: pointer;
  outline: none;
  color: #1e293b;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 600;
  border-radius: 5px;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ColorParagraph = styled.p`
  color: #ededed;
  font-family: Roboto;
  font-size: 17px;
  margin-left: 20px;
`
