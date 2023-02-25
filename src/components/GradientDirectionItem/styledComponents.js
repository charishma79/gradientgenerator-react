// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  padding: 10px;
  margin-right: 15px;
`

export const CustomButton = styled.button`
  background-color: ${props => (props.isActive ? '#ededed' : '#ffffff79')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  height: 40px;
  padding: 10px;
  width: 100px;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  color: #1e293b;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
`
