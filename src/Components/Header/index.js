import React from 'react'
import { FaTicketAlt } from 'react-icons/fa'
import { Menu, H1 } from './styles.js'

const Header = () => {
  return (
    <Menu>
      <FaTicketAlt color="var(--primary-color)" size={90} />
      <H1>Movies</H1>
    </Menu>
  )
}

export default Header
