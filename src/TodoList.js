import React from 'react';
import './style.css'
import TodoItem from './todoItem.js'
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
        <div>
          <label htmlFor="interArea">输入内容</label>
          <input id="interArea" className='input' value={this.state.inputValue}  onChange={this.handleInputChange.bind(this)}/>
        <button onClick = {this.handleBtnChange.bind(this)}>提交</button></div>
        <ul>
        {
          this.state.list.map((item, index)=> {

						return (
                <div>
										<TodoItem  content = {item}/>
								{/*  <li key={index}  onClick={this.handleItemDelete.bind(this, index)}
								 dangerouslySetInnerHTML={{__html: item}}></li> */}
								</div>
						)
					
          })  
        }
        </ul> 
      </div>
    )
  }
  handleItemDelete(index){
    // immutable语法
    // state不允许我们做任何改变

    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  handleBtnChange(e) {
    console.log('p')
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
    
  }
  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  } 
   
}
export default Todolist;