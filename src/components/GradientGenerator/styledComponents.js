// Style your elements here
import styled from 'styled-components/macro'

export const GradientAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientDirection});
`
export const GradientResponse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: roboto;
  font-size: 24px;
  font-weight: 500;
`
export const Paragraph = styled.p`
  color: #ffffff;
  font-family: roboto;
  font-size: 18px;
`

export const ListMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`
export const InputColor = styled.input`
  background-color: transparent;
  margin: 10px;
  outline: none;
  border: none;
  width: 80px;
  height: 40px;
  cursor: pointer;
`
export const InputLabel = styled.p`
  font-family: roboto;
  margin: 10px;
`
export const ColorPickContainer = styled.div`
  display: flex;
`
export const ColorInputAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  border-radius: 10px;
  padding: 8px 15px;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
`
