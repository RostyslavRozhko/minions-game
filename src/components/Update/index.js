import React, { Component } from 'react'

export default class Topbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.fetchItems()
  }

  fetchItems = () => {
    fetch(`https://minions-game.herokuapp.com/api/allleaders`)
    .then(res => res.json())
    .then(res => {
      this.setState(() => ({items: res}))
  })
  }

  update = (key) => {
    const leader = this.state.items[key]
    fetch(`https://minions-game.herokuapp.com/api/leaders/${leader.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({percent: leader.percent})
    })
    .then(res => res.json())
    .then(res => res)

  }

  changePercent = (evt, key) => {
    evt.persist()
    const items = this.state.items
    items[key].percent = evt.target.value * 10
    this.setState(() => ({
      items
    }))
  }

  render() {
    const {items} = this.state
    return (
      <table>
        <tbody>
          {items.map((value, key) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td><input type="text" value={value.percent} onChange={evt => this.changePercent(evt, key)}/></td>
              <td><button onClick={() => this.update(key)}>update</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    );
  }
}
