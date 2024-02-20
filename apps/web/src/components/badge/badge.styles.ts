import styled from "styled-components"

const Container = styled.button<{ isSelected?: boolean }>`
  display: flex;
  padding: 10px;
  background-color: ${props => props.isSelected ? '#EA7C69' : 'transparent'};
  color: ${props => props.isSelected ? '#FFF' : '#EA7C69'};
  border: ${props => props.isSelected ? 'none' : '1px solid #393C49'};
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  align-items: center;
`

export const BadgeStyles = {
  Container
}