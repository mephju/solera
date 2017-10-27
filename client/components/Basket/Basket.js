import {Component} from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import {removeProduct, initStore} from '../../store/store.js'
import withRedux from 'next-redux-wrapper'
import BasketItem from './BasketItem.js'
import connect from 'react-redux/lib/connect/connect.js'
import TotalItem from './TotalItem.js'
import SumItem from './SumItem.js'
import colors from '../../colors.js'

const Table = styled.table`
  list-style: none;
  background: ${colors.pinkLighten5};
  padding: 20px;
`

const Column = styled.th`
  padding: 0 20px;
  padding-left: 0;
  &:last-child {
    padding-right: 0;
  }

`
const EmptyItem = styled.span`
  font-size: 20px;
  font-style: italic;
  margin: 20px 0px;
`

const StyledBasket = styled.div`
  margin-top: 50px;
`
const Basket = (props) => {

  const {basket, total} = props

  return <StyledBasket>
    <h1> Basket </h1>
    <Table>
      <thead>
        <tr>
          <Column> Product </Column>
          <Column> Amount </Column>
          <Column> Price </Column>
          <Column> Total </Column>
          <Column> Discount </Column>
          <Column> Remove Item </Column>
        </tr>
      </thead>
      <tbody>
        {basket.length === 0 && <tr>
            <td colSpan='6'>
              <EmptyItem> Basket is empty </EmptyItem>
            </td>
          </tr>
        }
        {basket.map((product, index) =>
          <BasketItem
            key={product.id}
            product={product}
            removeProduct={props.removeProduct}
          />
        )}
        <SumItem total={total} />
        <TotalItem total={total} />
      </tbody>
    </Table>
  </StyledBasket>
}

Basket.propTypes = {
  basket: PropTypes.array.isRequired,
  removeProduct: PropTypes.func.isRequired,
}

const mapDispatch = dispatch => ({
  removeProduct(product) { dispatch(removeProduct(product)) }
})

const mapState = (state, props) => ({
  basket: state.basket,
  total: state.total,
})

export default connect(
  mapState,
  mapDispatch
)(Basket)