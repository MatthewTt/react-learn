import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import React from 'react'
import { Link, NavLink, Route, Routes, Navigate, Outlet, useSearchParams } from 'react-router-dom'
import AddCom from './containers/Count'
import store from './redux/store'
import Person from './components/Person'

class App extends React.Component {
  state = {
    list: [
      { id: 1, title: '吃饭', completed: false },
      { id: 2, title: '睡觉', completed: true }
    ]
  }

  addItem = (todoObj) => {
    this.state.list.unshift(todoObj)
    this.setState({
      list: this.state.list
    })
  }

  updateItem = (id, completed) => {
    const finer = this.state.list.findIndex(item => item.id === id)
    this.state.list[finer].completed = completed
    this.setState({
      list: this.state.list
    })
  }

  deleteItem = (id) => {
    const { list } = this.state
    const finer = list.filter(item => item.id !== id)
    this.setState({
      list: finer
    })
  }

  clearDone = () => {
    const { list } = this.state
    const finer = list.filter(item => !item.completed)
    this.setState({
      list: finer
    })
  }


  render() {
    const activeClassName = 'active-test'
    return (
      <div className="todo-container">
        <Header addItem={this.addItem} />
        <List list={this.state.list} updateItem={this.updateItem} deleteItem={this.deleteItem} />
        <Footer list={this.state.list} clearDone={this.clearDone} />
        <NavLink className={({ isActive }) =>
          isActive ? activeClassName : undefined
        } to="/router">路由测试</NavLink>
        <Outlet />

        <NavLink to="/test">test</NavLink>
        <NavLink to="/about/a/b">test</NavLink>

        <Routes>
          <Route path="/router/*" element={<Invoice />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/about/*" element={<About />}></Route>
          <Route index element={<Navigate to="/router" />} />
        </Routes>

        <AddCom />
        <Person />
      </div>
    )
  }

}

function Invoice() {
  return (
    <div>
      <Link to="message">Message</Link>
      <Link to="news">News</Link>

      <Routes>
        <Route path="message" element={<Message />} />
        <Route path="news" element={<News />} />
      </Routes>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

function Test() {
  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}

function Message() {
  return (
    <div>
      <h1>Message 自组件捏</h1>
    </div>
  )
}

function News() {
  return (
    <div>
      <h1>News 自组件捏</h1>
    </div>
  )
}

export default App
