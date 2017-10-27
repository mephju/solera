import Link from 'next/link'
import Basket from './Basket/Basket.js'
import styled from 'styled-components'
import colors from '../colors.js'

const StyledHeader = styled.div`
  background: ${colors.pinkDarken2};
  padding: 20px;
  color: white;
  font-style: italic;
  display: flex;
`

const Logo = styled.span`
  font-size: 20px;
  font-weight: bold;
  flex-grow: 1;
`

const Header = () => <StyledHeader>
  <Logo> # The Basket App </Logo>
  I want to use this header later... maybe...
</StyledHeader>


export default Header