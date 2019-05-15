import React from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]
class todoList extends React.Component{
   
    render(){
        return ( 
            <div style={{marginTop:'20px', marginLeft: '20px'}}>
               <Input placeholder="Basic usage" style={{width: 300,marginRight: 20}}/>
               <Button type="primary">提交</Button>
               <List
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item> {item}</List.Item>
                )}
                style={{width: 300}}/>
            </div>
        
        )
    }
}
export default todoList