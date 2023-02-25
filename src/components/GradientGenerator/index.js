import {Component} from 'react'

import {
  GradientContainer,
  MainHeading,
  ChooseParagraph,
  ListContainer,
  InputContainer,
  Input,
  GenerateButton,
  TextContainer,
  ColorParagraph,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    linearGradientBackground: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
    activeGradientValue: gradientDirectionsList[0].value,
    fromColor: '#8ae323',
    toColor: '#014f7b',
  }

  onChangeButton = value => {
    this.setState({activeGradientValue: value})
  }

  onChangeFromColorInput = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeToColorInput = event => {
    this.setState({toColor: event.target.value})
  }

  onGenerateColor = () => {
    const {activeGradientValue, fromColor, toColor} = this.state
    this.setState({
      linearGradientBackground: `to ${activeGradientValue},${fromColor},${toColor}`,
    })
  }

  render() {
    const {
      linearGradientBackground,
      activeGradientValue,
      fromColor,
      toColor,
    } = this.state
    console.log(linearGradientBackground)
    return (
      <GradientContainer
        bgColor={linearGradientBackground}
        data-testid="gradientGenerator"
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <ChooseParagraph>Choose Direction</ChooseParagraph>
        <ListContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              gradientDetails={eachItem}
              onChangeButton={this.onChangeButton}
              isActive={eachItem.value === activeGradientValue}
            />
          ))}
        </ListContainer>
        <ChooseParagraph>Pick the Colors</ChooseParagraph>
        <InputContainer>
          <TextContainer>
            <ColorParagraph>{fromColor}</ColorParagraph>
            <Input
              type="color"
              value={fromColor}
              onChange={this.onChangeFromColorInput}
            />
          </TextContainer>
          <TextContainer>
            <ColorParagraph>{toColor}</ColorParagraph>
            <Input
              type="color"
              value={toColor}
              onChange={this.onChangeToColorInput}
            />
          </TextContainer>
        </InputContainer>
        <GenerateButton type="button" onClick={this.onGenerateColor}>
          Generate
        </GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
