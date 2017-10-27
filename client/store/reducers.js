const addDiscount = (product) => {

  const discountApplications = parseInt(product.amount / 3)

  const discount = product.id === 'papaya'
  ? discountApplications * product.price
  : 0
  product.discount = discount
  return product
}

const getTotal = basket => {
  const sums = basket.reduce((acc, item) => ({
    gross: acc.gross + item.amount * item.price,
    discount: acc.discount + item.discount,
  }), {gross: 0, discount: 0})

  return {...sums, net: sums.gross - sums.discount}
}


const addProductReducer = (product, basket) => {
  const item = basket.find(item => item.id === product.id) || {...product, amount: 0 }
  const amount = item.amount + 1
  const newItem = {...item, amount }

  addDiscount(newItem)

  // not yet present in basket?
  if(amount === 1) return [...basket, newItem]

  return basket.map(item => item.id === product.id ? newItem : item)
}

const removeProductReducer = (product, basket) => {
  let newBasket = null

  // does product need to be removed?
  if(product.amount === 1) {
    newBasket = basket.filter(i => i.id !== product.id)
  } else {
    const amount = product.amount - 1
    const newItem = { ...product, amount }
    addDiscount(newItem)
    newBasket = basket.map(i => i.id !== product.id ? i : newItem)
  }

  return newBasket
}

export default {
  addProduct(state, action) {
    const {product} = action
    const basket = addProductReducer(product, state.basket)
    return { basket, total: getTotal(basket)  }

  },
  removeProduct(state, action) {
    const basket = removeProductReducer(action.product, state.basket)
    return { basket, total: getTotal(basket) }
  }
}