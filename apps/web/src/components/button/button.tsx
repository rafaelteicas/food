import React from 'react'
import { ButtonStyle } from './button.styles'


type Props = {
  title: string
  onClick?: () => void
}

export function Button({title, onClick}: Props) {
  return (
    <ButtonStyle.Container onClick={onClick}>
      {title}
    </ButtonStyle.Container>
  )
}
