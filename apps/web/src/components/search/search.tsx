import React from 'react'
import { SearchStyles } from './search.styles'
import Image from 'next/image'

export function Search() {
  return (
    <SearchStyles.Container placeholder='Search for food'>
      <Image
        src={require('../../../assets/icons/Search.svg')}
        width={20}
        height={20}
        alt='Search'
      />
      <SearchStyles.Input placeholder='Search...' />
    </SearchStyles.Container>
  )
}
