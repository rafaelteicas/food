import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #332D3E;
  padding-left: 10px;
  max-width: 220px;
  height: 48px;
  border-radius: 8px;
  gap: 10px;
`

const Input = styled.input`
  border: none;
  background: transparent;
  outline: none;
  color: #ABBBC2;
`

export const SearchStyles = {
  Container,
  Input
}