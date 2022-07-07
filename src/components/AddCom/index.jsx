import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createDecrementAction, createIncrementAction } from '../../redux/actions/count'

class Count extends Component {

  /**
   * ➕
   */
  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value)
  }
  /**
   * ➖
   */
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value)
  }
  /**
   * 奇数➕
   */
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value)
    }
  }
  /**
   * 异步
   */
  incrementAsync = () => {
    // const { value } = this.selectNumber
    // store.dispatch(createIncrementAsyncAction(value))
  }


  render() {
    return (
      <div>
        <h2>人数：{this.props.personLength}</h2>
        <h4>当前求和为：{this.props.count}</h4>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

export default connect(
  state => ({ count: state.count, personLength: state.personList.length }),
  { increment: createIncrementAction, decrement: createDecrementAction }
)(Count)
