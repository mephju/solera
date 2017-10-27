import styled from 'styled-components'
import colors from '../../colors.js'

const StyledRemoveButton = styled.button`
  border-radius: 5px;
  color: white;
  background: ${colors.pink};
  border: 2px solid ${colors.pinkDarken3};
  font-weight: bold;
  line-height: 1.4;
  cursor: pointer;
`

const RemoveButton = props => {
  return <StyledRemoveButton onClick={props.onClick}>
    x
  </StyledRemoveButton>
}
export default RemoveButton