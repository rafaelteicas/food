import React from 'react'
import { BadgeStyles } from './badge.styles'

type Props = {
  title: string
  isSelected?: boolean
}

export function Badge({title, isSelected}: Props) {
  return (
    <BadgeStyles.Container isSelected={isSelected}>
      {title}
    </BadgeStyles.Container>
  )
}
