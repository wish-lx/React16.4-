import React from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
import store from './store'

class todoList extends React.Component{
     constructor(props){
         super(props);
        //  获取store中的数据
         this.state = store.getState()
        //  console.log(store.getState())
         this.handleOnChange = this.handleOnChange.bind(this)
         this.handler = this.handler.bind(this)
         this.bClick = this.bClick.bind(this)
        //  store中的数据发生变化便会调用subscribe方法
         store.subscribe(this.handler)
     }
    render(){
        return ( 
            <div style={{marginTop:'20px', marginLeft: '20px'}}>
               <Input value={this.state.inputValue} 
               placeholder="Basic usage" 
               style={{width: 300,marginRight: 20}}
               onChange={this.handleOnChange}
               />
               <Button type="primary" onClick={this.bClick}>提交</Button>
               <List
                bordered
                dataSource={this.state.list}
                renderItem={item => (
                    <List.Item> {item}</List.Item>
                )}
                style={{width: 300}}/>
            </div>
        
        )
    }
    handleOnChange(e){
        // 创建action
        const action = {
            type: 'type-input-value',
            value: e.target.value
        }
        // 传送给state
        store.dispatch(action)
    }
    handler() {
        this.setState(store.getState())
    }
    bClick() {
        const action = {
            type: 'add-item'
        }
        store.dispatch(action)
    }
}
export default todoList