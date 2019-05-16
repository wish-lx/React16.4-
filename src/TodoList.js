import React from 'react'
import 'antd/dist/antd.css';
import store from './store'
import {typeItem, addItem, deleteItem} from './store/actionCreator'
// import {TYPE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM} from './store/actiontypes'
import TodoListUI from './todoListUI'
class todoList extends React.Component{
     constructor(props){
         super(props);
        //  获取store中的数据
         this.state = store.getState()
        //  console.log(store.getState())
         this.handleOnChange = this.handleOnChange.bind(this)
         this.handler = this.handler.bind(this)
         this.bClick = this.bClick.bind(this)
         this.delete = this.delete.bind(this)
        //  store中的数据发生变化便会调用subscribe方法
         store.subscribe(this.handler)
     }
    render(){
        return  (<TodoListUI
        inputValue = {this.state.inputValue}
        list ={this.state.list}
        handleOnChange ={this.handleOnChange}
        bClick ={this.bClick}
        delete = {this.delete}/>)
        
    }
    handleOnChange(e){
        // 创建action
        const action = typeItem(e.target.value)
        // 传送给state
        store.dispatch(action)
    }
    handler() {
        this.setState(store.getState())
    }
    bClick() {
        const action = addItem()
        store.dispatch(action)
    }
    delete(index) {
        const action = deleteItem(index)
        store.dispatch(action)
    }
}
export default todoList