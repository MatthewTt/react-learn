import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPersonAction } from '../../redux/actions/person'


class Person extends Component {
  constructor(props) {
    super(props)
    this.name = React.createRef()
    this.age = React.createRef()
  }

  handleAdd = () => {
    const name = this.name.current.value
    const age = this.age.current.value

    this.props.addPerson({ name, age, id: Date.now() })
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.name} placeholder="名称" />
        <input type="text" ref={this.age} placeholder="年龄" />
        <button onClick={this.handleAdd}>添加</button>
        {
          this.props.personList.map(item => {
            return <p key={item.id}>{item.name} {item.age}</p>
          })
        }
        <h4>PERSON PAGE >> 求和：{this.props.count}</h4>
      </div>
    )
  }
}


export default connect(
  (state) => ({ personList: state.personList, count: state.count }),
  { addPerson: addPersonAction }
)(Person)
