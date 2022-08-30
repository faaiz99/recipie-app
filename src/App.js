import React from 'react'
import Pages from './pages/Pages'
import Catergory from './components/Catergory'
import { Link, BrowserRouter } from 'react-router-dom'
import Search from './components/Search.jsx'
import styled from 'styled-components'
import {GiKnifeFork} from 'react-icons/gi'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork/>
          <Logo to ={'/'}>Declicious</Logo>

        </Nav>
        <Search />
        <Catergory />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
`
const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}
`

export default App