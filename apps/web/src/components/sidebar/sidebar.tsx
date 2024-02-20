import React from 'react'
import { SidebarStyle } from './sidebar.style'
import Image from 'next/image'

export function Sidebar() {
  return (
    <SidebarStyle.Container>
      <SidebarStyle.Logo>
        <Image
          src={require('../../../assets/icons/Icon.svg')}
          width={40}
          height={40}
          alt='icon'
        />
      </SidebarStyle.Logo>
      <SidebarStyle.Icon>
        <Image
          src={require('../../../assets/icons/Home.svg')}
          width={30}
          height={30}
          alt='icon'
        />
      </SidebarStyle.Icon>
      <SidebarStyle.Icon>
        <Image
          src={require('../../../assets/icons/Discount.svg')}
          width={34}
          height={34}
          alt='icon4'
        />
      </SidebarStyle.Icon>
      <SidebarStyle.Icon>
        <Image
          src={require('../../../assets/icons/Dashboard.svg')}
          width={30}
          height={30}
          alt='icon1'
        />
      </SidebarStyle.Icon>
      <SidebarStyle.Icon>
        <Image
          src={require('../../../assets/icons/Message.svg')}
          width={30}
          height={30}
          alt='icon2'
        />
      </SidebarStyle.Icon>
    </SidebarStyle.Container>
  )
}
