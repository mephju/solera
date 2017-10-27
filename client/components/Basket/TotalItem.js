import {Component} from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import colors from '../../colors.js'

const Row = styled.tr`
  background: ${colors.pinkLighten4};
`

class TotalItem extends Component {

  render() {

    const {props: {total}} = this

    return <Row onClick={this.removeProduct}>
      <td colSpan='3'> Total </td>
      <td colSpan='3'> {total.net} </td>

     </Row>
  }

}

TotalItem.propTypes = {
  total: PropTypes.object.isRequired,
}

export default TotalItem