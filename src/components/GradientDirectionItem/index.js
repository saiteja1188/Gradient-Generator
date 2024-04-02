// Write your code here

import {ListItem, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, clickGradientDirectionItem} = props
  const {displayText, value} = directionDetails
  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }
  return (
    <ListItem>
      <CustomButton
        type="button"
        isActive={isActive}
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </CustomButton>
    </ListItem>
  )
}

export default GradientDirectionItem
