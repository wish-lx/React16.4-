import React from 'react';

class Todolist extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'jkl',
      value: []
    }
  }
  render() {
    return  (
      <div>
        <div><input value={this.state.inputValue}  onChange={this.handleInputChange.bind(this)}/><button>提交</button></div>
        <ul>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
      </div>
    )
  }
  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  } 
   
}
export default Todolist;