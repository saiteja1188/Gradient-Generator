// Style your elements here

import styled from 'styled-components/macro'

export const ListItem = styled.li`
  list-style-type: none;
`
export const CustomButton = styled.button`
  padding: 10px 30px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  font-family: roboto;
  font-size: 16px;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')}
  font-weight: 500;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
