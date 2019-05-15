import React from 'react'
import 'antd/dist/antd.css';
import { Input, Button } from 'antd'
class todoList extends React.Component{
    render(){
        return ( 
            <div style={{marginTop:'20px', marginLeft: '20px'}}>
               <Input placeholder="Basic usage" style={{width: 300,marginRight: 20}}/>
               <Button type="primary">提交</Button>
            </div>
        
        )
    }
}
export default todoList