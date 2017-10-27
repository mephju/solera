import {Component} from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import RemoveButton from './RemoveButton.js'

const AddButton = styled.button`
  border-radius: 5px;
  background: pink;
  color: white;
  font-weight: bold;
  padding: 5px 20px;
  margin-right: 20px;
  cursor: pointer;
`

const Row = styled.tr`
`

class Basket extends Component {

  constructor(props) {
    super(props)

    this.removeProduct= this.removeProduct.bind(this)
  }

  removeProduct() {
    this.props.removeProduct(this.props.product)
  }

  render() {

    const {props: {product}} = this

    return <Row onClick={this.removeProduct}>
      <td> {product.name} </td>
      <td> {product.amount} </td>
      <td> {product.price} </td>
      <td> {product.price * product.amount} </td>
      <td> {product.discount} </td>
      <td>
        <RemoveButton onClick={this.removeProduct} />
      </td>

     </Row>
  }

}

Basket.propTypes = {
  removeProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
}

export default Basket