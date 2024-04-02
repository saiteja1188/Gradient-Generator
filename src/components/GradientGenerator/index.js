import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientAppContainer,
  GradientResponse,
  Heading,
  Paragraph,
  ListMenu,
  InputColor,
  InputLabel,
  ColorPickContainer,
  ColorInputAndLabelContainer,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeGradientId: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientDirection: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onGenerate = () => {
    const {activeGradientId, fromColorInput, toColorInput} = this.state
    this.setState({
      gradientDirection: `to ${activeGradientId}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientId: direction})
  }

  render() {
    const {
      fromColorInput,
      toColorInput,
      activeGradientId,
      gradientDirection,
    } = this.state

    return (
      <GradientAppContainer
        data-testid="gradientGenerator"
        gradientDirection={gradientDirection}
      >
        <GradientResponse>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <ListMenu>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
                isActive={activeGradientId === eachDirection.value}
              />
            ))}
          </ListMenu>
          <Paragraph>pick the Colors</Paragraph>
          <ColorPickContainer>
            <ColorInputAndLabelContainer>
              <InputLabel>{fromColorInput}</InputLabel>
              <InputColor
                type="color"
                value={fromColorInput}
                onChange={this.onChangeFromColor}
              />
            </ColorInputAndLabelContainer>
            <ColorInputAndLabelContainer>
              <InputLabel>{toColorInput}</InputLabel>
              <InputColor
                type="color"
                value={toColorInput}
                onChange={this.onChangeToColor}
              />
            </ColorInputAndLabelContainer>
          </ColorPickContainer>
          <GenerateButton type="button" onClick={this.onGenerate}>
            Generate
          </GenerateButton>
        </GradientResponse>
      </GradientAppContainer>
    )
  }
}

export default GradientGenerator
