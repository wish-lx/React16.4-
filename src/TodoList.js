import React from 'react'
import 'antd/dist/antd.css';
import { Input } from 'antd'
class todoList extends React.Component{
    render(){
        return ( 
            <div>
               <Input placeholder="Basic usage" style={{width: 300}}/>
               
            </div>
        
        )
    }
}
export default todoList