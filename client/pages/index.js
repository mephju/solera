import Header from '../components/Header.js'
import {Component} from 'react'
import Main from '../components/Main.js'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import ProductItem from '../components/ProductItem.js'
import withRedux from 'next-redux-wrapper'
import {initStore, addProduct} from '../store/store.js'
import styled from 'styled-components'

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`
class ProductListPage extends Component {

  render() {

    const {props} = this

    return <Main>
      <div>
        <h1> Store Products </h1>
        <ProductList>
          {props.products.entries.map(product =>
            <ProductItem
              key={product.id}
              product={product}
              addProduct={this.props.addProduct}
            />
          )}
        </ProductList>
      </div>
    </Main>

  }

}

ProductListPage.propTypes = {
  products: PropTypes.object.isRequired,
}

ProductListPage.getInitialProps = async () => {
  const res  = await fetch('http://localhost:3000/api/products')
  const payload = await res.json()

  return { products: payload }
}


const mapDispatch = dispatch => ({
  addProduct(product) { dispatch(addProduct(product)) }
})


export default withRedux(initStore, null, mapDispatch)(ProductListPage)