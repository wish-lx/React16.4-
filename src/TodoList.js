import React from 'react';

class Todolist extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }
  render() {
    return  (
      <div>
        <div><input value={this.state.inputValue}  onChange={this.handleInputChange.bind(this)}/>
        <button onClick = {this.handleBtnChange.bind(this)}>提交</button></div>
        <ul>
        {
          this.state.list.map((item, index)=> {
            return <li key={index}>{item}</li>
          })
        }
        </ul>
      </div>
    )
  }
  handleBtnChange(e) {
    console.log('p')
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
    
  }
  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  } 
   
}
export default Todolist;