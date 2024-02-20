import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  height: 100vh;
  width: 104px;
  background-color: #1F1D2B;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const Logo = styled.div`
  display: flex;
  background-color: rgba(235,150,106, 0.26);
  border-radius: 12px;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
`

const Icon = styled.div<{isSelected?: boolean}>`
  background-color: ${props => props.isSelected ? "#EA7C69" : "transparent" };
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: ${props => props.isSelected ? "rgba(235,150,106, 0.35) 0px 7px 29px 0px" : "transparent" };
`

export const SidebarStyle = {
  Container,
  Logo,
  Icon
}