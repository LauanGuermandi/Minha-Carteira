import React from 'react'

import logo from './../../assets/logo.svg'

import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp
} from 'react-icons/md'

import { 
  Container,
  Header,
  LogoImg,
  Title,
  MenuContainer,
  MenuItemLink
 } from './styles'

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logo} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink>
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink>
          <MdArrowUpward />
          Entradas
        </MenuItemLink>

        <MenuItemLink>
          <MdArrowDownward />
          Saídas
        </MenuItemLink>
        
        <MenuItemLink>
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>  
    </Container>
  )
}

export default Aside
