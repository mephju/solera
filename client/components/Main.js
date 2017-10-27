import Header from './Header'
import { connect } from 'react-redux'
import Basket from './Basket/Basket.js'
import styled from 'styled-components'


const Page = styled.div`
  margin: 0 20px;
  padding: 0 20px;
`

const Main = (props) => <Page>
  <Header />
  {props.children}
  <Basket />
</Page>


export default connect(state => state)(Main)