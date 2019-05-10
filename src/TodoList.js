import React from 'react';
import TodoItem from './todoItem.js'
import Text from './Text'
import './style.css'

class Todolist extends React.Component {

	constructor(props) {
		super(props)
		// 当组件的state或者props发生改变的时候，render函数就会重新执行
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnChange = this.handleBtnChange.bind(this)
	}
	render() {
		console.log('render')
		return (
			<div>
				<div>
					<label htmlFor="interArea">输入内容</label>
					<input id="interArea" className='input' value={this.state.inputValue} onChange={this.handleInputChange} />
					<button onClick={this.handleBtnChange}>提交</button></div>
				<ul>
					{
						this.getTodoItem()
					}
				</ul>
				<Text content={this.state.inputValue}></Text>
			</div>
		)
	}
	getTodoItem() {
		return this.state.list.map((item, index) => {
			return (
				<div key={index}>
					<TodoItem content={item}
						index={index}
						deleteItem={this.handleItemDelete.bind(this)} />
					{/*  <li key={index}  onClick={this.handleItemDelete.bind(this, index)}
						dangerouslySetInnerHTML={{__html: item}}></li> */}
				</div>
			)

		})
	}
	handleItemDelete(index) {
		// immutable语法
		// state不允许我们做任何改变
		this.setState((preState) => {
			const list = [...preState.list]
			list.splice(index, 1)
			return { list }
		})
	}
	handleBtnChange(e) {
		this.setState((preState) => ({
			list: [...preState.list, preState.inputValue],
			inputValue: ''
		}))
	}
	handleInputChange(e) {
		const value = e.target.value
		this.setState(() => ({
			inputValue: value
		}))
	}

}
export default Todolist;