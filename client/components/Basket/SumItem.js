import {Component} from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import colors from '../../colors.js'

const Row = styled.tr`
  margin-top: 20px;
  background: ${colors.pinkLighten4};

`

class SumItem extends Component {

  render() {

    const {props: {total}} = this

    return <Row onClick={this.removeProduct}>
      <td colSpan='3'> Sum </td>
      <td> {total.gross} </td>
      <td colSpan='2'> {total.discount} </td>

     </Row>
  }

}

SumItem.propTypes = {
  total: PropTypes.object.isRequired,
}

export default SumItem