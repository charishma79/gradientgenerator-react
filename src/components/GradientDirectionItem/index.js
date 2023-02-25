// Write your code here
import {ListItem, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, onChangeButton, isActive} = props
  const {displayText, value} = gradientDetails

  const onClickButton = () => {
    onChangeButton(value)
  }

  return (
    <ListItem>
      <CustomButton type="button" onClick={onClickButton} isActive={isActive}>
        {displayText}
      </CustomButton>
    </ListItem>
  )
}

export default GradientDirectionItem
