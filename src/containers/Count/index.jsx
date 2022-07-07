// 引入count ui组件
import CountUi from '../../components/AddCom'

import { connect } from 'react-redux'
import { createDecrementAction, createIncrementAction } from '../../redux/actions/count'

function mapStateToProps(state) {
  console.log(state, 999)
  return {
    count: state
  }
}
// 一般写法
/*function mapDispatchToProps(dispatch) {
  return {
    increment: (value) => {
      dispatch(createIncrementAction(value))
    },
    decrement: (value) => {
      dispatch(createDecrementAction(value))
    }
  }
}*/

// 简写形式
const mapDispatchToProps = {
  increment: createIncrementAction,
  decrement: createDecrementAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUi)

