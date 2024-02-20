import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #1F1D2B;
  width: 405px;
  height: 100vh;
`

const Content = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  flex: 1;
`
const Badges = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const Table = styled.table`
  width: 100%;
  text-align: left;

  td,th {
    padding-left: 10px;
  }

  th:first-child {
    width: 100%;
  }

`

const Note = styled.input`
  display: flex;
  flex: 1;
  border: none;
  outline: none;
  background-color: #332D3E;
  max-width: 100%;
  padding: 20px 20px 20px;
  border-radius: 8px;
  color: #FFF;
`

const DeleteButton = styled.button`
  border: none;
  background: transparent;
  border:1px solid #EA7C69;
  width: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Quantity = styled.input`
  text-align: center;
  border: none;
  background: transparent;
  width: 48px;
  height: 48px;
  background-color: #332D3E;
  border-radius: 8px;
  box-shadow: #393C49 0px 0px 0px 1px;
  color: #FFF;
  outline: none;
  input[type="number"]::-webkit-inner-spin-button, 
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`

export const CartStyles = {
  Container,
  Content,
  Badges,
  Table,
  Note,
  DeleteButton,
  Quantity
}