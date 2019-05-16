import React from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
import store from './store'

class todoList extends React.Component{
     constructor(props){
         super(props);
         console.log(store.getState())
     }
    render(){
        return ( 
            <div style={{marginTop:'20px', marginLeft: '20px'}}>
               <Input placeholder="Basic usage" style={{width: 300,marginRight: 20}}/>
               <Button type="primary">提交</Button>
               <List
                bordered
                dataSource={[]}
                renderItem={item => (
                    <List.Item> {item}</List.Item>
                )}
                style={{width: 300}}/>
            </div>
        
        )
    }
}
export default todoList