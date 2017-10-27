import {Component} from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import colors from '../colors.js'

const AddButton = styled.button`
  border-radius: 5px;
  border: 2px solid ${colors.pinkDarken3};
  background: ${colors.pink};
  color: white;
  font-weight: bold;
  padding: 5px 20px;
  margin-right: 20px;
  cursor: pointer;

`

const Li = styled.li`
  margin-bottom: 5px;


`

class ProductItem extends Component {

  constructor(props) {
    super(props)

    this.addProduct = this.addProduct.bind(this)
  }

  addProduct() {
    this.props.addProduct(this.props.product)
  }

  render() {

    const {props: {product}} = this

    return <Li key={product.id}>
      <AddButton onClick={this.addProduct}> Buy </AddButton>
      <span> {product.name} </span>
      <span> {product.price} </span>
     </Li>
  }

}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
}

export default ProductItem